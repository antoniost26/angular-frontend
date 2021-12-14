import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcardTableComponent } from './clientcard-table.component';

describe('ClientcardTableComponent', () => {
  let component: ClientcardTableComponent;
  let fixture: ComponentFixture<ClientcardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
