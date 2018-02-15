import { TestBed, inject } from '@angular/core/testing';

import { GetsingleMovieService } from './getsingle-movie.service';

describe('GetsingleMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetsingleMovieService]
    });
  });

  it('should be created', inject([GetsingleMovieService], (service: GetsingleMovieService) => {
    expect(service).toBeTruthy();
  }));
});
