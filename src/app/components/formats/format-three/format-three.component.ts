import { Component, Input, OnInit } from '@angular/core';
import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-format-three',
  templateUrl: './format-three.component.html',
  styleUrls: ['./format-three.component.css']
})
export class FormatThreeComponent implements OnInit {
  //ENTRADAS DE READONLY
  disabled:boolean=false;//dice si esta en modo readonly
  @Input() graficasR:string[]=[];
  @Input() imagesR:string[]=[];
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
   //SE INYECTA SERVICIO
  constructor(private apiS:ApiService) { 
     //CUANDO SE EMITE EL READONLY
     apiS.readonly.subscribe(()=>{
      this.disabled=true;
    });
  }

  ngOnInit(): void {
  }

}
