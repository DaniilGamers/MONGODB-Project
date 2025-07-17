import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieInfoService, movieService} from "../../service/api.services";
import {movieModel} from "../../models/movieModel";
import {MovieInfoModel} from "../../models/MovieInfoModel";

interface MovieSliceType {
    movies: movieModel[];
    movie: movieModel | null;
    movieInfo: MovieInfoModel[];
    infoMovie: MovieInfoModel | null;
    page: number
    total_Results: number;
    total_Pages: number

}

let movieInitState: MovieSliceType = {
    movies: [],
    movie: null,
    movieInfo: [],
    infoMovie: null,
    page: 0,
    total_Results: 0,
    total_Pages: 0
}

const getMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page: string, {rejectWithValue})=>{
        try {
            const response = await movieService.getMovies(page);
            console.log(response.data)
            return response.data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)
const getMovieById = createAsyncThunk(
    'movieSlice/loadMovieById',
    async (id: string, {rejectWithValue})=>{
        try {
            const response = await movieService.getById(id)
            return response.data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const getMovieInfoById = createAsyncThunk(
    'movieSlice/loadMovieInfoById',
    async (id: string, {rejectWithValue})=>{
        try {
            const response = await movieInfoService.getInfoById(id);
            console.log(response.data)
            return response.data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;

                state.total_Pages = action.payload.total_pages;
            })
            .addCase(getMovieById.fulfilled, (state, action) =>{
                state.movie = action.payload
            })
            .addCase(getMovieInfoById.fulfilled, (state, action) => {
                state.infoMovie = action.payload
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getMovies,
    getMovieById,
    getMovieInfoById,
}

export {
    movieActions,
    movieReducer
}