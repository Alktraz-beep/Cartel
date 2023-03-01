import { Component, Input, OnInit } from '@angular/core';
import { Cartel } from '../../interface/cartel.interface';
import { CarrouselItem } from '../../multiimage-out/interface.carouselmetadata';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-format-two',
  templateUrl: './format-two.component.html',
  styleUrls: ['./format-two.component.css']
})
export class FormatTwoComponent implements OnInit {
  //ENTRADAS DE READONLY
  disabled:boolean=false;//dice si esta en modo readonly
  @Input() graficasR:string[]=[];
  @Input() imagesR:CarrouselItem[]=[];

  //ENTRADAS
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
  constructor(private apiS:ApiService) { 
    //CUANDO SE EMITE EL READONLY
    apiS.readonly.subscribe(()=>{
      this.disabled=true;
      console.log("poner disable");
    });
  }

  ngOnInit(): void {
  }

}
