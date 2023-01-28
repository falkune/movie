import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie-model';
import { MovieService } from '../services/movie-servive';

@Component({
  selector: 'app-curents-movie',
  templateUrl: './curents-movie.component.html',
  styleUrls: ['./curents-movie.component.scss']
})
export class CurentsMovieComponent implements OnInit {

  nowPlaying!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getNowPlaying()
    .subscribe(data => {
      this.nowPlaying = data.results;
      this.movieService.movieList = data.results;
      this.movieService.totalPages = data.totalPages;
    })
  }

}
