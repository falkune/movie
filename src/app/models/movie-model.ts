// movie model here we describe all attributes of one movie
export class Movie {
    adult!: boolean;
    backdrop_path!: string;
    genre_ids!:number[];
    id!: number;
    original_language!: string;
    original_title!: string;
    overview!: string;
    popularity!: number;
    poster_path!: string;
    release_date!: Date;
    title!: string;
    video!: boolean;
    vote_average!: number;
    vote_count!: number;
}