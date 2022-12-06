import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
    return (    
        <section className='slide-mine'>
            <Swiper  loop={true}
                     slidesPerView={1}
                     spaceBetween={30}
                     slidesPerGroup={1}
                     navigation={true}
                     autoplay={true}
                     modules={[Navigation]}
                     className="slider__block">

                <SwiperSlide>
                        <div className="slider__back">
                            <img src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/5995b6be-a5ce-4afd-a7fc-e509f9568534.webp" alt="" className='slider__block-img'/>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__back2">
                        <img src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/7f0efa12-75f2-416b-b986-15e0e9726bbb.webp" alt="" className='slider__block-img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__back3">
                        <img src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/ed9daa20-2a13-4dd4-ba20-c15e804d4c35.webp" alt="" className='slider__block-img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__back4">
                        <img src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/860784f6-99e7-4eb3-873f-714d4b767973.webp" alt="" className='slider__block-img'/>
                    </div>
                    </SwiperSlide>

                 <SwiperSlide>
                     <div className="slider__back5">
                         <img src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/a3077261-6538-42f4-8ba2-e2fcb01ce57e.webp" alt="" className='slider__block-img'/>
                     </div>
                     </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;