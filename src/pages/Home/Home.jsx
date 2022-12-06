import React, {useEffect} from 'react';
import Slider from "./Slider/Slider";
import SliderBtn from "./SliderBtn/SliderBtn";
import News from "./News/News";
import AnimeList from "./AnimeList/AnimeList";
import Update from "./Update/Update";
import LastSlider from "./LastSlider/LastSlider";
import {getAnime} from "../../redux/reducers/anime";
import {useDispatch} from "react-redux";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnime())
    },[])

    return (
        <div>
            <Slider/>
            <SliderBtn/>
            <News/>
            <AnimeList/>
            <Update/>
            <LastSlider/>
        </div>
    );
};

export default Home;