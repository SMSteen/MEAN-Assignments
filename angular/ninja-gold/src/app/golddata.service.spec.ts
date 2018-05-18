import { TestBed, inject } from '@angular/core/testing';

import { GolddataService } from './golddata.service';

describe('GolddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolddataService]
    });
  });

  it('should be created', inject([GolddataService], (service: GolddataService) => {
    expect(service).toBeTruthy();
  }));
});
