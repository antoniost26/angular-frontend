import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ExpandableTablePaginator extends MatPaginatorIntl {
  changes = new Subject<void>();
  // need these or angular complains. You implement them as you need.
  itemsPerPageLabel: string = '';
  nextPageLabel: string = '';
  previousPageLabel: string = '';
  firstPageLabel: string = '';
  lastPageLabel: string = '';
  getRangeLabel = () => '';

  setLabel(label) {
    this.itemsPerPageLabel = `${label} per page:`;
    console.log('Changing to this:', this);
    this.changes.next();
  }
}
