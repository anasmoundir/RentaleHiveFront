import { TestBed } from '@angular/core/testing';

import { ContractListServiceService } from './contract-list.service.service';

describe('ContractListServiceService', () => {
  let service: ContractListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
