import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAndClientcardsComponent } from './cars-and-clientcards.component';

describe('CarsAndClientcardsComponent', () => {
  let component: CarsAndClientcardsComponent;
  let fixture: ComponentFixture<CarsAndClientcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsAndClientcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAndClientcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
