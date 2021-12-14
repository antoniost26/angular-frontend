import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Car, CarGenerator } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarsApiService {
  public authUrl$!: Observable<string>;

  public constructor(private readonly httpClient: HttpClient) {}

  public getCars(searchFilter: string = ''): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      [`${environment.API_ROOT}cars/`, searchFilter ? searchFilter : ''].join(
        ''
      )
    );
  }

  public createCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${environment.API_ROOT}cars/`, car);
  }

  public bulkCreate(carGen: CarGenerator): Observable<CarGenerator> {
    return this.httpClient.post<CarGenerator>(`${environment.API_ROOT}cars/`, carGen);
  }

  public editCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(
      `${environment.API_ROOT}cars/${car.id}/`,
      car
    );
  }

  public deleteCar(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.API_ROOT}cars/${id}/`);
  }
}
