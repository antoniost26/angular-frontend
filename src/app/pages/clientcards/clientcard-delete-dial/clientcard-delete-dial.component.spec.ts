import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcardDeleteDialComponent } from './clientcard-delete-dial.component';

describe('ClientcardDeleteDialComponent', () => {
  let component: ClientcardDeleteDialComponent;
  let fixture: ComponentFixture<ClientcardDeleteDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcardDeleteDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcardDeleteDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
