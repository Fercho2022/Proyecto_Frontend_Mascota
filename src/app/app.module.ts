import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { VerMascotasComponent } from './components/ver-mascotas/ver-mascotas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotasComponent,
    ListadoMascotasComponent,
    VerMascotasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
