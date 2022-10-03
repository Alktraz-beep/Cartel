import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from "@angular/forms";

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
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    NgwWowModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
