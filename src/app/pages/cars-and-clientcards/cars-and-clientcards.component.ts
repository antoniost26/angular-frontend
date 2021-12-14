import {Component, Input, OnInit} from '@angular/core';
import {CarsApiService} from "../../shared/car-api/cars-api.service";
import {ClientcardsApiService} from "../../shared/clientcard-api/clientcards-api.service";

@Component({
  selector: 'app-cars-and-clientcards',
  templateUrl: './cars-and-clientcards.component.html',
  styleUrls: ['./cars-and-clientcards.component.scss']
})
export class CarsAndClientcardsComponent implements OnInit {

  public cars: any = [];
  public clientCards: any = [];
  constructor(
    private readonly carApiService: CarsApiService,
    private readonly clientCardApiService: ClientcardsApiService
  ) { }

  ngOnInit(): void {
    this.getCarsAndClientCards()
  }

  public getCarsAndClientCards(filter: string = ''): void {
    this.carApiService.getCars(filter? `?search=${filter}` : filter).subscribe((data) => {
      this.cars = data;
    });
    this.clientCardApiService.getClientCards(filter? `?search=${filter}` : filter).subscribe((data) => {
      this.clientCards = data;
    });
  }

  public refresh(filter: string = ''): void {
    this.getCarsAndClientCards(filter)
  }

  applySearch($event: string) {
    this.refresh($event);
  }
}
