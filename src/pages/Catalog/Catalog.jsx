import React, {useEffect} from 'react';
import AnimeCard from "../AnimeCard/AnimeCard";
import {useDispatch, useSelector} from "react-redux";
import {getAnime} from "../../redux/reducers/anime";
import AnimeSort from "./AnimeSort/AnimeSort";
import AnimeYear from "./AnimeYear/AnimeYear";


const Catalog = () => {
    
    const dispatch = useDispatch();

    const {status, error, data, filter} = useSelector((store) => store.anime);


    useEffect(() => {
        dispatch(getAnime(filter))
    },[filter]);

    return (

        <section className='catalog'>


            <div className="anime__filter">
                <div className="anime__filter-sort">
                    <AnimeSort/>
                    <AnimeYear/>
                </div>

            </div>

                <div className="catalog__row">
                    {
                        status === 'loading' ?
                            ''
                            : status === 'resolve' ?
                            <>
                                {data.map((item) => (
                                    <AnimeCard item={item}/>
                                ))
                                }
                            </> : <h2>{error}</h2>
                    }

            </div>



        </section>
    );
};

export default Catalog;