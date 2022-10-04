import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {

  constructor() { }
  @Input() label:string="";
  url:string="";

  ngOnInit(): void {
  }

}
