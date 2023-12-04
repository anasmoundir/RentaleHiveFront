import { TestBed } from '@angular/core/testing';

import { EquipmentListServiceService } from './equipment-list.service.service';

describe('EquipmentListServiceService', () => {
  let service: EquipmentListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
