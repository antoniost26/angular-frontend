import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions-delete-dial',
  templateUrl: './transactions-delete-dial.component.html',
  styleUrls: ['./transactions-delete-dial.component.css'],
})
export class TransactionsDeleteDialComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<TransactionsDeleteDialComponent>,
    @Inject(MAT_DIALOG_DATA) public transactionId: number
  ) {}

  public delete(): void {
    this.dialogRef.close(this.transactionId);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
