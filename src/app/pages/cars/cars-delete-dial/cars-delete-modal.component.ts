import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-cars-delete-modal',
  templateUrl: './cars-delete-modal.component.html',
  styleUrls: ['./cars-delete-modal.component.scss'],
})
export class CarsDeleteModalComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<CarsDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public carId: number
  ) {}

  public delete(): void {
    this.dialogRef.close(this.carId);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
