import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {Transaction, TransactionSumRange} from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  public authUrl$!: Observable<string>;

  public constructor(private readonly httpClient: HttpClient) {}

  public getTransactions(searchFilter: string = ''): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(
      [
        `${environment.API_ROOT}transactions/`,
        searchFilter ? searchFilter : '',
      ].join('')
    );
  }

  public filterTransactions(data: TransactionSumRange) {
    return this.httpClient.post<Transaction[]>(
      `${environment.API_ROOT}transactions/viewSumRange/`, data
    )
  }

  public createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(
      `${environment.API_ROOT}transactions/`,
      transaction
    );
  }

  public editTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.put<Transaction>(
      `${environment.API_ROOT}transactions/${transaction.id}/`,
      transaction
    );
  }

  public deleteTransaction(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.API_ROOT}transactions/${id}/`
    );
  }
}
