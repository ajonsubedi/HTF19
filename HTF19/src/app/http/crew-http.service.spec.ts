import { TestBed } from '@angular/core/testing';

import { CrewHttpService } from './crew-http.service';

describe('CrewHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrewHttpService = TestBed.get(CrewHttpService);
    expect(service).toBeTruthy();
  });
});
