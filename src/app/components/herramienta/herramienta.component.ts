import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../interface/color.class';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})
export class HerramientaComponent implements OnInit {
  isCollapse:boolean=false;
  @Input() nombre_herramienta:string="";
  //EVENTO PARA ENVIAR FORMATO
  @Output() eventFormato=new EventEmitter<string>();
  //EVENTO PARA ENVIAR COLORES
  @Output() eventColor=new EventEmitter<Color>();
  constructor() { }

  ngOnInit(): void {
  }
  //FUNCION QUE DESPLIEGA EL CONTENIDO DE LA HERRAMIENTA
  desplegar(){
    this.isCollapse=!this.isCollapse;
  }
  //FUNCION QUE ENVIA EL FORMATO AL SIDEBAR
  enviarFormato(formato:string){
    this.eventFormato.emit(formato);
  }
  //FUNCION QUE ENVIA EL COLOR AL SIDEBAR
  enviarColor(color:Color){
    this.eventColor.emit(color);
  }
}
