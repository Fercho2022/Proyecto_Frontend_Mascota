import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascotas',
  templateUrl: './ver-mascotas.component.html',
  styleUrls: ['./ver-mascotas.component.css'],
})
export class VerMascotasComponent implements OnInit, OnDestroy {
  id!: number;
  mascota!: Mascota;
  loading: boolean = false;
  routeSub!: Subscription;

  constructor(
    private _mascotaService: MascotaService,
    private aRoute: ActivatedRoute
  ) {

    // this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    //otra forma de obtener parametro id por ruta utilizando el subscribe
    this.routeSub = this.aRoute.params.subscribe((data) => {
      this.id = data['id'];
    });

    this.obtenerMascota();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  obtenerMascota() {
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe((data) => {
      this.mascota = data;
      this.loading = false;
    });
  }
}
