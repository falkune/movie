import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Movie } from '../models/movie-model';
import { MovieService } from '../services/movie-servive';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  @Input() 
  theLatest!: Movie;
  topRated!: Movie[];
  upComming!:Movie[];
  url!:string;
  ratedLeftScroll!: boolean;
  ratedRightScroll!: boolean;
  rated!: any;
  upcom!: any;

  constructor(private movieservice: MovieService, private router: Router, @Inject(DOCUMENT) private document: Document ) { }

  ngOnInit(): void {
    this.movieservice.getLatest()
    .subscribe(data => {
      this.theLatest = data;
      this.url = data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` : "./assets/imgs/man.jpg";
    });
    this.movieservice.getTopRated()
    .subscribe(data => {
      this.topRated = data.results;
    });
    this.movieservice.getUpComing()
    .subscribe(data => {
      this.upComming = data.results;
    });
  }

  overViewMovie(){
    this.router.navigateByUrl(`moviedetails/${this.theLatest.id}`);
  }

  leftScroll(d: string) {
    if(d === 'rate'){
      if(this.rated.scrollLeft > 0){
        this.rated.scrollLeft-=90;
        console.log('left scroll ', this.rated.scrollLeft)
      }
    }else{
      if(this.upcom.scrollLeft > 0){
        this.upcom.scrollLeft-=90;
        console.log('left scroll ', this.upcom.scrollLeft)
      }
    }
    
  }

  rightScroll(d: string) {
    if(d === 'rate'){
      if(this.rated.scrollLeft == 0 || this.rated.scrollLeft < this.rated.clientWidth){
        this.rated.scrollLeft+=90;
        console.log("yes", this.rated.clientWidth)
      }
    }else{
      if(this.upcom.scrollLeft == 0 || this.upcom.scrollLeft < this.upcom.clientWidth){
        this.upcom.scrollLeft+=90;
        console.log("yes", this.upcom.clientWidth)
      }
    }
   
  }

  ngAfterViewInit(){
    this.rated = this.document.getElementById('rated');
    this.upcom = this.document.getElementById('upcom');
  }

}
