import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component'
import { AddMoviesComponent } from './movies/addnewmovies/add-movies/add-movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { EditmovieComponent } from './movies/editmovie/editmovie.component';
import { GetMovieService } from './movies/movie-services/getmovie/get-movie.service';
import { AddMovieService } from './movies/movie-services/addmovie/add-movie.service';
import { EditMovieService } from './movies/movie-services/editmovie/edit-movie.service';
import { GetsingleMovieService } from './movies/movie-services/getsinglemovie/getsingle-movie.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddMoviesComponent,
    MovieDetailsComponent,
    EditmovieComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path : 'movielist', component : MoviesListComponent},
      {path : 'addmovie', component : AddMoviesComponent},
      {path : 'details/:id', component : MovieDetailsComponent},
      {path : 'editmovie/:id', component : EditmovieComponent},
      {path : '', redirectTo : 'movielist', pathMatch:'full'},
      {path : '**', redirectTo : 'movielist', pathMatch:'full'},
    ], { enableTracing: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GetMovieService,
    AddMovieService,
    GetsingleMovieService,
    EditMovieService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
