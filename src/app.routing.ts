import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./app/components/home/home.component";
import { EmpleadosComponent } from "./app/components/empleados/empleados.component";
const appRoutes: Routes =  [
  {path:"", component:HomeComponent},
  {path:"empleados", component:EmpleadosComponent}
]
export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
