import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
    loading: boolean

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
    loading: false
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
            console.log(response.data)
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
    async (keyword: string, thunkAPI)=> {
        try {
            const response = await movieService.getByKeyword(keyword)
            console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong...')
        }
    }
)

const getMoviesByKeywordId = createAsyncThunk(
    'movieSlice/loadMoviesByKeywordId',
    async ({ keywordId, page }: { keywordId: string, page: string }, thunkAPI)=> {
        try {
            const response = await movieService.getByKeywordId(keywordId, page)
            console.log(response.data.results)
            return thunkAPI.fulfillWithValue(response.data.results)
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
                state.movies = action.payload.results;

                state.total_Pages = action.payload.total_pages;
            })
            .addCase(getMovies.rejected, () => {

            })
            .addCase(getMovieById.fulfilled, (state, action) =>{
                state.movie = action.payload
            })
            .addCase(getMovieById.rejected, () => {

            })
            .addCase(getMovieInfoById.fulfilled, (state, action) => {
                state.infoMovie = action.payload
            })
            .addCase(getMovieInfoById.rejected, () => {

            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results

            })
            .addCase(getMoviesByGenre.rejected, () => {

            })
            .addCase(getMoviesByKeyword.fulfilled, (state, action) => {
                state.movies = action.payload.results

            })
            .addCase(getMoviesByKeyword.rejected, () => {

            })
            .addCase(getMoviesByKeywordId.fulfilled, (state,action) => {
                state.movies = action.payload
            })
            .addCase(getMoviesByKeywordId.rejected, () => {

            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getMovies,
    getMovieById,
    getMovieInfoById,
    getMoviesByGenre,
    getMoviesByKeyword,
    getMoviesByKeywordId
}

export {
    movieActions,
    movieReducer
}