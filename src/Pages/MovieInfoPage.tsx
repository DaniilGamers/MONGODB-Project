import React, {useEffect} from 'react';
import MovieInfo from "../Components/MovieInfo/MovieInfo";
import {useAppDispatch} from "../Redux/store";
import {movieActions} from "../Redux/slices/movieSlice";
import {useParams} from "react-router-dom";

const MovieInfoPage = () => {

    let {id} = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id){
        dispatch(movieActions.getMovieInfoById(id))

        }
    }, [id]);

    return (
        <div>
            <MovieInfo/>
        </div>
    );
};

export default MovieInfoPage;