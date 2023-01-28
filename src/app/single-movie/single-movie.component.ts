import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie-model';
import { faHeart, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../services/movie-servive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent {

  constructor(private router: Router, private movieservice: MovieService){}

  faHeart = faHeart;
  faPlus = faPlus;
  faEye = faEye;
  @Input()
  theMovie!: Movie;

  addToFavorite(){
    // do the job hear
  }

  overViewMovie(){
    this.router.navigateByUrl(`moviedetails/${this.theMovie.id}`)
  }
}
