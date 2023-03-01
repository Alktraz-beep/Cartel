import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-multiimage-input',
  templateUrl: './multiimage-input.component.html',
  styleUrls: ['./multiimage-input.component.css']
})
export class MultiimageInputComponent implements OnInit {
  url:string="";//LA URL QUE SE AÑADE
  @Input() paths:string[]=[];//LOS LINKS TOTALES
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
  }

  addImage(){
    if(this.url!=""){
      //si la foto es de drive
      //DEBE APLICAR CON TODOS LOS LINKS
      if(this.url.includes('https://drive.google.com/')){
        //SE OBTIENE EL ID DE LA URL
        const regex = /\/d\/(.*?)\//;
        const match = this.url.match(regex);
        const id = match && match[1];                
        //SE GENERA EL NUEVO LINK
        this.url='https://drive.google.com/uc?export=view&id='+id;
        
      }
      this.paths.push(this.url);
    }
  }
  removeImage(index:number){
    this.paths.splice(index,1);
    console.log(this.paths);
  }

  
  cambio(tipo:number){
    // //ENVIA SEÑAL QUE YA EVIE LOS DATOS PARA EL PREVIEW
    if(tipo==1)
       this.apiService.servicioEnviar();    
  }
}
