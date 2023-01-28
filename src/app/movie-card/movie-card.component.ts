import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie-model';
import { MovieService } from '../services/movie-servive';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  @Input()
  theMovie!: Movie;

  ngOnInit(): void {
  }

  overViewMovie(){
    this.router.navigateByUrl(`moviedetails/${this.theMovie.id}`)
  }
}
