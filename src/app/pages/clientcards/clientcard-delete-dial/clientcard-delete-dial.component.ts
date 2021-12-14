import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientcard-delete-dial',
  templateUrl: './clientcard-delete-dial.component.html',
  styleUrls: ['./clientcard-delete-dial.component.scss'],
})
export class ClientcardDeleteDialComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<ClientcardDeleteDialComponent>,
    @Inject(MAT_DIALOG_DATA) public clientCardId: number
  ) {}

  public delete(): void {
    this.dialogRef.close(this.clientCardId);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
