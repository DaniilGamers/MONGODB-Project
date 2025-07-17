import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Redux/store";
import {genreActions} from "../Redux/slices/genreSlice";
import css from "../Components/genres_styles/genres.module.css"
import cssList from "../Components/MovieList/MovieList.module.css"
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../Redux/slices/movieSlice";
import PaginationComponent from "../Components/MovieList/PaginationComponent";

const MovieThroughGenresPage = () => {

    let {id} = useParams();

    const navigate = useNavigate();

    const [query] = useSearchParams()

    const dispatch = useAppDispatch()

    const {genres} = useAppSelector(state => state.genre)

    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, [dispatch]);

    const {movies} = useAppSelector(state => state.movie)

    useEffect(() => {

            dispatch(movieActions.getMovies(query.get('page') || '1'))


    }, [dispatch]);



    return ( <div>
            <div style={{display: "flex", justifyContent: "center", width: 1510, height: 155}}>
                {
                   genres.map(genre => <div id={id} key={genre.id}><Link style={{textDecorationLine: "none"}} className={css.genresButton} onClick={() => {navigate(genre.id.toString())}} to={`genres/${genre.id}`}>{genre.name}</Link><div></div></div>)
                }
            </div>
            <PaginationComponent/>
            {
                movies.map(movie => <div className={cssList.listBox} id={id}>
                    <div  className={cssList.movieList}>
                        <Link style={{cursor: "pointer"}} className={cssList.movieList} onClick={() => {
                            navigate(movie.id.toString())
                        }} to={`movies/${movie.id}`}><br/><img alt={''} className={cssList.Posters}
                                     src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img><h3
                            className={cssList.DescriptionBox}>{movie.title}<br/>Release
                            date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/>{movie.popularity}<br/>
                        </h3><br/></Link>
                    </div>
                </div>)
            }
            <PaginationComponent/>
        </div>

    );
};

export default MovieThroughGenresPage;