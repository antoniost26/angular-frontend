import { Component, OnInit } from '@angular/core';
import { EntityGeneratorModalComponent } from 'src/app/shared/components/entity-generator-modal/entity-generator-modal.component';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-cars-generator-modal',
  templateUrl: './cars-generator-modal.component.html',
  styleUrls: ['./cars-generator-modal.component.css'],
})
export class CarsGeneratorModalComponent extends EntityGeneratorModalComponent<Car> implements OnInit {
  
}
