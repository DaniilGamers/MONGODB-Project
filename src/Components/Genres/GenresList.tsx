import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {genreActions} from "../../Redux/slices/genreSlice";
import css from "../genres_styles/genres.module.css";

const GenresList = () => {


    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const {genres} = useAppSelector(state => state.genre)

    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, [dispatch]);

    return ( <div>
            <div style={{display: "flex", justifyContent: "center", width: "100vw", height: 655}}>
                {
                    genres.map(genre => <div key={genre.id}><Link style={{textDecorationLine: "none"}} className={css.genresButton} onClick={() => {navigate(genre.id.toString())}} to={``}>{genre.name}</Link><div></div></div>)
                }
            </div>
        </div>
    );
};

export default GenresList;