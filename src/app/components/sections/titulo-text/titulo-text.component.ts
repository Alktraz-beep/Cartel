import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-titulo-text',
  templateUrl: './titulo-text.component.html',
  styleUrls: ['./titulo-text.component.css']
})
export class TituloTextComponent implements OnInit {
  @Input() titulo_bg:string="";
  
  tinyMceConfig: any;
  html: string = "<div id='cont' style='position:absolute;width:100%;color:white;font-size:35pt;' >Escribe tu título</div>";
  constructor() { }

  ngOnInit(): void {
    this.configureTinyMce();
  }

  configureTinyMce() {
    
    this.tinyMceConfig = {
      inline: true,
      initialValue: "",
      disabled: true,
      plugins:['autoresize'],
      content_style:`
      .mce-content-body{
        overflow: hidden;
        height: 100%;
        padding:10px;
      }
      `,
      menubar: false,
      toolbar:"fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify "
    };
  }

}
