import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-file-options',
  templateUrl: './file-options.component.html',
  styleUrls: ['./file-options.component.css']
})
export class FileOptionsComponent implements OnInit {
  //INYECTA SEVICIO
  constructor(private apiS:ApiService) { }

  ngOnInit(): void {
  }

    // FUNCION QUE EMITE LA SEÑAL DE GUARDADO 
  emitSave(){
    //emite señal de guardado
    this.apiS.servicioGuardado();
  }

  
    // FUNCION QUE EMITE LA SEÑAL DE preview 
    emitPreview(){
      //emite señal de guardado
      this.apiS.servicioPreview();
    }
}
