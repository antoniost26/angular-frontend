import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAddEditModalComponent } from './transactions-add-edit-modal.component';

describe('TransactionsAddEditModalComponent', () => {
  let component: TransactionsAddEditModalComponent;
  let fixture: ComponentFixture<TransactionsAddEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsAddEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsAddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
