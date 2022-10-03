import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-two',
  templateUrl: './format-two.component.html',
  styleUrls: ['./format-two.component.css']
})
export class FormatTwoComponent implements OnInit {
  @Input() titulo_bg:string="";
  
  //COLOR DE FONDO DE SUBTITULOS
  @Input() subtitulos_color:string="";
  //COLOR DE FONDO DE APARTADOS
  @Input() apartados_bg:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
