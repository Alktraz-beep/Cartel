import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Cartel } from '../../interface/cartel.interface';
import { CarrouselItem } from '../../multiimage-out/interface.carouselmetadata';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})

//CLASE QUE TIENE EL FORMATO 1
export class FormatOneComponent implements OnInit {
  //ENTRADAS DE READONLY
  disabled:boolean=false;//dice si esta en modo readonly
  @Input() graficasR:string[]=[];
  @Input() imagesR:CarrouselItem[]=[];
  //ENTRADAS
  //COLOR DE FONDO DE TITULO
  @Input() titulo_bg:string="";
  //COLOR DE FONDO DE SUBTITULOS
  @Input() subtitulos_color:string="";
  //COLOR DE FONDO DE APARTADOS
  @Input() apartados_bg:string="";
  //EL CARTEL CON LOS DATOS
  @Input() cartel!:Cartel;
  //LAS GRAFICAS E IMAGENES
  @Input() graficas!:string[];
  @Input() images!:string[];
  //SE INYECTA SERVICIO
  constructor(private apiS:ApiService) { 
     //CUANDO SE EMITE EL READONLY
     apiS.readonly.subscribe(()=>{
      //CAPTA EL MODO READONLY
      this.disabled=true;
    });
  }

  ngOnInit(): void {
  }
  
}
