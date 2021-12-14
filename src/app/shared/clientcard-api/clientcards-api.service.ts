import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ClientCard } from '../models/clientcard.model';

@Injectable({
  providedIn: 'root',
})
export class ClientcardsApiService {
  public authUrl$!: Observable<string>;

  public constructor(private readonly httpClient: HttpClient) {}

  public getClientCards(searchFilter: string = ''): Observable<ClientCard[]> {
    return this.httpClient.get<ClientCard[]>(
      [
        `${environment.API_ROOT}clientcards/`,
        searchFilter ? searchFilter : '',
      ].join('')
    );
  }

  public createClientCard(clientcard: ClientCard): Observable<ClientCard> {
    return this.httpClient.post<ClientCard>(
      `${environment.API_ROOT}clientcards/`,
      clientcard
    );
  }

  public editClientCard(clientcard: ClientCard): Observable<ClientCard> {
    return this.httpClient.put<ClientCard>(
      `${environment.API_ROOT}clientcards/${clientcard.id}/`,
      clientcard
    );
  }

  public deleteClientCard(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.API_ROOT}clientcards/${id}/`
    );
  }
}
