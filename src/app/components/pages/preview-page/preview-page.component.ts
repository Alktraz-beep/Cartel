import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent implements OnInit {
  cartel!:Cartel;
  public color:string[]=["","#8CBDB9","#BFDAD7",""];


  constructor(private activatedR:ActivatedRoute,
    private apiServ:ApiService) {

    //SE OBTIENEN LOS PARAMETROS DEL URL 
    activatedR.queryParams.subscribe(
      params=>{
        //SE REMPLAZA EL CODIGO POR EL %
        this.cartel=JSON.parse(params['cartel'].replace(/\/37/g,"%").replace(/\/38/g,"&"));
        console.log("hoka  "+this.cartel.titulo);
      }
    );
    //SE EMITE EL SERVICIO MODO READONLY UNA VEZ CARGARON TODOS LOS ELEMENTOS
    apiServ.loaded.subscribe(()=>{
      this.apiServ.servicioReadonly();
    });
    
  }

  ngOnInit(): void {
          
  }

}
