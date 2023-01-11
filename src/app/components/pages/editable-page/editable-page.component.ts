import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Cartel } from '../../interface/cartel.interface';
import { Color } from '../../interface/color.class';
import { ApiService } from '../../services/api.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-editable-page',
  templateUrl: './editable-page.component.html',
  styleUrls: ['./editable-page.component.css']
})
export class EditablePageComponent implements OnInit {
  public get wowService(): NgwWowService {
    return this._wowService;
  }
  public set wowService(value: NgwWowService) {
    this._wowService = value;
  }
  title:string = 'cartel';
  //FORMATO ACTUAL QUE ELIGE LA PERSONA
  formato_actual:string="f1";
  //EL  NOMBRE DEL CARTEL
  nombre:string="";
  //LOS COLORES DE FONDO QUE PUEDE EDITAR POR DEFECTO
  public color:string[]=["","#8CBDB9","#BFDAD7",""];
  //EL CARTEL POR DEFECTO
  cartel!:Cartel;
  // DIV POR DEFAULT TODOS LOS TITULOS TIENEN ESTE POR DEFAULT DE INICIO ABAJO SE ACOMPLETA
  html:string="<div id='cont' style='position:absolute;width:100%;color:black;font-size:1.5vw;' >";
  //GRAFICAS E IMAGENES DEL CARTEL SERAN LLENADAS POSTERIORMENTE
  graficas:string[]=["",""];
  images:string[]=[];
  //ANIMACIONES Y SERVICIOS DE API Y DIALOG PARA PONER EL NOMBRE
  constructor(private _wowService: NgwWowService,
    private apiService:ApiService,
    private route:Router,){
      //=======================================================GUARDADO===============================
    apiService.guardado.subscribe(
      //CUANDO SE CAPTA EL GUARDADO
      ()=>{
        //SI YA LE PUSO NOMBRE AL CARTEL
        if(this.nombre!=""){

          //SE ACTUALIZA EL CARTEL CON LOS COLORES,NOMBRE
          this.cartel.formato=this.formato_actual;
          let colors=btoa(this.color.toString());//se encriptan el array de los colores 
          this.cartel.colores=colors;

          this.cartel.nombre=this.nombre;

        
          //SE LLAMA A LA API PARA QUE GUARDE EL CARTEL
          
          apiService.guardarCartel(this.cartel).subscribe(
            {
              next: data => {
                console.log("res:\n"+data)
              },
              error: error => {
                console.error('There was an error!', error);
              } 
            }
          );
        }else{
          //SI NO TIENE NOMBRE SE AVISA
          window.alert("Tu documento requiere un nombre!");
        }
      }

    );
    //===========================================FINALIZADO=========================================================
    //AL RECIBIR LA SEÑAL DE FINALIZADO
    apiService.finalize.subscribe(
      ()=>{
        if(this.nombre!=""){

          //SE ACTUALIZA EL CARTEL CON LOS COLORES,NOMBRE
          this.cartel.formato=this.formato_actual;
          let colors=btoa(this.color.toString());//se encriptan el array de los colores 
          this.cartel.colores=colors;

          this.cartel.nombre=this.nombre;
          
          //SE ENVIA EL CARTEL A FINALIZAR Y SI AUN NO EXISTE LO INSERTA YA PUBLICADO
          apiService.actualizaCartel(this.cartel).subscribe();
        }else{
          //SI NO TIENE NOMBRE SE AVISA
          window.alert("Tu documento requiere un nombre!");
        }
      }
    );
    //=======================================================PREVIEW=================================================

    //CONTADOR YA QUE CUANDO SE DA PREVIEW TODOS LOS COMPONENTES ENVIAN LA SEÑAL Y HASTA QUE EL ULTIMO LO HAGA SE ENVIAN TODOS
    let cont=0;
    //EVENTO CUANDO LE DA A PREVIEW 
    apiService.enviar.subscribe(

      ()=>{
        cont+=1;
        console.log(cont);
        if(cont==11 ){
          //SE ACTUALIZA EL CARTEL
          this.cartel.formato=this.formato_actual;
          let colors=btoa(this.color.toString());//se encriptan el array de los colores 
          this.cartel.colores=colors; 
          console.log(this.graficas.toString());
          this.cartel.graficas=this.graficas.toString();
          //SE PONE LA REDIRECCION PRINCIPAL
          const url = this.route.serializeUrl(
            this.route.createUrlTree([`/preview`])
          );


          //SE REMPLAZA EL % POR SU CODIGO 
          console.log(JSON.stringify(this.cartel).replace(/%/g,"/37"));
          
          window.open(url+"?cartel="+JSON.stringify(this.cartel).replace(/%/g,"/37").replace(/&/g,"/38"));
          cont=0; 
        }
      }
    );
  }
  ngOnInit(): void {
    //INICIA EL SERVICIO WOW
    this.wowService.init(); 
    //AQUI SE ELIGE CUAL ES EL FORMATO ACTUAL DEPENDIENDO DE SI EN LA URL SE TRAJO UN ID, DE LO CONTRARIO SE MUESTRA EL QUE HAY POR DEFECTO

    //FORMATO POR DEFAULT
    this.cartel={
      nombre:this.nombre,
      id:-1,//ESTE FORMATO POR DEFECTO AL NO SER PRECARGADO 
      colores:"",// LOS COLORES SON LOS MISMOS QUE YA SE DECLARARON ARRIBA
      formato:"f1",//EL FORMATO ES EL MISMO DE ARRIBA
      titulo:"<div id='cont' style='position:absolute;width:100%;color:white;font-size:35pt;' >Escribe tu título</div>",//SON LAS LABELS QUE CONTENDRAN LO QUE TIENE CADA FORMATO
      intro:this.html+"Escribe tu intro</div>",
      objetivos:this.html+"Escribe tus objetivos</div>",
      metodologia:this.html+"Escribe tu metodología</div>",
      resultados:this.html+"Escribe tus resultados</div>",
      conclusion:this.html+"Escribe tu conclusion</div>",
      referencias:this.html+"Escribe tus referencias</div>",
      datos_contacto:this.html+"Escribe tus datos</div>",
      agradecimientos:this.html+"Escribe tus agradecimientos</div>",
      imagenes:""+this.images.toString(),
      graficas:""+this.graficas.toString()
    };
  }
  //FUNCION OBTIENE LO QUE LLEGO DE SIDEBAR Y LO CAMBIA
  cambiarFormato(formato:string){
    this.formato_actual=formato;
    console.log("formato actual "+this.formato_actual);
  }
  // FUNCION QUE OBTIENE EL COLOR DEL SIDEBAR PARA CAMBIARLO
  cambiarColor(color:Color){
    this.color[color.index]=color.color;
  }

}
