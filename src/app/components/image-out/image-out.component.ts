import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-out',
  templateUrl: './image-out.component.html',
  styleUrls: ['./image-out.component.css']
})
export class ImageOutComponent implements OnInit {
  //ES EL LINK DE LA IMAGEN DEL COMPONENTE
  @Input() url:string="https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg";
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
