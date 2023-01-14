import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie-model';
import { MovieService } from '../services/movie-servive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theLatest!: Movie;

  constructor(private movieservice: MovieService) { }

  async setLatest() {
    this.theLatest = await this.movieservice.getLatest();
  }

  ngOnInit(): void {
    this.setLatest();
    console.log(this.theLatest)
  }
}
