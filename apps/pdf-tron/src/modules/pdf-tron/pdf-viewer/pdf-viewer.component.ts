import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import WebViewer, { Core, WebViewerInstance } from '@pdftron/webviewer';
import { Subject } from 'rxjs';
import { PdfViewerDataComponent } from './pdf-viewer-data.component';

@Component({
  selector: 'skylab-demo-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent
  extends PdfViewerDataComponent
  implements AfterViewInit
{
  @ViewChild('programDocumentViewerV3') viewer: ElementRef;

  wvInstance: WebViewerInstance;

  documentLoaded$: Subject<boolean> = new Subject<boolean>();
  loaded$ = this.documentLoaded$.asObservable();

  documentError$: Subject<string> = new Subject<string>();
  error$ = this.documentError$.asObservable();

  replaceData = false;

  ngAfterViewInit(): void {
    this.loadWebViewer();
  }
  /**
   * Init the web viewer and kick off a method to get and load the data/documents
   */
  async loadWebViewer() {
    try {
      // this.documentLoaded$.next(false);

      this.wvInstance = await WebViewer(
        {
          path: './assets/pdftron',
          // doc
          // initialDoc: this.document.map((f) => f.url),
          fullAPI: true,
          useDownloader: false,
          // extension: this.document.map((f) => (f.document.document.mimetype.endsWith('document') ? 'docx' : 'pdf')),
          // filename: this.document.find((f) => f.document.merge_tag.base).document.title,
          // licenseKey: this.licenseKey,
        },
        this.viewer.nativeElement
      );

      // this.wvInstance.UI.enableElements(['contentEditButton']);
      this.wvInstance.UI.disableFeatures([
        this.wvInstance.UI.Feature.Annotations,
        this.wvInstance.UI.Feature.FilePicker,
        // this.wvInstance.UI.Feature.Search,
        // this.wvInstance.UI.Feature.TextSelection,
        this.wvInstance.UI.Feature.ThumbnailMerging,
        this.wvInstance.UI.Feature.NotesPanel,
        // this.wvInstance.UI.Feature.
      ]);

      // Sorts the docs in the order they need to be merged together
      this.documents = this.documents.sort((a, b) => {
        if (a.document.merge_tag.base) {
          return 1;
        }
        if (b.document.merge_tag.base) {
          return -1;
        }
        return a.document.merge_tag.index - b.document.merge_tag.index;
      });

      await this.loadData();

      this.wvInstance.Core.documentViewer.addEventListener(
        'documentLoaded',
        async () => {
          console.log('documentViewer.addEventListener(documentLoaded');
          if (this.replaceData) {
            await this.replacePDFDataManual();
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async loadData() {
    this.documentLoaded$.next(false);
    const { PDFNet } = this.wvInstance.Core;
    /**
     * I replace this on the fly but hard coded this to make this demo work
     */
    const jsonReplacementData: any = this.jsonReplacementData;
    // const jsonReplacementData: any =
    //   await this._CommercialAutoDocGeneratorService.data(
    //     this.rate_schedule,
    //     this.quote ? this.quote : TEST_QUOTE
    //   );

    try {
      console.log(
        `${this.documents[0].document.title} - Merge several PDF documents into one...`
      );
      await this.wvInstance.Core.PDFNet.initialize();

      // console.log('documents.push(pdfDoc) ===================   documents.length', documents[1]);
      const documents: Core.PDFNet.PDFDoc[] = [];
      for (let i = 0; i < this.documents.length; i++) {
        const group = this.documents[i];
        //  const res = await firstValueFrom(
        //    this._DocumentV1Service.getSignedURL(group.document.document._id)
        //  );

        // Load the documents if PDF or if a .docx
        if (group.document.document.mimetype.endsWith('pdf')) {
          // THIS WORKS FINE
          const doc = await this.wvInstance.Core.createDocument(
            group.document.document.url,
            {
              //  l: this.licenseKey,
              extension: 'pdf',
              docId: group.document._id,
            }
          );

          const pdf = await doc.getPDFDoc();
          // I push the PDF.doc into an array of PDF docs
          documents.push(pdf);
        } else if (group.document.document.mimetype.endsWith('document')) {
          console.log('loadDocxTemplateData');

          try {
            /**
             * 1. I need to create the .DOCX with the replacement data (generate template)
             * 2. I could only find the office to PDF as buffer and get it to work.
             * 3. Then I create a PDF doc from the buffer.
             * 4. I push the PDF.doc into an array of PDF docs
             */
            const options =
              new this.wvInstance.Core.PDFNet.Convert.OfficeToPDFOptions();
            options.setTemplateParamsJson(JSON.stringify(jsonReplacementData));
            //  Types are not working?? Not sure why I had to do this. v-8.11.0
            const CORE: any = this.wvInstance.Core;
            const buf = await CORE.officeToPDFBuffer(
              group.document.document.url,
              options
            );
            const blob = new Blob([buf], { type: 'application/pdf' });
            const doc = await this.wvInstance.Core.createDocument(blob, {
              //  l: this.licenseKey,
              extension: 'pdf',
              docId: group.document._id,
            });

            const pdf = await doc.getPDFDoc();
            documents.push(pdf);
          } catch (error) {
            console.log(error);
            this.documentError$.next(error?.message);
          }
        } else {
          console.log('Other');
        }
      }
      // MERGE THE Core.PDFNet.PDFDoc's together into one
      const pdfDoc = await this.mergeDocuments(documents);
      // TODO: I would like to get this to work also
      // const stampedDoc = await this.stampPageNumber(pdfDoc);
      const data = await pdfDoc.saveMemoryBuffer(
        PDFNet.SDFDoc.SaveOptions.e_linearized
      );
      const arr = new Uint8Array(data);
      const blob = new Blob([arr], { type: 'application/pdf' });
      this.wvInstance.UI.loadDocument(blob, {
        extension: 'pdf',
        filename: this.documents[0].document.title,
      });
      // this.documentLoaded$.next(true);
    } catch (error) {
      console.log(error);
      // this.documentError$.next(error?.message);
    }
  }

  async mergeDocuments(
    sortedPDFDocs: Core.PDFNet.PDFDoc[]
  ): Promise<Core.PDFNet.PDFDoc> {
    console.log(
      'sortedPDFDocs ------------------------------',
      sortedPDFDocs.length
    );
    const baseDoc = sortedPDFDocs[0];
    for (let docIndex = 0; docIndex < sortedPDFDocs.length; docIndex++) {
      try {
        if (docIndex > 0) {
          console.log('DOC INDEX docIndex > 0', docIndex);
          const pageToStart: number = await baseDoc.getPageCount();
          console.log('pageToStart', pageToStart);
          const pagesToAddFromOtherDoc: number = await sortedPDFDocs[
            docIndex
          ].getPageCount();
          console.log('pagesToAddFromOtherDoc', pagesToAddFromOtherDoc);
          await baseDoc.insertPages(
            pageToStart + 1,
            sortedPDFDocs[docIndex],
            1,
            pagesToAddFromOtherDoc,
            this.wvInstance.Core.PDFNet.PDFDoc.InsertFlag.e_none
          );
          console.log('mergeDocuments:continue');
        } else {
          console.log('DOC INDEX docIndex === 0', docIndex);
        }
      } catch (error) {
        console.error(error);
        this.documentError$.next(error?.message);
      }
    }
    console.log('baseDoc.getPageCount()', await baseDoc.getPageCount());
    return baseDoc;
  }

  async replacePDFDataManual() {
    const { documentViewer, PDFNet, annotationManager } = this.wvInstance.Core;
    // await PDFNet.initialize();
    const doc = documentViewer.getDocument();
    const pdfDoc = await doc.getPDFDoc();
    const jsonReplacementData = this.jsonReplacementData;
    await this.replacePDFData(pdfDoc, jsonReplacementData);
  }

  async replacePDFData(
    pdfDoc: Core.PDFNet.PDFDoc,
    jsonReplacementData: {
      [key: string]: string | any[];
    }
  ): Promise<Core.PDFNet.PDFDoc> {
    const { PDFNet, annotationManager } = this.wvInstance.Core;

    const replacementData = this.codePDF(jsonReplacementData);
    await PDFNet.initialize();
    // Run PDFNet methods with memory management
    return await PDFNet.runWithCleanup(async () => {
      const fieldManager = annotationManager.getFieldManager();
      // console.log('fieldManager', '==========LOADING FIELDS================');
      const fields = await fieldManager.getFields();

      for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        try {
          // console.log('fieldManager', replacementData[field.getValue()]);
          if (replacementData[field.getValue()]) {
            field.setValue(replacementData[field.getValue()]);
          } else {
            // console.log('Field Does not exist');
          }
        } catch (error) {
          // console.log(error);
        }
      }

      // console.log('fieldManager', '==========LOADING FIELDS================');
      // console.log(jsonReplacementData);
      const replacer = await PDFNet.ContentReplacer.create();
      // replace a text placeholder
      // console.log(replacementData['dot_number']);
      for (const key in replacementData) {
        if (Object.prototype.hasOwnProperty.call(replacementData, key)) {
          try {
            let data: string;
            if (typeof replacementData[key] === 'boolean') {
              data = replacementData[key] ? 'True' : 'False';
            } else if (typeof replacementData[key] === 'object') {
              // console.log('replacer.addString [{{${key}}}]', `{{${key}}}`, data);
              // console.log(' await replacer.addString  key', key, data);
              continue;
            } else {
              data = replacementData[key];
              // console.log('replacer.addString [{{${key}}}]', `{{${key}}}`, data);
              // console.log(' await replacer.addString  key', key, data);
            }
            await replacer.addString(`[${key}]`, data);

            await replacer.addString(key, data);
            const page_cout = await pdfDoc.getPageCount();
            for (let ind = 1; ind <= page_cout; ++ind) {
              const page = await pdfDoc.getPage(ind);
              await replacer.process(page);
            }
          } catch (error) {
            // console.log(error);
          }
        }
      }
      return pdfDoc;
    }, '');
  }
  /**
   * Does not work
   * @param pdfDoc
   * @returns
   */
  async stampPageNumber(pdfDoc: Core.PDFNet.PDFDoc) {
    try {
      const { PDFNet } = this.wvInstance.Core;

      const s = new PDFNet.Stamper();
      s.setAlignment(
        PDFNet.Stamper.HorizontalAlignment.e_horizontal_right,
        PDFNet.Stamper.VerticalAlignment.e_vertical_bottom
      );
      console.log('setAlignment');
      s.setPosition(18, 18, false); // position quarter inch from bottom right corner
      console.log('setPosition');
      // const redColorPt = await PDFNet.ColorPt.init(1, 0, 0);
      // s.setFontColor(redColorPt);
      console.log('setFontColor');
      // const itr = await pdfDoc.getPageIterator();
      const pageCount = await pdfDoc.getPageCount();
      console.log({ pageCount });
      for (let i = 0; i < pageCount; i++) {
        // const currentPage = await pdfDoc.getPage(i);
        const pgSet = await PDFNet.PageSet.createRange(1, 2);
        console.log({ pgSet });
        console.log({ stamping: `Page: ${i + 1}` });
        await s.stampText(pdfDoc, `Page: ${i + 1}`, pgSet);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    return pdfDoc;
  }
  /**
   * returns an object typed for PDF rplacement
   * @param jsonReplacementData
   * @returns
   */
  codePDF(jsonReplacementData: { [key: string]: any }) {
    return { ...jsonReplacementData }; //
  }
}
