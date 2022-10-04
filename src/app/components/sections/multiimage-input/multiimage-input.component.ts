import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiimage-input',
  templateUrl: './multiimage-input.component.html',
  styleUrls: ['./multiimage-input.component.css']
})
export class MultiimageInputComponent implements OnInit {
  url:string="";
  paths:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addImage(){
    if(this.url!=""){
      this.paths.push(this.url);
    }
  }
  removeImage(index:number){
    this.paths.splice(index,1);
  }
}
