import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car, CarGenerator } from '../../models/car.model';

@Component({
  selector: 'app-entity-generator-modal',
  template: '',
})
export class EntityGeneratorModalComponent<T> implements OnInit {
  public form: FormGroup = new FormGroup({
    number: new FormControl(5),
  });

  public constructor(
    private readonly dialogRef: MatDialogRef<EntityGeneratorModalComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    private base: { baseValues: T; stringCollection: string[] }
  ) {}

  public ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public generate(): void {
    const entitiesArray: T[] = [];

    for (let i: number = 0; i < this.form.controls['number'].value; i++) {
      const entity: T = { ...this.base.baseValues };

      Object.keys(entity).forEach((parameter) => {
        if (Number(entity[parameter])) {
          entity[parameter] = Math.floor(
            entity[parameter] +
              Math.random() *
                (entity[parameter] / 100 + entity[parameter] / 100) -
              entity[parameter] / 100
          );
        } else {
          entity[parameter] =
            this.base.stringCollection[
              Math.floor(Math.random() * this.base.stringCollection.length)
            ];
        }
      });

      entitiesArray.push(entity);
    }

    this.dialogRef.close(entitiesArray);
  }
  public generate2(): void {
    const entitiesArray: CarGenerator = {
      numberOfGenerations: this.form.controls['number'].value,
    };
    this.dialogRef.close(entitiesArray)
  }
}
