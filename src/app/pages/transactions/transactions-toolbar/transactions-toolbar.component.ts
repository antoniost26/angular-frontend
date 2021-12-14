import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Transaction} from "../../../shared/models/transaction.model";

@Component({
  selector: 'app-transactions-toolbar',
  templateUrl: './transactions-toolbar.component.html',
  styleUrls: ['./transactions-toolbar.component.scss'],
})
export class TransactionsToolbarComponent implements OnInit {
  @Input() filtered: boolean = false;
  @Output() onCreate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onFilter: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDeleteByDateRange: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUnFilter: EventEmitter<void> = new EventEmitter<void>();

  public constructor() {}

  public ngOnInit(): void {}
}
