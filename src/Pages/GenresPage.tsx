import React from 'react';
import GenreBadge from "../Components/Genres/GenreBadge";
import {Outlet, useParams} from "react-router-dom";
import css from '../Components/Genres/genres.module.css'



const GenresPage = () => {

    const { genreId } = useParams();

    return (<div>

        <GenreBadge/>

            {!genreId && <div id={css.listMovieBox}> Select genre you want to look for</div>}

            <Outlet/>


        </div>

    )
};

export default GenresPage;