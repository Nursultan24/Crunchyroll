import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";



const LastSlider = () => {

    const {status, error, data} = useSelector((store) => store.anime)

    return (
        <section className='slideSmall'>
            <div className="container">
                <h2 className='slideSmall__title'>Суперзаряженное аниме</h2>
                <p className='slideSmall__desc'>Подключись к самому заряженному аниме</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="  swiperSmall"
                >
                    {
                        data.map((item)=> (
                            <SwiperSlide>
                                <div className="slideSmall-card">
                                    <Link to={`/watch/${item.id}`}>
                                    <img className='slideSmall__card-img' src={item.series} alt=""/>
                                    <div className="slideSmall__card-info">
                                        <h3 className='slideSmall__card-info-title'>{item.title}</h3>
                                        <p className='slideSmall__card-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>
                                    </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }




                </Swiper>
            </div>
        </section>
    );
};

export default LastSlider;