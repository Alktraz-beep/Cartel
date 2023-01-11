import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cartel } from '../interface/cartel.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //URLS PARA SERVICIOS
  core:string="http://localhost/Cartel/api/";
  save:string="guardar.php";
  update:string="actualizar.php";

  //EVENTOS QUE SE EMITEN PARA AVISAR QUE SE QUIERE REALIZAR UNA PREVIEW,GUARDAR,ENVIAR DATOS O ACTUALIZAR EN LA BASE DE DATOS
  guardado=new EventEmitter<boolean>();//PARA CUANDO SE DESEA GUARDAR 
  finalize=new EventEmitter<boolean>();//PARA CUANDO SE DESEA FINALIZAR 

  preview=new EventEmitter<boolean>();
  actualizar=new EventEmitter<boolean>();
  enviar=new EventEmitter<boolean>();
  readonly=new EventEmitter<boolean>();
  loaded=new EventEmitter<boolean>();
  //SE INYECTA SERVICIO PARA HACER POST 
  constructor(private http:HttpClient) { }
  
  //EMITE LA SEÑAL DE ACTUALIZADO
  servicioActualiza(){
    this.actualizar.emit(true);
  }
  //EMITE LA SEÑAL DE GUARDADO
  servicioGuardado(){
    this.guardado.emit(true);
  }
  //EMITE LA SEÑAL DE FINALIZADO/PUBLICAR
  servicioFinalize(){
    this.finalize.emit(true);
  }
  //EMITE LA SEÑAL DE MOSTRAR PREVIEW
  servicioPreview(){
    this.preview.emit(true);
  }
  //EMITE SEÑAL QUE LOS DATOS ESTAN LISTOS PARA ENVIAR
  servicioEnviar(){
    this.enviar.emit(true);
  }
  //EMITE SI ESTA EN MODO READ ONLY
  servicioReadonly(){
    this.readonly.emit(true);
  }
  //EMITE QUE YA SE CREO TODO
  servicioLoaded(){
    this.loaded.emit(true);
  }
  //OBTIENE EL SERVICIO PARA GUARDAR EN LA BASE DE DATOS
  guardarCartel(cartel_:Cartel):Observable<any>{
    const url=`${this.core}${this.save}`+"?cartel="+encodeURIComponent(JSON.stringify(cartel_));
    console.log(url);

    return this.http.get<any>(url);
  }
  //OBTENE EL SERVICIO PARA FINALIZAR EL CARTEL EN LA BASE DE DATOS
  actualizaCartel(cartel_:Cartel):Observable<any>{
    const url=`${this.core}${this.update}`+"?cartel="+encodeURIComponent(JSON.stringify(cartel_));
    console.log(url);

    return this.http.get<any>(url);
  }

}
