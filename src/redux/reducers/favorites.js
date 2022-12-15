import {createSlice} from "@reduxjs/toolkit";

const favorites = createSlice({
    name: 'favorites',
    initialState: {
        data: [],
        dataLength: 0
    },
    reducers: {
        addFavorites: (state,action) => {
            const itemFavorites = state.data.find((item) => item.id === action.payload.id)
            if (itemFavorites){
                itemFavorites.count++
            }else {
                state.data.push({...action.payload, count: 1})
            }
        },
        removeFavorites: (state,action) => {
            const removeFavorites = state.data.filter((item)=> item.id !== action.payload)
            state.data = removeFavorites;
        }

    }
})

export const {addFavorites,removeFavorites} = favorites.actions
export default favorites.reducer