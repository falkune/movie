import { Component, Input, OnInit} from '@angular/core';
import { Movie } from '../models/movie-model';
import { MovieService } from '../services/movie-servive';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faFilm, faArrowRight, faArrowLeft, faHeart, faStar, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  theMovie!: Movie

  filmIcon = faFilm;
  faArrowRight = faArrowRight;
  faHeart = faHeart;
  faStar = faStar;
  faEye = faEye;
  faPlus = faPlus;
  faArrowLeft = faArrowLeft;

  constructor(private movieservice: MovieService, private route: ActivatedRoute, private location: Location){}
  
  ngOnInit(): void {
    const movieId = +this.route.snapshot.params['id'];
    this.movieservice.getMovie(movieId)
    .subscribe(data => {
      this.theMovie = data;
    })
  }

  back(){
    this.location.back();
  }
}
