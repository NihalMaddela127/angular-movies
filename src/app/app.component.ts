import { Component } from '@angular/core';
import { moviesI } from './models/moviesI';
import { GetMovieService } from './movies/movie-services/getmovie/get-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies : moviesI[];

  constructor(private getService : GetMovieService) { }

  ngOnInit() {
    this.getService.getMovies().subscribe((movies)=>{
      this.movies = movies;
      console.log(movies);
    });
  }
}
