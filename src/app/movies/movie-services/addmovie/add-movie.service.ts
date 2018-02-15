import { Injectable } from '@angular/core';
import { moviesI } from '../../../models/moviesI';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AddMovieService {
  url : string = environment.url
  constructor(private httpClient : HttpClient) { }

  addMovie(movie){
    return this.httpClient.post<moviesI>(this.url, movie);
  }

}
