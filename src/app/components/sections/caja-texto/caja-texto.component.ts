import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-caja-texto',
  templateUrl: './caja-texto.component.html',
  styleUrls: ['./caja-texto.component.css']
})
export class CajaTextoComponent implements OnInit {
  @Input() titulo:string="Apartado";
  @Input() subtitulos_color:string="";
  @Input() apartados_bg:string="";
  tinyMceConfig: any;
  editor: any;
  html: string = "<div id='cont' style='position:absolute;width:100%;color:black;font-size:1.5vw;' >Escribe tu apartado</div>";
  constructor() { }

  ngOnInit(): void {
    this.configureTinyMce();
  }

  configureTinyMce() {
    
    this.tinyMceConfig = {
      inline: true,
      initialValue: "",
      disabled: true,
      plugins: ['autoresize','link'],
      content_style:`
      .mce-content-body{
        position:absolute;
        width:100%;
        height: 100%;
        padding:5px;
      }
      p {
        padding: 0;
        margin: 0px 0;
      }
      `,
      menubar: false,
      toolbar:"fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify | link"
    };
  }


}
