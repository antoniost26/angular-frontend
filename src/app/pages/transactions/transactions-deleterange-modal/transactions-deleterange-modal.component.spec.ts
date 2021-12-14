import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDeleterangeModalComponent } from './transactions-deleterange-modal.component';

describe('TransactionsDeleterangeModalComponent', () => {
  let component: TransactionsDeleterangeModalComponent;
  let fixture: ComponentFixture<TransactionsDeleterangeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDeleterangeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDeleterangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
