import React from 'react';
import GenresList from "../Components/Genres/GenresList";
import {Outlet} from "react-router-dom";

const GenresPage = () => {

    return (<div>

        <GenresList/>

            <Outlet/>


        </div>

    )
};

export default GenresPage;