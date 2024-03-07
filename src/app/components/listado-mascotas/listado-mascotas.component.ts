import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css'],
})
export class ListadoMascotasComponent {
  displayedColumns: string[] = [
    'nombre',
    'color',
    'edad',
    'raza',
    'peso',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _mensajeService: MensajesService,
    private _mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  obtenerMascotas() {
    this.loading = true;
    this._mascotaService.getMascotas().subscribe((data) => {
      this.loading = false;
      this.dataSource.data = data;
    });
  }

  eliminarMascota(id: number) {
    this.loading = true;
    this._mascotaService.deleteMascota(id).subscribe(() => {
      this._mensajeService.mensajeExitoso('La mascota fue eliminada con éxito');
      this.loading = false;
      this.obtenerMascotas();
    });
  }
}
