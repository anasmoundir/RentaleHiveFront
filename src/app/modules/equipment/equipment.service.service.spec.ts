import { TestBed } from '@angular/core/testing';

import { EquipmentServiceService } from './equipment.service.service';

describe('EquipmentServiceService', () => {
  let service: EquipmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
