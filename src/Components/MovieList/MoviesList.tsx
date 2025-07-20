import React, {useContext, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {movieActions} from "../../Redux/slices/movieSlice";
import css from './MovieList.module.css';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import PaginationComponent from "../Pagination/PaginationComponent";
import {ThemeContext} from "../../Redux/context/ThemeContext";
import StarsRating from "../StarsRating/StarsRating";
const MoviesList = () => {

    const {genreId} = useParams();

    const {keyword} = useParams();

    const navigate = useNavigate();

    const {movies} = useAppSelector((state) => state.movie)

    const total_pages = useAppSelector((state) => state.movie.total_Pages)

    const loading = useAppSelector((state) => state.movie.loading)

    const dispatch = useAppDispatch()

    const {isDark, toggleTheme } = useContext(ThemeContext)


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

           dispatch(movieActions.getMoviesByKeyword({   keyword, page: currentPage  }))


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

        <div data-theme={isDark ? 'dark' : 'light'} onChange={toggleTheme}>

            <div>

                 <div>


                    <PaginationComponent currentPage={Number(currentPage)} basePath={basePath} total_pages={total_pages}/>

                     {!loading && <div id={css.LoadingBox}>Loading...</div>}

                    {
                        movies.map((movie) => (<div id={css.listBoxMain} key={movie.id}><div  className={css.listBox}><div className={css.movieList}><div style={{cursor: "pointer"}} className={css.movieList} onClick={() => {navigate('/movie/' + movie.id.toString())}}><br/><img alt={''} className={css.Posters} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img><h3 className={css.DescriptionBox}>{movie.title}<br/>Release date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/><StarsRating rating={movie.vote_average}/><br/></h3><br/></div></div></div></div>))
                    }

                    <PaginationComponent currentPage={Number(currentPage)} basePath={basePath} total_pages={total_pages}/>

                </div>

            </div>


        </div>
    );
};

export default MoviesList;