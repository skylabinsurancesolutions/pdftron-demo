import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

@Component({
  selector: 'skylab-demo-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent implements AfterViewInit {
  @ViewChild('programDocumentViewerV3') viewer: ElementRef;

  wvInstance: WebViewerInstance;

  documents = [
    'https://media.skylabinsurancesolutions.com/media/62210d2630652cd01506b0ac/62504fe9ed69aaf351152eb1/62504fe9ed69aaf351152eb1.pdf', 
    'https://media.skylabinsurancesolutions.com/media/63e4075598df7365cd351e6d/63e4075598df7365cd351e6d.docx'
  ]


  ngAfterViewInit(): void {
    this.loadWebViewer();
  }

  async loadWebViewer() {
    this.wvInstance = await WebViewer(
      {
        path: './assets/pdftron',
        // doc
        initialDoc:
          this.documents,
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

    const { documentViewer, Annotations, annotationManager, PDFNet } =
      this.wvInstance.Core;

    /**
     * Loads the initial document.
     */

    // console.log(' Loads the initial document');

    // this.coreControlsEvent.emit(this.wvInstance.UI.LayoutMode.Single);

    // instance.UI.openElements(['notesPanel']);

    // documentViewer.addEventListener('annotationsLoaded', () => {
    //   console.log('annotations loaded');
    // });
    // annotationManager.addEventListener('fieldChanged', (field, value) => {
    //   console.log(`Field changed: ${field.name}, ${value}`);
    // });

    // await documentViewer.getDocument().applyTemplateValues(options);

    // console.log('this.wvInstance.UI.loadDocument');
    this.wvInstance.Core.documentViewer.addEventListener(
      'documentLoaded',
      async () => {
        console.log('documentViewer.addEventListener(documentLoaded');
        // if (this.replaceData) {
        //   await this.replacePDFDataManual();
        // }
      }
    );
    // .then(async (instance) => {
    //   this.wvInstance = instance;

    // })
    // .catch((error) => {
    //   console.log(error);
    //   this.documentLoaded$.next(false);
    //   this.documentError$.next('We could not load this document. Please try again or contact your admin.');
    // });
  }
}
