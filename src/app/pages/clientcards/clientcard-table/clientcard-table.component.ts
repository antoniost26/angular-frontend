import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ClientCard } from 'src/app/shared/models/clientcard.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-clientcard-table',
  templateUrl: './clientcard-table.component.html',
  styleUrls: ['./clientcard-table.component.scss'],
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
export class ClientcardTableComponent {
  @Input() clientCards: ClientCard[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ['id', 'nume', 'prenume', 'actions'];
  public clientCardSource!: MatTableDataSource<
    ClientCard | { detailRow: boolean; element: ClientCard }
  >;

  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');
  expandedElement: any;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.clientCards) {
      const clientCardSource: (
        | ClientCard
        | { detailRow: boolean; element: ClientCard }
      )[] = [];
      this.clientCards.forEach((clientCard: ClientCard) => {
        clientCardSource.push(clientCard, {
          detailRow: true,
          element: clientCard,
        });
      });
      this.clientCardSource = new MatTableDataSource(clientCardSource);
      this.clientCardSource.paginator = this.paginator;
      this.clientCardSource.paginator._intl.getRangeLabel = (
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
