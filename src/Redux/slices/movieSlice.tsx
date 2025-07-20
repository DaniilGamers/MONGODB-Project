import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {movieInfoService, movieService} from "../../service/api.services";
import {movieModel} from "../../models/movieModel";
import {MovieInfoModel} from "../../models/MovieInfoModel";

interface MovieSliceType {
    movies: movieModel[];
    movie: movieModel | null;
    movieInfo: MovieInfoModel[];
    infoMovie: MovieInfoModel | null;
    genreId: number;
    page: number;
    total_Results: number;
    total_Pages: number;
    loading: boolean;
    error: null

}

let movieInitState: MovieSliceType = {
    movies: [],
    movie: null,
    movieInfo: [],
    infoMovie: null,
    genreId: 0,
    page: 0,
    total_Results: 0,
    total_Pages: 0,
    loading: false,
    error: null
}

const getMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page: string, thunkAPI)=>{
        try {
            const response = await movieService.getMovies(page);
            // console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e){
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)
const getMovieById = createAsyncThunk(
    'movieSlice/loadMovieById',
    async (id: string, thunkAPI)=>{
        try {
            const response = await movieService.getById(id)
            console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/loadMoviesByGenre',
    async ({ genreId, page }: { genreId: string, page: string }, thunkAPI)=> {
        try {
            const response = await movieService.getByGenre(genreId, page)
            // console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)

const getMovieInfoById = createAsyncThunk(
    'movieSlice/loadMovieInfoById',
    async (id: string, thunkAPI)=>{
        try {
            const response = await movieInfoService.getInfoById(id);
            // console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e){
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)

const getMoviesByKeyword = createAsyncThunk(
    'movieSlice/loadMoviesByKeyword',
    async ({ keyword, page }: { keyword: string, page: string }, thunkAPI)=> {
        try {
            const response = await movieService.getByKeyword(keyword, page)
            // console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
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
                state.loading = false;

                state.movies = action.payload.results;

                state.total_Pages = action.payload.total_pages;
            })
            .addCase(getMovies.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getMovieById.fulfilled, (state, action) =>{
                state.loading = false;

                state.movie = action.payload
            })
            .addCase(getMovieById.rejected, (state) => {
                state.loading = false;

            })
            .addCase(getMovieInfoById.fulfilled, (state, action) => {
                state.loading = false;

                state.infoMovie = action.payload
            })
            .addCase(getMovieInfoById.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.loading = false;

                state.movies = action.payload.results

                state.total_Pages = action.payload.total_pages;

            })
            .addCase(getMoviesByGenre.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getMoviesByKeyword.fulfilled, (state, action) => {
                state.loading = false;

                state.movies = action.payload.results

                state.total_Pages = action.payload.total_pages;

            })
            .addCase(getMoviesByKeyword.rejected, (state) => {
                state.loading = false;
            })
            .addMatcher(isFulfilled(getMovies, getMovieById, getMovieInfoById, getMoviesByGenre, getMoviesByKeyword), (state) => {
                state.loading = true;
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getMovies,
    getMovieById,
    getMovieInfoById,
    getMoviesByGenre,
    getMoviesByKeyword
}

export {
    movieActions,
    movieReducer
}