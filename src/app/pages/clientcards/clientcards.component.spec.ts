import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcardsComponent } from './clientcards.component';

describe('ClientcardsComponent', () => {
  let component: ClientcardsComponent;
  let fixture: ComponentFixture<ClientcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
