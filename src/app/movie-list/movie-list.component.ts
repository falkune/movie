import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie-servive';
import { Movie } from '../models/movie-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList!: Movie[]; // array of movie 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList()
    .subscribe(data => {
      this.movieList = data.results;
      this.movieService.movieList = data.results;
      this.movieService.totalPages = data.totalPages;
    })
  }

}
