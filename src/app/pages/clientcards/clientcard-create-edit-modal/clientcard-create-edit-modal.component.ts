import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientCard } from 'src/app/shared/models/clientcard.model';
import { exclusionListValidator } from 'src/app/shared/validators/exclusion-list.validator';

@Component({
  selector: 'app-clientcard-create-edit-modal',
  templateUrl: './clientcard-create-edit-modal.component.html',
  styleUrls: ['./clientcard-create-edit-modal.component.css'],
  providers: [],
})
export class ClientcardCreateEditModalComponent implements OnInit {
  public clientCardCreationForm: FormGroup = new FormGroup({
    nume: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    prenume: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    CNP: new FormControl('', [
      Validators.required,
      Validators.min(1000000000000),
      Validators.max(9999999999999),
      exclusionListValidator(this.data?.exclusions?.filter((_exclusion: string) => _exclusion !== this.data?.clientCard?.CNP.toString()) || [])
    ]),
    data_nasterii: new FormControl('', [Validators.required]),
  });

  get nume() {
    return this.clientCardCreationForm.get('nume');
  }
  get prenume() {
    return this.clientCardCreationForm.get('nume');
  }
  get CNP() {
    return this.clientCardCreationForm.get('CNP');
  }
  get data_nasterii() {
    return this.clientCardCreationForm.get('data_nasterii');
  }
  public minDate: Date;
  public maxDate: Date;
  public constructor(
    private readonly dialogRef: MatDialogRef<ClientcardCreateEditModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { clientCard: ClientCard; exclusions: string[] },
  ) {
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date();
  }

  public ngOnInit(): void {
    if (this.data?.clientCard) {
      this.clientCardCreationForm.controls['nume'].setValue(
        this.data.clientCard.nume
      );
      this.clientCardCreationForm.controls['prenume'].setValue(
        this.data.clientCard.prenume
      );
      this.clientCardCreationForm.controls['CNP'].setValue(
        this.data.clientCard.CNP
      );
      this.clientCardCreationForm.controls['data_nasterii'].setValue(
        this.data.clientCard.data_nasterii
      );
    }
  }

  public submit(): void {
    const birthDate = new DatePipe('en-US').transform(
      new Date(this.clientCardCreationForm.controls['data_nasterii'].value),
      'yyyy-MM-dd'
    );

    this.dialogRef.close(<ClientCard>{
      ...(this.data.clientCard ? this.data.clientCard : {}),
      nume: this.clientCardCreationForm.controls['nume'].value,
      prenume: this.clientCardCreationForm.controls['prenume'].value,
      CNP: this.clientCardCreationForm.controls['CNP'].value,
      data_nasterii: birthDate as string,
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
