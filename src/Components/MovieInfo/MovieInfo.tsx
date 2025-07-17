import React, { useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/store";
import {movieActions} from "../../Redux/slices/movieSlice";
import css from "./movieInfo.module.css"
import PosterPreview from "./PosterPreview";
import {genreActions} from "../../Redux/slices/genreSlice";

const MovieInfo = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();

    const {genres} = useAppSelector(state => state.genre);
    const {infoMovie} = useAppSelector(state => state.movie);
    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id));
        }
        dispatch(genreActions.loadGenres())
    }, [dispatch, id]);

    return (
        <div>
            {
                infoMovie && <div className={css.box}><div className={css.InfoWholeBox}><img className={css.backgroundImage} alt={''} src={'https://image.tmdb.org/t/p/w500' + infoMovie.backdrop_path}></img><div className={css.backgroundDarkBox}></div><div className={css.TitleBox}><PosterPreview/><div className={css.box2}></div><div style={{color: "white", fontSize: 28, margin: 30}}>{infoMovie.title} --- ({infoMovie.original_title})<br/>Runtime: {infoMovie.runtime}h<br/>Language: {infoMovie.origin_country}<br/>Rating:<br/>{infoMovie.popularity}</div></div><div style={{color: "white", fontSize: 25, textAlign: "center"}} className={css.descriptionBox}><div className={css.box3}>Description<br/>{infoMovie.overview}<br/><br/>Genres<br/></div></div></div></div>
            }
            {

            }
        </div>
    );
};

export default MovieInfo;