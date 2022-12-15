import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
export const getAnime = createAsyncThunk(
    'anime/getAnime',
    async (filter,{rejectWithValue })=>{
        try {
            const res = await axios(`/anime?${filter?.genre.length ? 'genre=' + filter.genre + '&' : ''}${filter?.year !== '' ? 'year=' + filter?.year + '&' : ''}${filter?.search !== '' ? 'title_like=' + filter.search : ''}`);
            if (res.statusText !== 'OK'){
                throw new Error('Server error !')
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        data: [],
        dataLength: 0,
        filter: {
            search: '',
            genre: '',
            year: ''
        },
        favorites: [],
        status: '',
        error:''
    },
    reducers: {
        changeGenre: (state,action) => {
            state.filter.genre = action.payload
        },
        changeSearch: (state, action) => {
            state.filter.search = action.payload
        },
        changeYear: (state,action) => {
            state.filter.year = action.payload
        }
    },
    extraReducers: {
        [getAnime.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getAnime.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getAnime.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }



})

export const {changeSearch,changeGenre,changeYear} = animeSlice.actions
export default animeSlice.reducer