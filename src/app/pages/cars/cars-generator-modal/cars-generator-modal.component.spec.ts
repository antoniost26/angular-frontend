import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGeneratorModalComponent } from './cars-generator-modal.component';

describe('CarsGeneratorModalComponent', () => {
  let component: CarsGeneratorModalComponent;
  let fixture: ComponentFixture<CarsGeneratorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsGeneratorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGeneratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
