import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleadosservice';
import { Empleado } from 'src/app/models/empleado';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menurutas',
  templateUrl: './menurutas.component.html',
  styleUrls: ['./menurutas.component.css']
})
export class MenurutasComponent implements OnInit {


  constructor(
    private _service:EmpleadosService

  ) { }

//Cuando se sacann todos los empleados se accede al enviroment y se añade el nombre y cntraseña
//del primer empleado
  ngOnInit(): void {
    this._service.getEmpleados().subscribe(res=>{
      environment.nombre = res[0].apellido;
      environment.contraseña = res[0].idEmpleado.toString();
      //Una vez que se recoge el nombre y la contraseña accedemos al servicio de PostLogin
      //Para recoger en el res el token
      this._service.postLogin().subscribe(res=>{
        //Guardamos el token
        environment.token = res.response;
        console.log(environment.token = res.response)
      });

    });
  }


}
