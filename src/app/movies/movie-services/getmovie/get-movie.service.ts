import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { moviesI } from '../../../models/moviesI';
import { environment } from '../../../../environments/environment'

@Injectable()
export class GetMovieService {

  url : string = environment.url;

  constructor(private httpClient : HttpClient) {
    this.getMovies();
   }

    getMovies(){
      return this.httpClient.get<moviesI[]>(this.url);
    }


}
