import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clientcard-toolbar',
  templateUrl: './clientcard-toolbar.component.html',
  styleUrls: ['./clientcard-toolbar.component.scss'],
})
export class ClientcardToolbarComponent implements OnInit {
  @Output() onCreate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSort: EventEmitter<string> = new EventEmitter<string>();

  public sorted: boolean = false;
  public constructor() {}

  public ngOnInit(): void {}

  public sort(filter: string): void {
    this.onSort.emit(filter);
    this.sorted = !this.sorted;
  }
}
