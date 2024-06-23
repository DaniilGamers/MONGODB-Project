import React, {useEffect} from 'react';
import {GenresModel} from "../../models/GenresModel";
import {GenreService} from "../../service/api.services";

interface IProps {
    genres: GenresModel[]

}

useEffect(() => {
    GenreService.getGenres().then(value => {
        if (value){
            console.log(value)
        }
    })
}, []);

const GenresList = () => {
    return (
        <div>
            
        </div>
    );
};

export default GenresList;