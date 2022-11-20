import { Injectable } from "@angular/core";
import { Observable, raceWith } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Empleado } from "../models/empleado";


@Injectable()
export class EmpleadosService {
  constructor(private _http:HttpClient){}

  //Sacar todos los empleados sin el login para acceder al primer empleado en MenuRutas
  getEmpleados(): Observable<any>{
    var request = "api/Empleados";
    var url = environment.urlEmpleados + request;
    return this._http.get(url);
  }
  postLogin(): Observable<any>{
    //Convertimos y recogemos el userName y la contraseña del primer empleado (en MenuRutas)
    var json = JSON.stringify({"userName": environment.nombre, "password": environment.contraseña})
    var header = new HttpHeaders().set("Content-type", "application/json");
    var request = "Auth/Login";
    var url = environment.urlEmpleadosLog + request;
    return this._http.post(url,json,{headers:header});

  }
  //Funcion para cargar los empleados recogiendo el token
  getEmpleadosLog(): Observable<any>{
    //Le pasamos el token como un header
    var header = new HttpHeaders().set("Authorization", "Bearer " +environment.token);
    var request = "api/Empleados";
    var url = environment.urlEmpleadosLog + request;
    return this._http.get(url,{headers:header});
  }



}
