import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { element } from 'protractor';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.css']
})
export class FormatoComponent implements OnInit {
  //EVENTO QUE EMITIRA EL TIPO DE FORMATO
 @Output() eventoDaFormato:EventEmitter<string>=new EventEmitter<string>();
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  onclick(tipo:string,element:HTMLElement){
    // var formatos:HTMLCollectionOf<Element>=document.getElementsByClassName("options");
    // for(let i=0;i<formatos.length;i++){
    //   formatos.item(i)?.setAttribute("style","background-color:'white';");
    // }
    // element.style.backgroundColor="#d8bfd5"

    //SE EMITE EL TIPO DE FORMATO QUE SELECCIONÓ
    this.eventoDaFormato.emit(tipo);
    //ACTUALIZA LOS DATOS
    this.apiService.servicioActualiza();
    console.log("formato actual forms "+tipo);
  }

}
