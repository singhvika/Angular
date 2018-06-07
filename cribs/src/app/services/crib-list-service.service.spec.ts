import { TestBed, inject } from '@angular/core/testing';

import { CribListServiceService } from './crib-list-service.service';

describe('CribListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CribListServiceService]
    });
  });

  it('should be created', inject([CribListServiceService], (service: CribListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
