import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAnime = createAsyncThunk(
    'anime/getAnime',
    async (_,{rejectWithValue })=>{
        try {
            const res = await axios('http://localhost:8080/anime')
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
        filter: {},
        status: '',
        error:''
    },
    reducers: {

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

export const {} = animeSlice.actions
export default animeSlice.reducer