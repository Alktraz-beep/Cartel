import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from "@angular/forms";
import {  HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HerramientaComponent } from './components/herramienta/herramienta.component';
import { FormatoComponent } from './components/herramientas/formato/formato.component';
import { FileOptionsComponent } from './components/herramientas/file-options/file-options.component';
import { FormatOneComponent } from './components/formats/format-one/format-one.component';
import { BannerComponent } from './components/banner/banner.component';
import { TituloTextComponent } from './components/sections/titulo-text/titulo-text.component';
import { CajaTextoComponent } from './components/sections/caja-texto/caja-texto.component';
import { FormatTwoComponent } from './components/formats/format-two/format-two.component';
import { FormatThreeComponent } from './components/formats/format-three/format-three.component';
import { ColorComponent } from './components/herramientas/color/color.component';
import { ImageInputComponent } from './components/sections/image-input/image-input.component';
import { MultiimageInputComponent } from './components/sections/multiimage-input/multiimage-input.component';

import { EditablePageComponent } from './components/pages/editable-page/editable-page.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PreviewPageComponent } from './components/pages/preview-page/preview-page.component';
import { ImageOutComponent } from './components/image-out/image-out.component';
import { MultiimageOutComponent } from './components/multiimage-out/multiimage-out.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HerramientaComponent,
    FormatoComponent,
    FileOptionsComponent,
    FormatOneComponent,
    BannerComponent,
    TituloTextComponent,
    CajaTextoComponent,
    FormatTwoComponent,
    FormatThreeComponent,
    ColorComponent,
    ImageInputComponent,
    MultiimageInputComponent,
    EditablePageComponent,
    PreviewPageComponent,
    DialogComponent,
    ImageOutComponent,
    MultiimageOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    NgwWowModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
