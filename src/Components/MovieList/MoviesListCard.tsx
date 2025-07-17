import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Redux/store";
import {movieActions} from "../../Redux/slices/movieSlice";
import css from "./MovieList.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "./PaginationComponent";

const MoviesListCard = () => {

    const navigate = useNavigate();

    const {movies} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()

    const [query] = useSearchParams()

    useEffect(() => {

        dispatch(movieActions.getMovies(query.get('page') || '1'))
    }, [dispatch, query]);

    return (
        <div>
            <PaginationComponent/>
            {


                movies.map(movie => <div id={css.listBoxMain} key={movie.id}><div  className={css.listBox}><div className={css.movieList}><div style={{cursor: "pointer"}} className={css.movieList} onClick={() => {navigate(movie.id.toString())}}><br/><img alt={''} className={css.Posters} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img><h3 className={css.DescriptionBox}>{movie.title}<br/>Release date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/>{movie.popularity}<br/></h3><br/></div></div></div></div>)
            }

            <PaginationComponent/>
        </div>
    );
};

export default MoviesListCard;