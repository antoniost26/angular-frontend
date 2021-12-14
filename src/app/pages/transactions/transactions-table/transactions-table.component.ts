import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TransactionsTableComponent implements OnChanges {
  @Input() transactions: Transaction[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ['id', 'id_masina', 'id_card_client', 'actions'];
  public transactionsSource!: MatTableDataSource<
    Transaction | { detailRow: boolean; element: Transaction }
  >;

  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');
  expandedElement: any;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.transactions) {
      const transactionsSource: (
        | Transaction
        | { detailRow: boolean; element: Transaction }
      )[] = [];
      this.transactions.forEach((transaction: Transaction) => {
        transactionsSource.push(transaction, {
          detailRow: true,
          element: transaction,
        });
      });
      this.transactionsSource = new MatTableDataSource(transactionsSource);
      this.transactionsSource.paginator = this.paginator;
      this.transactionsSource.paginator._intl.getRangeLabel = (
        page: number,
        pageSize: number,
        length: number
      ) =>
        `${(page * pageSize) / 2} - ${Math.min(
          ((page + 1) * pageSize) / 2,
          length / 2
        )} of ${length / 2}`;
    }
  }
}
