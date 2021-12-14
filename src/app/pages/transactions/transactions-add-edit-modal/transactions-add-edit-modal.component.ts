import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/shared/models/car.model';
import { ClientCard } from 'src/app/shared/models/clientcard.model';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-transactions-add-edit-modal',
  templateUrl: './transactions-add-edit-modal.component.html',
  styleUrls: ['./transactions-add-edit-modal.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: 'dd.MM.yyyy' }],
})
export class TransactionsAddEditModalComponent implements OnInit {
  public transactionCreationForm: FormGroup = new FormGroup({
    car_id: new FormControl('', [Validators.required]),
    client_card_id: new FormControl(null),
    components_total: new FormControl('', [Validators.required]),
    service_total: new FormControl('', [Validators.required]),
  });
  get carId() {
    return this.transactionCreationForm.get('car_id');
  }
  get components_total() {
    return this.transactionCreationForm.get('components_total');
  }

  get service_total() {
    return this.transactionCreationForm.get('service_total');
  }

  public constructor(
    private readonly dialogRef: MatDialogRef<TransactionsAddEditModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      transaction: Transaction;
      cars: Car[];
      clientCards: ClientCard[];
    }
  ) {}

  public ngOnInit(): void {
    if (this.data.transaction) {
      this.transactionCreationForm.controls['car_id'].setValue(
        this.data.transaction.id_masina
      );
      this.transactionCreationForm.controls['client_card_id'].setValue(
        this.data.transaction.id_client_card
      );
      this.transactionCreationForm.controls['components_total'].setValue(
        this.data.transaction.suma_piese
      );
      this.transactionCreationForm.controls['service_total'].setValue(
        this.data.transaction.suma_manopera
      );
    }
  }

  public submit(): void {
    this.dialogRef.close({
      ...(this.data.transaction ? this.data.transaction : {}),
      id_masina: this.transactionCreationForm.controls['car_id'].value,
      id_client_card:
        this.transactionCreationForm.controls['client_card_id'].value,
      suma_piese:
        this.transactionCreationForm.controls['components_total'].value,
      suma_manopera:
        this.transactionCreationForm.controls['service_total'].value,
    } as Transaction);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
