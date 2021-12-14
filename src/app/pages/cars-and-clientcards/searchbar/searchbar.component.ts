import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchKey: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  liveSearch($event: string) {
    this.onSearch.emit($event)
  }

  emptySearch() {
    this.searchKey = ''
    this.onSearch.emit()
  }
}
