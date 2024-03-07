import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-agregar-editar-mascotas',
  templateUrl: './agregar-editar-mascotas.component.html',
  styleUrls: ['./agregar-editar-mascotas.component.css'],
})
export class AgregarEditarMascotasComponent {
  loading: boolean = false;
  form!: FormGroup;
  id!: number;
  operacion: string = 'Agregar Mascota';

  constructor(
    private fb: FormBuilder,
    private _mascotaService: MascotaService,
    private _mensajeService: MensajesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    if (this.id != 0) {
      this.operacion = 'Editar Mascota';
      this.obtenerMascota(this.id);
    }
  }

  obtenerMascota(id: number) {
    this.loading = true;
    this._mascotaService.getMascota(id).subscribe((data) => {
      console.log(data);
      this.form.setValue({
        nombre:data.nombre,
        edad:data.edad,
        color:data.color,
        peso:data.peso,
        raza:data.raza
      })
      this.loading = false;
    });
  }

  agregarEditarMascota() {


    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso,
    };

    if(this.id!=0){
      mascota.id=this.id;
      this.editarMascota(mascota, this.id);
    }else{
      this.agregarMascota(mascota);
    }


  }

  editarMascota(mascota:Mascota, id:number){
    this.loading=true;
    this._mascotaService.updateMascota(mascota, id).subscribe(() => {
      this.loading=false;
      this._mensajeService.mensajeExitoso(
        'La mascota fue editada con éxito'
      );
      this.router.navigate(['/listMascotas']);
    });
  }
  agregarMascota(mascota: Mascota){
    this._mascotaService.addMascota(mascota).subscribe(() => {
      this._mensajeService.mensajeExitoso(
        'La mascota fue registrada con éxito'
      );
      this.router.navigate(['/listMascotas']);
    });
  }
}
