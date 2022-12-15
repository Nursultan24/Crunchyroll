import React, {useEffect} from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom"
import Footer from "./Footer/Footer";

import {getAnime} from "../redux/reducers/anime";
import {useDispatch, useSelector} from "react-redux";


const Layout = () => {


    const dispatch = useDispatch()

    const {filter} = useSelector((store) => store.anime )

    useEffect(() => {
        dispatch(getAnime(filter))
    },[]);

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout