import { TestBed } from '@angular/core/testing';

import { ClientcardsApiService } from './clientcards-api.service';

describe('ClientcardsApiService', () => {
  let service: ClientcardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientcardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
