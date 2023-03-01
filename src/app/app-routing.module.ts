import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditablePageComponent } from './components/pages/editable-page/editable-page.component';
import { PreviewPageComponent } from './components/pages/preview-page/preview-page.component';

const routes: Routes = [
  //PARA CARTEL SOLO SE DEJA ASI
  { path: '', pathMatch: 'full', component: EditablePageComponent },
  //PARA GENERAR EL PREVIEW DESCOMENTAR ESTE Y COMENTAR EL DE ARRIBA
  //{ path: '',  component: PreviewPageComponent },
  //{ path: 'preview',  component: PreviewPageComponent},
  //{ path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
