import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneAnime =  createAsyncThunk(
    'oneAnime/getOneAnime',
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/anime/${id}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        }catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const oneAnime = createSlice({
    name: 'oneAnime',
    initialState: {
        product: {},
        error: '',
        status: ''
    },
    reducers: {},
    extraReducers: {
        [getOneAnime.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneAnime.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneAnime.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.product = action.payload
        }
    }

})

export default oneAnime.reducer