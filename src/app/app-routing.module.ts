import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditablePageComponent } from './components/pages/editable-page/editable-page.component';
import { PreviewPageComponent } from './components/pages/preview-page/preview-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EditablePageComponent },
  { path: 'preview',  component: PreviewPageComponent},
  //{ path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
