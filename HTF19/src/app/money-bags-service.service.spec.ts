import { TestBed } from '@angular/core/testing';

import { MoneyBagsServiceService } from './money-bags-service.service';

describe('MoneyBagsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyBagsServiceService = TestBed.get(MoneyBagsServiceService);
    expect(service).toBeTruthy();
  });
});
