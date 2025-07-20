import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenresModel} from "../../models/GenresModel";

import {GenreService} from "../../service/api.services";
import {GenresListModel} from "../../models/GetGenresModel";

interface GenreSliceType{
    genres: GenresModel[];
    loading: boolean;
}

let genreInitState: GenreSliceType = {
    genres: [],
    loading: false
}

const loadGenres = createAsyncThunk<GenresListModel<GenresModel>, void>(
    'genreSlice/loadGenres',
    async (_, thunkAPI) => {
        try {
            const response = await GenreService.getGenres();
            // console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e){
            return thunkAPI.rejectWithValue('Something went wrong...')
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