import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { moviesI } from '../../models/moviesI';
import { ActivatedRoute, Router } from '@angular/router';
import { EditMovieService } from '../movie-services/editmovie/edit-movie.service';
import { GetsingleMovieService } from '../movie-services/getsinglemovie/getsingle-movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  id : string;
  movie : moviesI;

  constructor(private editService : EditMovieService, 
    private getService : GetsingleMovieService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.getService.getsinglemovie(this.route.snapshot.params['id']).subscribe((movie)=>{
      this.movie = movie;
    });
  }

  editMovie(newData : NgForm){
    this.editService.editMovieService(this.movie.id, newData).subscribe(()=>{
    this.router.navigate(['/movies']);
    });
  
  }

}
