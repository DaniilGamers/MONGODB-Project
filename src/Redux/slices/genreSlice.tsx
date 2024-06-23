import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenresModel} from "../../models/GenresModel";

import {GenreService} from "../../service/api.services";
import {GenresListModel} from "../../models/GetGenresModel";

interface GenreSliceType{
    genres: GenresModel[];
    genre: GenresModel | null
}

let genreInitState: GenreSliceType = {
    genres: [],
    genre: null
}

const loadGenres = createAsyncThunk<GenresListModel<GenresModel>, void>(
    'genreSlice/loadGenres',
    async (_, {rejectWithValue}) => {
        try {
            const response = await GenreService.getGenres();
            console.log(response.data)
            return response.data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)
const loadGenresById = createAsyncThunk(
    'genreSlice/loadGenresById',
    async (id: string, {rejectWithValue}) => {
        try {
            const response = await GenreService.getById(id);
            console.log(response.data)
            return response.data
        }catch (e){
            return rejectWithValue(e)
        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: genreInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(loadGenres.rejected, (state, action) => {

            })
            .addCase(loadGenresById.fulfilled, (state, action) => {
                state.genre = action.payload
})
            .addCase(loadGenresById.rejected, (state, action) => {})
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    loadGenres,
    loadGenresById
}

export {
    genreActions,
    genreReducer
}