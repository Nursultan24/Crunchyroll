import React from 'react';
import {FiPlay} from 'react-icons/fi'
import {BsBookmark} from "react-icons/bs"
import img1 from "../../../assets/animeList/anime1.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



const Update = () => {

    const {status, error, data} = useSelector((store) => store.anime)

    return (
        <section className='sliderBtn sliderH'>
            <div className="container">
                <div className="anime__list">

                    <h2 className="anime__list-title anime__list-desc">
                        Недавно обновлено на Crunchyroll
                    </h2>
                </div>
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
                            <div className="slideSmall-card">
                                <Link to={`/watch/${item.id}`}>
                                    <img className='slideSmall__card-img' src={item.series} alt=""/>
                                    <div className="slideSmall__card-info">
                                        <h3 className='slideSmall__card-info-title'>{item.title}</h3>
                                        <p className='slideSmall__card-info sub'><span className='sliderBtn__ser lastSub'>Сериал</span> - Суб. | Озв.</p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))

                    }
                </Swiper>
                <div  className="img imgLast">
                    <img src="https://static.crunchyroll.com/fms/desktop_large/1050x350/a3188de1-6585-40c7-abae-2091b80b48d2.png" alt=""/>
                </div>

            </div>



        </section>
    );
};

export default Update;