import {configureStore} from "@reduxjs/toolkit";
import user from "./reducers/user"
import anime from './reducers/anime'
import oneAnime from "./reducers/oneAnime"

export const store = configureStore({
    reducer: {
        user,
        anime,
        oneAnime,
    }
})