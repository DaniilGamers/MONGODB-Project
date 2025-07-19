import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {movieActions} from "../../Redux/slices/movieSlice";
import css from "./MovieList.module.css";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import PaginationComponent from "../Pagination/PaginationComponent";

const MoviesList = () => {

    const {genreId} = useParams();

    const {keyword} = useParams();

    const navigate = useNavigate();

    const {movies} = useAppSelector((state) => state.movie)

    const dispatch = useAppDispatch()


    const [query] = useSearchParams()

    const page = query.get('page')

    const currentPage = String(page);

    useEffect(() => {

        if (!genreId && !keyword){
            dispatch(movieActions.getMovies(currentPage))
        }

        if (genreId){

            dispatch(movieActions.getMoviesByGenre({genreId, page: currentPage }))

        }

        if (keyword){

            dispatch(movieActions.getMoviesByKeyword(keyword))


        }


    }, [dispatch, query, currentPage, genreId, keyword]);

    let basePath = ''

    if (!genreId && !keyword){

        basePath = '/movies'

    }

    if (genreId){

        basePath = `/genres/${genreId}/`

    }

    if (keyword){

        basePath = `/search/${keyword}/`


    }


    return (
        <div>
            <PaginationComponent currentPage={Number(currentPage)} basePath={basePath}/>
            {

                movies.map((movie) => (<div id={css.listBoxMain} key={movie.id}><div  className={css.listBox}><div className={css.movieList}><div style={{cursor: "pointer"}} className={css.movieList} onClick={() => {navigate(movie.id.toString())}}><br/><img alt={''} className={css.Posters} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img><h3 className={css.DescriptionBox}>{movie.title}<br/>Release date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/>{movie.popularity}<br/></h3><br/></div></div></div></div>))
            }

            <PaginationComponent currentPage={Number(currentPage)} basePath={basePath}/>
        </div>
    );
};

export default MoviesList;