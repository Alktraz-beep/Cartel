import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-multiimage-input',
  templateUrl: './multiimage-input.component.html',
  styleUrls: ['./multiimage-input.component.css']
})
export class MultiimageInputComponent implements OnInit {
  url:string="";
  paths:string[]=[];
  constructor(private apiService:ApiService) { 
    
  }

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
