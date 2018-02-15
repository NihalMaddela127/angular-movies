import { Component, OnInit } from '@angular/core';
import { AddMovieService } from '../../movie-services/addmovie/add-movie.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  constructor(private addService : AddMovieService, private router : Router) { }
  
  addMovie(newMovie : NgForm){
    this.addService.addMovie(newMovie).subscribe((data)=>{
      console.log("Movie added");
      this.router.navigate(['/movielist']);
    })
  }

  ngOnInit() {
  }

}
