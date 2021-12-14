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
import { Car } from 'src/app/shared/models/car.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
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
export class TableComponent implements OnChanges {
  @Input() cars: Car[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ['id', 'model', 'anul', 'actions'];
  public carsSource!: MatTableDataSource<
    Car | { detailRow: boolean; element: Car }
  >;

  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');
  expandedElement: any;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.cars) {
      const carsSource: (Car | { detailRow: boolean; element: Car })[] = [];
      this.cars.forEach((car: Car) => {
        carsSource.push(car, { detailRow: true, element: car });
      });
      this.carsSource = new MatTableDataSource(carsSource);
      this.carsSource.paginator = this.paginator;
      this.carsSource.paginator._intl.getRangeLabel = (
        page: number,
        pageSize: number,
        length: number
      ) => `${page * pageSize / 2} - ${(Math.min((page + 1) * pageSize/ 2, length / 2))} of ${length / 2}`;
    }
  }
}
