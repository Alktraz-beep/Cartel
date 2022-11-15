import { Component, Input, OnInit } from '@angular/core';
import "@tinymce/tinymce-angular";

import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';

declare var tinymce:any;
@Component({
  selector: 'app-titulo-text',
  templateUrl: './titulo-text.component.html',
  styleUrls: ['./titulo-text.component.css']
})
export class TituloTextComponent implements OnInit {
  //INPUT DEL COLOR DE BACKGROUND DE TITULO
  @Input() titulo_bg:string="";
  //INPUT DE LA PLANTILLA
  @Input() html:string="";
  //INPUT DEL CARTEL 
  @Input() cartel!:Cartel;

  //VARIABLE QUE PONE EN READONLY EL TINY
  disabled:boolean=false;
  tinyMceConfig: any;
  //html: string = "<div id='cont' style='position:absolute;width:100%;color:white;font-size:35pt;' >Escribe tu título</div>";
  constructor(private apiService:ApiService) {
    
    //CUANDO SE VA A DAR PREVIEW SE ACTUALIZA
    apiService.preview.subscribe(()=>{
      this.cambio(1);
    });
    //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
    apiService.actualizar.subscribe(()=>{
      this.cambio(0);
    });
    //CUANDO SE VA A DAR GUARDADO SE ACTUALIZA
    apiService.guardado.subscribe(()=>{
      this.cambio(0);
    });
    
    //CUANDO SE EMITE EL READONLY
    apiService.readonly.subscribe(()=>{
      this.disabled=true;
      console.log("poner disable");
    });
  }


  ngOnInit(): void {
    //CONFIGURACION DEL TINYMCE EDITOS
    this.configureTinyMce();
    //SE AVIZA QUE YA SE CARGO 
    this.apiService.servicioLoaded();
    
  }

  configureTinyMce() {
    
    this.tinyMceConfig = {
      inline: true,
      initialValue: "",
      disabled: true,
      plugins:['autoresize'],
      content_style:`
      .mce-content-body{
        overflow: hidden;
        height: 100%;
        padding:10px;
      }
      `,
      menubar: false,
      toolbar:"fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify "
    };
  }
  cambio(tipo:number){
    this.cartel.titulo=this.html;
    //ENVIA SEÑAL QUE YA EVIE LOS DATOS
    if(tipo==1)
      this.apiService.servicioEnviar();    
  }
}
