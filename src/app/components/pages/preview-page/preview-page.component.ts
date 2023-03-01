import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartel } from '../../interface/cartel.interface';
import { ApiService } from '../../services/api.service';
import { CarrouselItem } from '../../multiimage-out/interface.carouselmetadata';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent implements OnInit {
  cartel!:Cartel;
  graficas:string[]=[];
  images:CarrouselItem[]=[];
  public color:string[]=["","#8CBDB9","#BFDAD7",""];


  constructor(private activatedR:ActivatedRoute,
    private apiServ:ApiService) {

    //SE OBTIENEN LOS PARAMETROS DEL URL PARA PLASMAR EL PREVIEW
    activatedR.queryParams.subscribe(
      params=>{
        //SE REMPLAZA EL CODIGO POR EL %
        this.cartel=JSON.parse(params['cartel'].replace(/\/37/g,"%").replace(/\/38/g,"&"));
        this.graficas=this.cartel.graficas.split(",");
        //se obtienen imagenes carrousel y se pushean como CarrouselItem
        let imgs=this.cartel.imagenes.split(",");
        
        let count=1;
        for (const image in imgs) {
          if (Object.prototype.hasOwnProperty.call(imgs, image)) {
            let carrItem:CarrouselItem = {id:count,image:imgs[image]};
            this.images.push(carrItem);
            count+=1;
          }
        }
        //SE OBTIENE COLOR EL INDICE 0 DE COLORES ES UN ARRAY EN FORMA STRING
        let colores=this.cartel.colores.split(",");
        colores[0]=atob(colores[0]);
        this.color=colores[0].split(",");
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
