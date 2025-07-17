import React, {useEffect} from 'react';
import css from "./movieInfo.module.css";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {movieActions} from "../../Redux/slices/movieSlice";

const PosterPreview = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();

    const {infoMovie} = useAppSelector(state => state.movie);
    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            {infoMovie && <div><img className={css.poster} alt={''}
                       src={'https://image.tmdb.org/t/p/w500' + infoMovie.poster_path}></img></div>}
        </div>
    );
};

export default PosterPreview;