import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "../slices/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {genreReducer} from "../slices/genreSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    store
}