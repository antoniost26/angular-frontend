import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient],
})
export class AppComponent implements OnInit {
  sideBarOpen = false;

  ngOnInit() {}
  constructor() {}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
