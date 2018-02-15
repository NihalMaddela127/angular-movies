import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { moviesI } from '../../../models/moviesI';
import { environment } from '../../../../environments/environment'

@Injectable()
export class EditMovieService {
  url : string = environment.url

  constructor(private httpClient : HttpClient) { }

  editMovieService(id, newMovie){
    return this.httpClient.put<moviesI>(this.url+'/'+id, newMovie);
  }

}
