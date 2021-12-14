import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CarsApiService } from 'src/app/shared/car-api/cars-api.service';
import { CAR_BRANDS } from 'src/app/shared/constants/car.brands';
import { Car, CarGenerator } from 'src/app/shared/models/car.model';
import { CarsModalComponent } from './cars-create-modal/cars-modal.component';
import { CarsDeleteModalComponent } from './cars-delete-dial/cars-delete-modal.component';
import { CarsGeneratorModalComponent } from './cars-generator-modal/cars-generator-modal.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public cars: any = [];

  public constructor(
    private readonly carApiService: CarsApiService,
    private readonly dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.carApiService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  public refresh(filter: string = ''): void {
    this.getCars();
  }

  public getCars(filter: string = ''): void {
    this.carApiService.getCars(filter).subscribe((data) => {
      this.cars = data;
    });
  }

  public openCreationModal(): void {
    this.dialog
      .open(CarsModalComponent, {})
      .afterClosed()
      .subscribe((data: Car) => {
        if (data) {
          // A apasat submit
          this.carApiService.createCar(data).subscribe(() => this.refresh());
        }
      });
  }

  public openGenerationModal(): void {
    this.dialog
      .open(CarsGeneratorModalComponent, {
        data: {
          baseValues: { an_achizitie: 2000, model: '', nr_km: 200000 } as Car,
          stringCollection: CAR_BRANDS,
        },
      })
      .afterClosed()
      .subscribe((data: CarGenerator) => {
        if (data) {
          this.carApiService.bulkCreate(data).subscribe(() => this.refresh());
        }
      });
  }

  public openDeleteModal(id: number): void {
    this.dialog
      .open(CarsDeleteModalComponent, {
        data: id,
      })
      .afterClosed()
      .subscribe((id: number) => {
        if (id) {
          // A apasat submit
          this.carApiService.deleteCar(id).subscribe(
            () => {
              this.refresh();
            },
            () => console.log('Car could not be deleted')
          );
        }
      });
  }

  public openUpdateModal(car: Car): void {
    this.dialog
      .open(CarsModalComponent, {
        data: car,
      })
      .afterClosed()
      .subscribe((data: Car) => {
        if (data) {
          this.carApiService.editCar(data).subscribe(() => this.refresh());
        }
      });
  }
}
