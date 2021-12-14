import { Component, OnInit } from '@angular/core';
import { ClientcardCreateEditModalComponent } from './clientcard-create-edit-modal/clientcard-create-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientcardsApiService } from 'src/app/shared/clientcard-api/clientcards-api.service';
import { ClientCard } from 'src/app/shared/models/clientcard.model';
import { ClientcardDeleteDialComponent } from './clientcard-delete-dial/clientcard-delete-dial.component';
@Component({
  selector: 'app-clientcards',
  templateUrl: './clientcards.component.html',
  styleUrls: ['./clientcards.component.css'],
})
export class ClientcardsComponent implements OnInit {
  public clientCards: ClientCard[] = [];

  public constructor(
    private readonly clientCardApiService: ClientcardsApiService,
    private readonly dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.clientCardApiService.getClientCards().subscribe((data) => {
      this.clientCards = data;
    });
  }

  public refresh(filter: string = ''): void {
    this.getClientCards();
  }

  public getClientCards(filter: string = ''): void {
    this.clientCardApiService.getClientCards(filter).subscribe((data) => {
      this.clientCards = data;
    });
  }

  public openCreationModal(clientCard?: ClientCard): void {
    this.dialog
      .open(ClientcardCreateEditModalComponent, {
        data: {
          clientCard,
          exclusions: this.clientCards.map((_clientCard: ClientCard) =>
            _clientCard.CNP.toString()
          ),
        },
      })
      .afterClosed()
      .subscribe((data: ClientCard) => {
        if (data) {
          // A apasat submit
          (!clientCard
            ? this.clientCardApiService.createClientCard(data)
            : this.clientCardApiService.editClientCard(data)
          ).subscribe(() => this.refresh());
        }
      });
  }

  public openDeleteModal(id: number): void {
    this.dialog
      .open(ClientcardDeleteDialComponent, {
        data: id,
      })
      .afterClosed()
      .subscribe((id: number) => {
        if (id) {
          // A apasat submit
          this.clientCardApiService.deleteClientCard(id).subscribe(
            () => {
              this.refresh();
            },
            () => console.log('ClientCard could not be deleted')
          );
        }
      });
  }
}
