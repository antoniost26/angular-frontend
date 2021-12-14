import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDeleteModalComponent } from './cars-delete-modal.component';

describe('CarsDeleteModalComponent', () => {
  let component: CarsDeleteModalComponent;
  let fixture: ComponentFixture<CarsDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
