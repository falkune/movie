import { Injectable } from "@angular/core";
import { Movie } from "../models/movie-model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    movieList!: Movie[] // array of movies
    curentPage: number = 1; // curent page
    totalPages!: number; // total page 
    theLatest!: Movie; // latest movie

    getData(url: string): Promise<any> {
        /**
         * this function take a url as parameter and fetch data and return the result
         */
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response: any) => {
                    if (response.status !== 200) {
                        return
                    }
                    response.json()
                        .then((data: Movie[]) => resolve(data))
                })
                .catch((error: any) => { reject(error) })
        })
    }

    getData1(url: string):any {
        /**
         * this function take a url as parameter and fetch data and return the result
         */
        fetch(url)
            .then((response: any) => {
                if (response.status !== 200) {
                    return
                }
                response.json()
                    .then((data: Movie[]) => {return data})
            })
            .catch((error: any) => { return error })

    }

    async setMovieList(): Promise<void> {
        /**
         * this function fetch movies from the movie database and initialise movielist and total_page
         * it use the getData function for feching data from api
         */
        const movielist = await this.getData(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=${this.curentPage}`);
        this.movieList = movielist.results;
        this.totalPages = movielist.total_pages;
    }


    async getMovieList(): Promise<Movie[]> {
        /**
         * this function return the moviList initalise by setMovieList function
         */
        await this.setMovieList();
        return this.movieList;
    }

    getMovie(movieId: number): Movie {
        /**
         * this function return movie who's id is the same value with the parametter movieId
         */
        const themovie = this.movieList.find(movie => movie.id === movieId);
        if (!themovie) {
            throw new Error('Movie not found!')
        } else {
            return themovie;
        }
    }

    async setLatest(): Promise<void> {
        /**
         * this function get the most newly created movie.
         * it use getData function to fetch data from api
         */
        const latest = await this.getData(`https://api.themoviedb.org/3/movie/latest?api_key=${environment.API_KEY}&language=en-US`);
        this.theLatest = latest;
        // console.log(latest, this.theLatest)
        // return latest;
    }

    async getLatest(): Promise<Movie> {
        /**
         * this function return the latest movie
         */
        await this.setLatest();
        return this.theLatest;
    }
}