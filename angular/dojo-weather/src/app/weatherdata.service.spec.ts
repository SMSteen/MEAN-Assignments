import { TestBed, inject } from '@angular/core/testing';

import { WeatherdataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherdataService]
    });
  });

  it('should be created', inject([WeatherdataService], (service: WeatherdataService) => {
    expect(service).toBeTruthy();
  }));
});
