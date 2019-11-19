import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/Movie';
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "../../_service/api.service";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit {

  movieForm;
  id = null;

  @Output() createdMovie = new EventEmitter<Movie>();
  @Output() updatedMovie = new EventEmitter<Movie>()

  // @Input() movie: Movie;
  @Input() set movie(val: Movie){
    this.id = val.id;
    this.movieForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    });
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  formDisabled() {
    if (this.movieForm.value.title.length && this.movieForm.value.description.length){
      return false;
    }else {
      return true;
    }
  }

  saveForm() {
    if(this.id){
      this.apiService.updateMovie(this.id,
        this.movieForm.value.title, this.movieForm.value.description).subscribe(
          (result: Movie) => this.updatedMovie.emit(result),
          error => console.log(error)
        );
    }else{
      this.apiService.createMovie(
        this.movieForm.value.title, this.movieForm.value.description).subscribe(
          (result: Movie) => this.createdMovie.emit(result),
          error => console.log(error)
        );
    } 
  }
}
