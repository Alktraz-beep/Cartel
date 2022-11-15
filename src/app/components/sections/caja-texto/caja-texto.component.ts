import { Component, OnInit,Input } from '@angular/core';
import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-caja-texto',
  templateUrl: './caja-texto.component.html',
  styleUrls: ['./caja-texto.component.css']
})
export class CajaTextoComponent implements OnInit {
  //ES LA ENTRADA DEL COLOR QUE TENDRA EN CABECERA Y DE FONDO
  @Input() titulo:string="Apartado";
  @Input() subtitulos_color:string="";
  @Input() apartados_bg:string="";
  //LA ENTRADA DE HTML CORRESPONDIENTE y del cartel
  @Input() html:string="";
  @Input() cartel!:Cartel;

  disabled:boolean=false;
  tinyMceConfig: any;
  editor: any;
  //html: string = "<div id='cont' style='position:absolute;width:100%;color:black;font-size:1.5vw;' >Escribe tu apartado</div>";
  constructor(private apiService:ApiService) {

    //CUANDO SE VA A DAR PREVIEW SE ACTUALIZA
    apiService.preview.subscribe(()=>{
      this.cambio(1);
    });
    //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
    apiService.actualizar.subscribe(()=>{
      this.cambio(0);
    });
    //CUANDO SE VA A DAR GUARDAR SE ACTUALIZA
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
    this.configureTinyMce();
  }

  configureTinyMce() {
    
    this.tinyMceConfig = {
      inline: true,
      initialValue: "",
      disabled: true,
      plugins: ['autoresize','link'],
      content_style:`
      .mce-content-body{
        position:absolute;
        width:100%;
        height: 100%;
        padding:5px;
      }
      p {
        padding: 0;
        margin: 0px 0;
      }
      `,
      menubar: false,
      toolbar:"fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify | link"
    };
  }

  cambio(tipo:number){
    //this.html=this.html;
    if(this.titulo=="Introducción"){
      this.cartel.intro=this.html;
    }
    if(this.titulo=="Objetivos"){
      this.cartel.objetivos=this.html;
    }
    if(this.titulo=="Conclusión"){
      this.cartel.conclusion=this.html;
    }
    if(this.titulo=="Metodología"){
      this.cartel.metodologia=this.html;
    }
    if(this.titulo=="Resultados"){
      this.cartel.resultados=this.html;
    }
    if(this.titulo=="Referencias"){
      this.cartel.referencias=this.html;
    }
    if(this.titulo=="Datos de Contacto"){
      this.cartel.datos_contacto=this.html;
    }
    if(this.titulo=="Agradecimientos"){
      this.cartel.agradecimientos=this.html;
    }
    //AVISA QUE SE VAN A ENVIAR
    if(tipo==1)
      this.apiService.servicioEnviar();
  }
}
