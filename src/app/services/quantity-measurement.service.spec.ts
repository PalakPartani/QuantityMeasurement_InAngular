import { TestBed } from '@angular/core/testing';

import { QuantityMeasurementService } from './quantity-measurement.service';

describe('QuantityMeasurementService', () => {
  let service: QuantityMeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityMeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
