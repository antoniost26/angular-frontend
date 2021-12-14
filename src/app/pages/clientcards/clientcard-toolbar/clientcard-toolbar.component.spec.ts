import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcardToolbarComponent } from './clientcard-toolbar.component';

describe('ClientcardToolbarComponent', () => {
  let component: ClientcardToolbarComponent;
  let fixture: ComponentFixture<ClientcardToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcardToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
