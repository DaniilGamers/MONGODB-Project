import axios from "axios";
import {baseURl, urls} from "../Constants/urls";
import {movieModel} from "../models/movieModel";
import {GenresListModel} from "../models/GetGenresModel";
import {MovieListPageModel} from "../models/MovieListPageModel";
import {IRes} from "../types/resType";
import {MovieInfoModel} from "../models/MovieInfoModel";
import {GenresModel} from "../models/GenresModel";

const axiosInstance = axios.create({
    baseURL: baseURl,
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjkzMjQ2ODE1ODBhZjcyMjM4NWJhOWJmNzIzY2NmNyIsInN1YiI6IjY2NmQ3OWFlMzMwZjg5NzFlZjMwYTJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ma2rYHvmut9EVdHvzfyYm8LuBwu6ctIeAKR5pQPsgfw')
    return request
})

const movieService = {
    getMovies:(page: string):IRes<MovieListPageModel<movieModel>> => axiosInstance.get(urls.movies.base(+page)),
    getById:(id: string):IRes<movieModel> => axiosInstance.get(urls.movies.byId(+id)),
    getByGenre:(genreId: string, page: string):IRes<MovieListPageModel<movieModel>> => axiosInstance.get(urls.movies.byGenreId(+genreId, +page)),
    getByKeyword: (keyword: string):IRes<MovieListPageModel<movieModel>> => axiosInstance.get(urls.movies.byKeyword(keyword)),
    getByKeywordId: (keywordId: string, page: string):IRes<MovieListPageModel<movieModel>> => axiosInstance.get(urls.movies.byKeywordId(+keywordId, +page))


}

const movieInfoService = {
        getInfoById:(id: string): IRes<MovieInfoModel> => axiosInstance.get(urls.movieInfo.byId(+id))
}

const GenreService = {
    getGenres:():IRes<GenresListModel<GenresModel>> => axiosInstance.get(urls.genres.base)
}


export {
    movieService,
    GenreService,
    movieInfoService
}