import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavorites,removeFavorites} from "../../redux/reducers/favorites";
import {Link} from "react-router-dom";
import {TbBookmarkOff} from "react-icons/tb"

const Favorites = () => {
    const [fav, setFav] = useState([])
    localStorage.getItem('favorites')
    const dispatch = useDispatch()

    const {data} = useSelector((store) => store.favorites)

    useEffect(() => {
        setFav(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])
    },[])

    return (
        <section className='catalog'>
            <div className="catalog__row">
                {
                    fav.length > 0 && fav.map((item)=> (
                        <div className='favorites__card'>
                            <Link to={`/watch/${item.id}`}>
                                <img className='anime__list-img' src={item.series} alt=""/>
                                <div className="anime__list-info">
                                    <h3 className='anime__card-info-title'>{item.title}</h3>
                                    <p className='sliderBtn__post-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>
                                </div>
                            </Link>
                                <button className='sliderBtn__post-info-btn2 favorites__btn' onClick={()=> dispatch(removeFavorites(item.id))}><p className='sliderBtn__icon2'><TbBookmarkOff/></p>Удалить аниме</button>
                            </div>

                    ))
                }
            </div>
        </section>

    );
};

export default Favorites;