import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenurutasComponent } from './components/menurutas/menurutas.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from 'src/app.routing';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosService } from './services/empleadosservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenurutasComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [appRoutingProviders,EmpleadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
