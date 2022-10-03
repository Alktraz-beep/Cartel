import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '../interface/color.class';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  isCollapsed:boolean=false;
  constructor() { }
  //EVENTO QUE ENVIA EL FORMATO
  @Output() eventoFormato=new EventEmitter<string>();
  //EVENTO QUE ENVIA COLOR
  @Output() eventoColor=new EventEmitter<Color>();
  ngOnInit(): void {
  }

  collapseBar(){
    this.isCollapsed=!this.isCollapsed;
  }
  //FUNCION QUE ENVIA EL FORMATO AL APPCOMPONENT
  enviarFormato(formato:string){
    this.eventoFormato.emit(formato);
  }
  //FUNCION QUE ENVIA EL FORMATO AL APPCOMPONENT
  enviarColor(color:Color){
    this.eventoColor.emit(color);
  }
}
