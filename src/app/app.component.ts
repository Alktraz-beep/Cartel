import { Component,OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Color } from './components/interface/color.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = 'cartel';
  //FORMATO ACTUAL QUE ELIGE LA PERSONA
  formato_actual:string="f1";
  //LOS COLORES DE FONDO QUE PUEDE EDITAR POR DEFECTO
  color:string[]=["","#8CBDB9","#BFDAD7",""];
  //ANIMACIONES
  constructor(private wowService: NgwWowService){
    

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.wowService.init(); 
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
