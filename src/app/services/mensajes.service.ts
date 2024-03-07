import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private _snackBar: MatSnackBar) { }

  mensajeExitoso(mensaje:string){
    this._snackBar.open(mensaje, '', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
}
