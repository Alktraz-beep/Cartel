import { Component,OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Color } from './components/interface/color.class';
import { ApiService } from './components/services/api.service';
import { Cartel } from './components/interface/cartel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
      
  }
  constructor(private apiService:ApiService){
    
  }
}
