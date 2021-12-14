import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarsApiService } from 'src/app/shared/car-api/cars-api.service';
import { ClientcardsApiService } from 'src/app/shared/clientcard-api/clientcards-api.service';
import { Car } from 'src/app/shared/models/car.model';
import { ClientCard } from 'src/app/shared/models/clientcard.model';
import {Transaction, TransactionSumRange} from 'src/app/shared/models/transaction.model';
import { TransactionsApiService } from 'src/app/shared/transaction-api/transactions-api.service';
import { TransactionsAddEditModalComponent } from './transactions-add-edit-modal/transactions-add-edit-modal.component';
import { TransactionsDeleteDialComponent } from './transactions-delete-dial/transactions-delete-dial.component';
import {TransactionsFilterModalComponent} from "./transactions-filter-modal/transactions-filter-modal.component";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  public transactions: Transaction[] = [];
  public cars: Car[] = [];
  public clientCards: ClientCard[] = [];
  public filtered: boolean = false;

  public constructor(
    private readonly transactionApiService: TransactionsApiService,
    private readonly dialog: MatDialog,
    private readonly carApiService: CarsApiService,
    private readonly clientcardApiService: ClientcardsApiService,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.transactionApiService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
    this.carApiService.getCars().subscribe((data) => {
      this.cars = data;
    });
    this.clientcardApiService.getClientCards().subscribe((data) => {
      this.clientCards = data;
    });
  }

  public refresh(): void {
    this.filtered = !this.filtered
    this.getTransactions();
  }

  public getTransactions(filter: string = ''): void {
    this.transactionApiService.getTransactions(filter).subscribe((data) => {
      this.transactions = data;
    });
  }

  public openCreationModal(transaction?: Transaction): void {
    this.dialog
      .open(TransactionsAddEditModalComponent, {
        data: { cars: this.cars, clientCards: this.clientCards, transaction },
      })
      .afterClosed()
      .subscribe((data: Transaction) => {
        if (data) {
          // A apasat submit
          this.transactionApiService
            .createTransaction(data)
            .subscribe((data_returned) =>
              this.openSnackBar(
                data_returned.reducere_manopera,
                data_returned.reducere_piese,
                data_returned.suma_manopera_plata,
                data_returned.suma_piese_plata
              )
            );
        }
      });
  }
  public openSnackBar(
    reducere_manopera: number,
    reducere_piese: number,
    suma_manopera_plata: number,
    suma_piese_plata: number
  ): void {
    this.refresh();
    this._snackBar.open(
      `S-a efectuat tranzactia cu suma manoperei de plata de ${suma_manopera_plata} lei,
       suma pieselor de plata de ${suma_piese_plata} lei,
       avand reducerile aferente pentru manopera: ${reducere_manopera} lei
       si piese: ${reducere_piese} lei.`,
      'Close'
    );
  }

  public openDeleteModal(id: number): void {
    this.dialog
      .open(TransactionsDeleteDialComponent, {
        data: id,
      })
      .afterClosed()
      .subscribe((id: number) => {
        if (id) {
          // A apasat submit
          this.transactionApiService.deleteTransaction(id).subscribe(
            () => {
              this.refresh();
            },
            () => console.log('Transaction could not be deleted')
          );
        }
      });
  }

  public openUpdateModal(transaction?: Transaction): void {
    this.dialog
      .open(TransactionsAddEditModalComponent, {
        data: { cars: this.cars, clientCards: this.clientCards, transaction },
      })
      .afterClosed()
      .subscribe((data: Transaction) => {
        if (data) {
          this.transactionApiService
            .editTransaction(data)
            .subscribe((data_returned) =>
              this.openSnackBar(
                data_returned.reducere_manopera,
                data_returned.reducere_piese,
                data_returned.suma_manopera_plata,
                data_returned.suma_piese_plata
              )
            );
        }
      });
  }

  openFilterModal() {
    this.dialog.open(TransactionsFilterModalComponent).afterClosed().subscribe((data: TransactionSumRange) => {
      if(data) {
        this.transactionApiService.filterTransactions(data).subscribe((data_returned) => {
          this.transactions = data_returned; this.filtered = true;
        })
      }
    })
  }
}
