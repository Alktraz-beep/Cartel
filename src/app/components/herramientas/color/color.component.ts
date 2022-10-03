import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '../../interface/color.class';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  //CONTIENE EL COLOR CAMBIADO DEPENDIENDO EL COMPONENTE 
  color:string[]=["","","",""];//0:fondo,1:titulo,2:subtítulo,3:apartados
  @Output() eventColor=new EventEmitter<Color>();
  constructor() { }

  ngOnInit(): void {
  }

  //FUNCION QUE CAMBIA EL COLOR, emite el color obtenido
  cambiarColor(index:number){
    this.eventColor.emit(new Color(this.color[index],index));
  }
}