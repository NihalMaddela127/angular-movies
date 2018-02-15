import { Component, OnInit } from '@angular/core';
import { GetsingleMovieService } from '../movie-services/getsinglemovie/getsingle-movie.service';
import { ActivatedRoute } from '@angular/router';
import { moviesI } from '../../models/moviesI';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : moviesI
  constructor(private getmovie : GetsingleMovieService, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.getmovie.getsinglemovie(this.route.snapshot.params['id']).subscribe((movie)=>{
      this.movie = movie;
    });
  }

}
