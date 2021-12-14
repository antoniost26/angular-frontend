import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDeleteDialComponent } from './transactions-delete-dial.component';

describe('TransactionsDeleteDialComponent', () => {
  let component: TransactionsDeleteDialComponent;
  let fixture: ComponentFixture<TransactionsDeleteDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDeleteDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDeleteDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
