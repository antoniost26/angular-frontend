import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cars-toolbar',
  templateUrl: './cars-toolbar.component.html',
  styleUrls: ['./cars-toolbar.component.scss'],
})
export class CarsToolbarComponent implements OnInit {
  @Output() onCreate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onGenerate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSort: EventEmitter<string> = new EventEmitter<string>();

  public sorted: boolean = false;
  public constructor() {}

  public ngOnInit(): void {}

  public sort(filter: string): void {
    this.onSort.emit(filter);
    this.sorted = !this.sorted;
  }

}
