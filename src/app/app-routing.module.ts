import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { ClientcardsComponent } from './pages/clientcards/clientcards.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import {CarsAndClientcardsComponent} from "./pages/cars-and-clientcards/cars-and-clientcards.component";

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'clientcards', component: ClientcardsComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: CarsAndClientcardsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
