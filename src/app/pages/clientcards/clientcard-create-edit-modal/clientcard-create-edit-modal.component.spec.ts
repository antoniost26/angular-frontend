import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcardCreateEditModalComponent } from './clientcard-create-edit-modal.component';

describe('ClientcardCreateEditModalComponent', () => {
  let component: ClientcardCreateEditModalComponent;
  let fixture: ComponentFixture<ClientcardCreateEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcardCreateEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcardCreateEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
