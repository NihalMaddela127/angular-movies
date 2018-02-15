import { TestBed, inject } from '@angular/core/testing';

import { AddMovieService } from './add-movie.service';

describe('AddMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddMovieService]
    });
  });

  it('should be created', inject([AddMovieService], (service: AddMovieService) => {
    expect(service).toBeTruthy();
  }));
});
