import { TestBed, inject } from '@angular/core/testing';

import { GithubdataService } from './githubdata.service';

describe('GithubdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubdataService]
    });
  });

  it('should be created', inject([GithubdataService], (service: GithubdataService) => {
    expect(service).toBeTruthy();
  }));
});
