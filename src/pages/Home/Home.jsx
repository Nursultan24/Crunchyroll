import React, {useEffect} from 'react';
import Slider from "./Slider/Slider";
import SliderBtn from "./SliderBtn/SliderBtn";
import News from "./News/News";
import AnimeList from "./AnimeList/AnimeList";
import Update from "./Update/Update";
import LastSlider from "./LastSlider/LastSlider";
import {getAnime} from "../../redux/reducers/anime";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

    const dispatch = useDispatch()

    const {status, error, data} = useSelector((store) => store.anime)

    useEffect(()=>{
        dispatch(getAnime())
    },[])


    return (
        <div>
            <Slider/>
            <SliderBtn data={data} error={error} status={status}/>
            <News/>
            <AnimeList/>
            <Update/>
            <LastSlider/>
        </div>
    );
};

export default Home;