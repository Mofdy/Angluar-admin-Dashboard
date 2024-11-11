import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['alert-success'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['alert-error'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  showInfo(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['alert-info'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  showWarning(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['alert-warning'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
