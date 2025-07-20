import React, { useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {movieActions} from "../../Redux/slices/movieSlice";
import css from "./movieInfo.module.css"
import PosterPreview from "./PosterPreview";
import StarsRating from "../StarsRating/StarsRating";

const MovieInfo = () => {

    let {id} = useParams();

    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const {infoMovie} = useAppSelector(state => state.movie);

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            {
                infoMovie && <div className={css.box} key={infoMovie.id}>
                    <div className={css.InfoWholeBox}>
                        <img className={css.backgroundImage} alt={''} src={'https://image.tmdb.org/t/p/w500' + infoMovie.backdrop_path}>

                        </img>
                        <div className={css.backgroundDarkBox}>

                        </div>
                        <div className={css.TitleBox}><PosterPreview/>
                            <div className={css.box2}>

                            </div>
                            <div style={{color: "white", fontSize: 28}} className={css.boxTitleAndInfo}>{infoMovie.title} --- ({infoMovie.original_title})
                                <br/>Runtime: {infoMovie.runtime}h
                                <br/>Language: {infoMovie.origin_country}
                                <br/>Rating:<br/><StarsRating rating={infoMovie.vote_average}/>
                            </div>
                        </div>
                        <div style={{color: "white", fontSize: 25, textAlign: "center"}} className={css.descriptionBox}>
                            <div className={css.box3}>Description
                                <br/>{infoMovie.overview}<br/>
                                <br/>Genres<br/>
                                <div  id={css.genreBoxMain}>{infoMovie.genres.map(genre =>
                                    <div key={genre.id}>
                                        <div>
                                            <Link className={css.genreButton} onClick={() => {navigate(genre.id.toString())}} to={`/genres/${genre.id}/?page=1`}>{genre.name}</Link>
                                        </div>
                                    </div>)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MovieInfo;