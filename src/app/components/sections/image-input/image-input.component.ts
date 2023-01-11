import { Component, Input, OnInit } from '@angular/core';
import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {
  //EL TIPO DE URL DE LA VARIABLE
  @Input() tipo:string="";
  //LA VARIABLE GRAF1, GRAF2, IMG1, IMG 2 QUE VIENE HEREDADA Y CAMBIA
  @Input() urlImg!:string[];
  //INPUT DEL CARTEL (HEREDADO) 
  @Input() cartel!:Cartel;
  //INPUT DE LA LABEL
  @Input() label:string="";
  url:string="";
  //SE INYECTA LA API SERVICE
  constructor(private apiService:ApiService) { 
    //SE ESTÁ A LA ESCUCHA DEL EVENTO PREVIEW QUE ES CUANDO DAN CLIC EN PREVIEW
    apiService.preview.subscribe(()=>{
      
      //SE MANDA A LLAMAR LA FUNCION DE CAMBIO YA QUE SE LLAMARA MUCHAS VECES 
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
  }
  

  ngOnInit(): void {
    //SI ES LA GRAFICA O IMAGE #1
    if(this.tipo=="GRAF1" || this.tipo=="IMG1"){
      this.url=this.urlImg[0];
    }
    //SI ES LA GRAFICA O IMAGE #2
    if(this.tipo=="GRAF2" || this.tipo=="IMG2")
    this.url=this.urlImg[1];
  }

  cambio(tipo:number){
    //EL CARTEL QUE VIENE DESDE EL INICIO SE MODIFICA PARA ASIGNARLE LA URL
    //DEPENDIENDO DEL FORMATO SE AÑADE UNA U OTRA
    //TODO IF CON EL FORMATO Y SI ES GRAFICA O IMAGEN
    //SI ES LA GRAFICA O IMAGE #1
    if(this.tipo=="GRAF1" || this.tipo=="IMG1"){
      this.urlImg[0]=this.url;
      console.log("CAMBIO GRAF")
    }
    //SI ES LA GRAFICA O IMAGE #2
    if(this.tipo=="GRAF2" || this.tipo=="IMG2")
      this.urlImg[1]=this.url;
    
    // this.cartel.titulo=this.url;
    // //ENVIA SEÑAL QUE YA EVIE LOS DATOS PARA EL PREVIEW
    if(tipo==1)
       this.apiService.servicioEnviar();    
  }
}
