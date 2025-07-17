import {GenresModel} from "./GenresModel";

export interface MovieInfoModel{
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    adult: boolean,
    backdrop_path: string,
    origin_country: string[],
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    spoken_languages: string[],
    homepage: string,
    title: string,
    status: string,
    video: boolean,
    genres: GenresModel[]
}