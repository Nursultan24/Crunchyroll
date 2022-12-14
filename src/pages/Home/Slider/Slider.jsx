import React,{useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const Slider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState();
    return (

        <section className='slide-mine'>

            <Swiper  style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
                     loop={true}
                     spaceBetween={10}
                     navigation={true}
                     thumbs={{ swiper: thumbsSwiper }}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper2">

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
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                centeredSlides={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperBtns"
            >
                <SwiperSlide>
                    <button className='sliderBtn__click'>Моя геройская академия</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='sliderBtn__click'>JUJUTSU KAISEN 0</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='sliderBtn__click'>Боруто: Новое поколение</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='sliderBtn__click'>DEMON SLAYER</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='sliderBtn__click'>Я злодейка, <br/> поэтому должна...</button>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;