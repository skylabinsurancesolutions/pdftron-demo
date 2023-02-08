import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'pdf-tron',
    loadChildren: () =>
      import('../modules/pdf-tron/pdf-tron.module').then(
        (m) => m.PdfTronModule
      ),
  },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
  })],
  // exports: [RouterModule],
})
export class AppRoutingModule {}
