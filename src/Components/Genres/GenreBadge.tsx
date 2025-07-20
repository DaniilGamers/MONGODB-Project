import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {genreActions} from "../../Redux/slices/genreSlice";
import css from "./genres.module.css";
import {ThemeContext} from "../../Redux/context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge} from "reactstrap";

const GenreBadge = () => {

    const {isDark, toggleTheme } = useContext(ThemeContext)


    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const {genres} = useAppSelector(state => state.genre)

    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, [dispatch]);

    return ( <div data-theme={isDark ? 'dark' : 'light'} onChange={toggleTheme}>
            <div style={{display: "flex", justifyContent: "center", width: "100vw"}}>
                {
                    genres.map(genre => <div key={genre.id}><Link style={{textDecorationLine: "none"}} className={css.genresButton} onClick={() => {navigate(genre.id.toString())}} to={`/genres/${genre.id}/?page=1`}><div><Badge color="primary" className={css.genresButton}>{genre.name}</Badge></div></Link><div></div></div>)
                }
            </div>
        </div>
    );
};

export default GenreBadge;