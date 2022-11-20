import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleadosservice';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados !: Array<Empleado>;
  constructor(
    private _service:EmpleadosService
  ) { }

  //Hacemos el log una vez que recibimos el token
  loadEmpleados(){
    this._service.getEmpleadosLog().subscribe(res=>{
      console.log("a");
      this.empleados = res;
    });
  }
  ngOnInit(): void {
    this.loadEmpleados();
  }

}
