import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieInfoService, movieService} from "../../service/api.services";
import {movieModel} from "../../models/movieModel";
import {MovieListPageModel} from "../../models/MovieListPageModel";
import {MovieInfoModel} from "../../models/MovieInfoModel";

interface MovieSliceType {
    movies: movieModel[];
    movie: movieModel | null;
    movieInfo: MovieInfoModel[];
    infoMovie: MovieInfoModel | null;

}

let movieInitState: MovieSliceType = {
    movies: [],
    movie: null,
    movieInfo: [],
    infoMovie: null
}

const loadMovies = createAsyncThunk<MovieListPageModel<movieModel>, void>(
    'movieSlice/loadMovies',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovies();
            console.log(data.results)
            return data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)
const loadMovieById = createAsyncThunk(
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

const loadMovieInfoById = createAsyncThunk(
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
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(loadMovieById.fulfilled, (state, action) =>{
                state.movie = action.payload
            })
            .addCase(loadMovieInfoById.fulfilled, (state, action) => {
                state.infoMovie = action.payload
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    loadMovies,
    loadMovieById,
    loadMovieInfoById
}

export {
    movieActions,
    movieReducer
}