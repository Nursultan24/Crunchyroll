import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import img1 from "../../../assets/animeList/anime1.jpeg";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"

const AnimeList = () => {

    const {status, error, data} = useSelector((store) => store.anime)

    return (
        <div>
            <div className="container">
                <div className="anime__list">

                    <h2 className="anime__list-title anime__list-desc">
                        Самое популярное
                    </h2>
                </div>
                {
                    status === 'loading' ?
                        <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt=""/>
                        : status === 'resolve' ?
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={40}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}

                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="animeList"
                        >
                            {   data.map((item) => (
                                <SwiperSlide>
                                    <div className="anime__list-card">
                                        <Link to={`/watch/${item.id}`}>
                                            <img className='anime__list-img' src={item.series} alt=""/>
                                            <div className="anime__list-info">
                                                <h3 className='anime__list-info-title'>{item.title}</h3>
                                                <p className='sliderBtn__post-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>
                                            </div>
                                        </Link>

                                    </div>
                                </SwiperSlide>
                            ))

                            }



                        </Swiper> : <h2>{error}</h2>
                }

            </div>
        </div>
    );
};

export default AnimeList;