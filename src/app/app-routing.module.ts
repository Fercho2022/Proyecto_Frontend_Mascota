import { VerMascotasComponent } from './components/ver-mascotas/ver-mascotas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';

const routes: Routes = [
  {path: '', redirectTo: 'listMascotas', pathMatch:'full' },
  {path: 'listMascotas', component: ListadoMascotasComponent},
  {path: 'agregarMascota', component: AgregarEditarMascotasComponent},
  {path: 'verMascota/:id', component: VerMascotasComponent},
  {path: 'editarMascota/:id', component: AgregarEditarMascotasComponent},
  {path: '**', redirectTo: 'listMascotas', pathMatch:'full'  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
