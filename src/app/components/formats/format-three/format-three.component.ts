import { Component, Input, OnInit } from '@angular/core';
import { Cartel } from '../../interface/cartel.interface';

@Component({
  selector: 'app-format-three',
  templateUrl: './format-three.component.html',
  styleUrls: ['./format-three.component.css']
})
export class FormatThreeComponent implements OnInit {
  @Input() titulo_bg:string="";
  
  //COLOR DE FONDO DE SUBTITULOS
  @Input() subtitulos_color:string="";
  //COLOR DE FONDO DE APARTADOS
  @Input() apartados_bg:string="";
  //EL CARTEL CON LOS DATOS
  @Input() cartel!:Cartel;
  constructor() { }

  ngOnInit(): void {
  }

}
