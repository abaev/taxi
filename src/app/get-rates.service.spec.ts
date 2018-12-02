import { TestBed } from '@angular/core/testing';

import { GetRatesService } from './get-rates.service';

describe('GetRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRatesService = TestBed.get(GetRatesService);
    expect(service).toBeTruthy();
  });
});
