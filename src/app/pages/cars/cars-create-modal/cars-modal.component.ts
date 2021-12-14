import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-cars-modal',
  templateUrl: './cars-modal.component.html',
  styleUrls: ['./cars-modal.component.scss'],
})
export class CarsModalComponent implements OnInit {
  public carCreationForm: FormGroup = new FormGroup({
    make: new FormControl('', [Validators.required]),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1900),
      Validators.max(2021),
    ]),
    km: new FormControl('', [Validators.required]),
  });
  get make() {
    return this.carCreationForm.get('make');
  }
  get year() {
    return this.carCreationForm.get('year');
  }
  get km() {
    return this.carCreationForm.get('km');
  }
  public constructor(
    private readonly dialogRef: MatDialogRef<CarsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  public ngOnInit(): void {
    if (this.data) {
      this.carCreationForm.controls['make'].setValue(this.data.model);
      this.carCreationForm.controls['year'].setValue(this.data.an_achizitie);
      this.carCreationForm.controls['km'].setValue(this.data.nr_km);
    }
  }

  public submit(): void {
    this.dialogRef.close({
      ...(this.data ? this.data : {}),
      model: this.carCreationForm.controls['make'].value,
      an_achizitie: this.carCreationForm.controls['year'].value,
      nr_km: this.carCreationForm.controls['km'].value,
    } as Car);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
