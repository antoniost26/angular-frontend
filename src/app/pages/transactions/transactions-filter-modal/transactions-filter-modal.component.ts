import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TransactionSumRange} from "../../../shared/models/transaction.model";

@Component({
  selector: 'app-transactions-filter-modal',
  templateUrl: './transactions-filter-modal.component.html',
  styleUrls: ['./transactions-filter-modal.component.scss']
})
export class TransactionsFilterModalComponent implements OnInit {
  public transactionFilterForm: FormGroup = new FormGroup({
    start: new FormControl(0),
    end: new FormControl(0),
  });
  constructor(private readonly dialogRef: MatDialogRef<TransactionsFilterModalComponent>) { }

  ngOnInit(): void {
  }

  public submit() {
    this.dialogRef.close({
      start: this.transactionFilterForm.controls['start'].value,
      end: this.transactionFilterForm.controls['end'].value
    } as TransactionSumRange);
  }

  public close() {
    this.dialogRef.close();
  }
}
