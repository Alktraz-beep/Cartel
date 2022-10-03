import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-one',
  templateUrl: './format-one.component.html',
  styleUrls: ['./format-one.component.css']
})
export class FormatOneComponent implements OnInit {
  //COLOR DE FONDO DE TITULO
  @Input() titulo_bg:string="";
  //COLOR DE FONDO DE SUBTITULOS
  @Input() subtitulos_color:string="";
  //COLOR DE FONDO DE APARTADOS
  @Input() apartados_bg:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
