import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenresModel} from "../../models/GenresModel";

import {GenreService} from "../../service/api.services";
import {GenresListModel} from "../../models/GetGenresModel";

interface GenreSliceType{
    genres: GenresModel[];
}

let genreInitState: GenreSliceType = {
    genres: [],
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


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: genreInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(loadGenres.rejected, () => {

            })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    loadGenres
}

export {
    genreActions,
    genreReducer
}