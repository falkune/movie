import { Injectable } from "@angular/core";
import { Movie } from "../models/movie-model";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    moviesInformation!: object;
    movieList!: Movie[];
    curentPage: number = 1;
    totalPages!: number;
    theLatest!: Movie;

    constructor(private http: HttpClient) { }

    getData(url: string): Observable<any> {
        /**
         * this function take a url as parameter and fetch data and return the result
         * the results is a observable 
         */
        return this.http.get(url);
    }

    getMovieList(): Observable<any> {
        /**
         * this function return the movies information like :
         * total results correspond to total movie in database
         * total pages corresponde to the number of pages on which the results are distributed
         * curent page the curent page
         * it use the getData function to fetch data from the API
         */
        const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=${this.curentPage}`;
        return this.moviesInformation = this.getData(url);
    }

    getMovie(movieId: number): Observable<any> {
        /**
         * this function return movie who's id is the same value with the parametter movieId
         * for this he loop in the movieList array and compare all movie's id by movieId param
         * and return the movie who respect the condition
         */
        const url: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.API_KEY}&language=en-US`
        return this.getData(url);
    }

    getTopRated(): Observable<any>{
        /**
         * this function return top rated movie from database
         * it use getData function to fetch data
         */
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.API_KEY}&language=en-US&page=${this.curentPage}`;
        return this.getData(url);
    }

    getLatest(): Observable<any> {
        /**
         * this function return the latest movie
         *  it use the getData function to fetch data from the API
         */
        const url: string = `https://api.themoviedb.org/3/movie/latest?api_key=${environment.API_KEY}&language=en-US`;
        return this.getData(url);
    }

    getNowPlaying(): Observable<any>{
        /**
         * this function get the movies now playing in the theater
         * for this it use getData function to fetch data from API
         */
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.API_KEY}&language=en-US&page=${this.curentPage}`;
        return this.getData(url);
    }

    getUpComing(): Observable<any> {
        /**
         * this function get a list of upcoming movies in theatres
         * for this it use getData function to fetch data from API
         */
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${environment.API_KEY}&language=en-US&page=${this.curentPage}`;
        return this.getData(url);
    }
}