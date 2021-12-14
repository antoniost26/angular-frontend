import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './pages/cars/cars-table/table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './pages/dashboard/header/header.component';
import { SidenavComponent } from './pages/dashboard/sidenav/sidenav.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsToolbarComponent } from './pages/cars/cars-toolbar/cars-toolbar.component';
import {
  AutoSizeInputModule,
  AutoSizeInputOptions,
  AUTO_SIZE_INPUT_OPTIONS,
} from 'ngx-autosize-input';

import { CarsModalComponent } from './pages/cars/cars-create-modal/cars-modal.component';
import { CarsDeleteModalComponent } from './pages/cars/cars-delete-dial/cars-delete-modal.component';
import { TransactionsAddEditModalComponent } from './pages/transactions/transactions-add-edit-modal/transactions-add-edit-modal.component';
import { TransactionsTableComponent } from './pages/transactions/transactions-table/transactions-table.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsToolbarComponent } from './pages/transactions/transactions-toolbar/transactions-toolbar.component';
import { TransactionsDeleteDialComponent } from './pages/transactions/transactions-delete-dial/transactions-delete-dial.component';
import { ClientcardsComponent } from './pages/clientcards/clientcards.component';
import { ClientcardCreateEditModalComponent } from './pages/clientcards/clientcard-create-edit-modal/clientcard-create-edit-modal.component';
import { ClientcardDeleteDialComponent } from './pages/clientcards/clientcard-delete-dial/clientcard-delete-dial.component';
import { ClientcardTableComponent } from './pages/clientcards/clientcard-table/clientcard-table.component';
import { ClientcardToolbarComponent } from './pages/clientcards/clientcard-toolbar/clientcard-toolbar.component';
import { SharedModule } from './shared/shared.module';
import { CarsGeneratorModalComponent } from './pages/cars/cars-generator-modal/cars-generator-modal.component';
import { CarsAndClientcardsComponent } from './pages/cars-and-clientcards/cars-and-clientcards.component';
import { SearchbarComponent } from './pages/cars-and-clientcards/searchbar/searchbar.component';
import { TransactionsFilterModalComponent } from './pages/transactions/transactions-filter-modal/transactions-filter-modal.component';
import { TransactionsDeleterangeModalComponent } from './pages/transactions/transactions-deleterange-modal/transactions-deleterange-modal.component';
const CUSTOM_AUTO_SIZE_INPUT_OPTIONS: AutoSizeInputOptions = {
  extraWidth: 0,
  includeBorders: false,
  includePadding: true,
  includePlaceholder: true,
  maxWidth: -1,
  minWidth: 100,
  setParentWidth: false,
  usePlaceHolderWhenEmpty: false,
};

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    SidenavComponent,
    CarsComponent,
    CarsToolbarComponent,
    CarsModalComponent,
    CarsDeleteModalComponent,
    TransactionsAddEditModalComponent,
    TransactionsTableComponent,
    TransactionsComponent,
    TransactionsToolbarComponent,
    TransactionsDeleteDialComponent,
    ClientcardsComponent,
    ClientcardCreateEditModalComponent,
    ClientcardDeleteDialComponent,
    ClientcardTableComponent,
    ClientcardToolbarComponent,
    CarsGeneratorModalComponent,
    CarsAndClientcardsComponent,
    SearchbarComponent,
    TransactionsFilterModalComponent,
    TransactionsDeleterangeModalComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AutoSizeInputModule
  ],
  providers: [
    {
      provide: AUTO_SIZE_INPUT_OPTIONS,
      useValue: CUSTOM_AUTO_SIZE_INPUT_OPTIONS,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
