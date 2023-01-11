import { Component, OnInit, Input } from '@angular/core';
import { CarrouselItem } from './interface.carouselmetadata';

@Component({
  selector: 'app-multiimage-out',
  templateUrl: './multiimage-out.component.html',
  styleUrls: ['./multiimage-out.component.css']
})
export class MultiimageOutComponent implements OnInit {
  /*
  Input Properties

   */
  @Input() height: number | string =500;//por defecto 500px
  @Input() isFullScreen=false;
  @Input() items: CarrouselItem[]=[
    {id:1,image:'https://www.ibima.eu/wp-content/uploads/2020/03/Web_COVID_Metaslider-1.jpg'},
    {id:2,image:'https://www.ibima.eu/wp-content/uploads/2020/03/Web_COVID_Metaslider-1.jpg'},
    {id:3,image:'https://www.ibima.eu/wp-content/uploads/2020/03/Web_COVID_Metaslider-1.jpg'},
    {id:4,image:'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'}
  ];//los items de carrousel

  //VARIABLES POR DEFECTO
  public finalHeight:number | string =0;//el final height que se usará
  public currentPosition:number=0;
  constructor() { 
    
  }

  ngOnInit(): void {
    
    this.finalHeight=this.isFullScreen?'100%':`${this.height}px`;
    console.log("height"+this.finalHeight);
    
    this.items.map((i,index)=>{
      i.id=index;//se enumaeran
      i.marginLeft=0;//sin margin
    });
    
  }
  //asigna la posicion actual que muestra el carrousel
  setCurrentPosition(position:number){
    this.currentPosition=position;
    this.items.find(i=>i.id===0)!.marginLeft=-100*position;//es la posicion de acuerdo al tamaño del ancho 100%
  }
  //muestra la posicion siguiente 
  setNext(){  
    let finalPercentage=0;
    let nextPosition=this.currentPosition+1;
    //siempre debe estar en el rango de la cantidad de items
    if(nextPosition<=this.items.length-1){
      finalPercentage=-100*nextPosition;
    }else{
      //si supera se va a la primera posicion
      nextPosition=0;
    }
    //se asigna al item 0
    this.items.find(i=>i.id===0)!.marginLeft=finalPercentage;
    this.currentPosition=nextPosition;
  }
  //PARA EL REGRESO DE FLECHA
  setBack(){
    let finalPercentage=0;
    let backPosition=this.currentPosition-1;
    if(backPosition>=0){
      finalPercentage=-100*backPosition;
    }else{
      //manda a la ultima posicion
      backPosition=this.items.length-1;
      finalPercentage=-100*backPosition;
    }
    //se asigna el desplazamiento
    this.items.find(i=>i.id===0)!.marginLeft=finalPercentage;
    this.currentPosition	=backPosition;
  }
}
