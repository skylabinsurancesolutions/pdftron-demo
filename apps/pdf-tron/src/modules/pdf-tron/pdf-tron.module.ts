import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfTronRoutingModule } from './pdf-tron-routing.module';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfViewerDataComponent } from './pdf-viewer/pdf-viewer-data.component';

@NgModule({
  declarations: [PdfViewerComponent],
  imports: [CommonModule, PdfTronRoutingModule],
})
export class PdfTronModule {}
