import { TestBed, inject } from '@angular/core/testing';

import { EditMovieService } from './edit-movie.service';

describe('EditMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditMovieService]
    });
  });

  it('should be created', inject([EditMovieService], (service: EditMovieService) => {
    expect(service).toBeTruthy();
  }));
});
