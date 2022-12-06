import React from 'react';
import {FiPlay} from 'react-icons/fi'
import {BsBookmark} from "react-icons/bs"
import {Link, NavLink} from "react-router-dom"
import img1 from "../../../assets/animeList/anime1.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import {useSelector} from "react-redux";



const SliderBtn = () => {

    const {status, error, data} = useSelector((store) => store.anime)

    return (
        <section className='sliderBtn'>
            <div className="container">
            <div className="sliderBtn__block">
                <button className='sliderBtn__click'>Моя геройская академия</button>
                <button className='sliderBtn__click'>Я злодейка, <br/> поэтому должна...</button>
                <button className='sliderBtn__click'>Боруто: Новое поколение</button>
                <button className='sliderBtn__click'>JUJUTSU KAISEN 0</button>
                <button className='sliderBtn__click'>DEMON SLAYER</button>
            </div>

                <div className="sliderBtn__post">
                        <div className="sliderBtn__post-img">
                            <img  src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/a3077261-6538-42f4-8ba2-e2fcb01ce57e.webp" alt="" className='sliderBtn__post-poster'/>
                            <span className='sliderBtn__hover'>К сериалу</span>
                        </div>



                    <div className="sliderBtn__post-info">
                        <h2  className='sliderBtn-info-desc'>Я злодейка, поэтому должна заарканить последнего босса</h2>
                        <p className='sliderBtn__post-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>

                        <div className='sliderBtn__post-info-click'>
                         <NavLink to={'/watch/3'}> <button className='sliderBtn__post-info-btn'><p className='sliderBtn__icon'><FiPlay/></p> Смотреть S1 E1</button></NavLink>
                            <button className='sliderBtn__post-info-btn2'><p className='sliderBtn__icon2'><BsBookmark/></p> Добавить в смотреть позже</button>
                        </div>

                    </div>

                </div>
                <div className="img">
                    <img src="https://static.crunchyroll.com/fms/desktop_large/1050x350/d930be54-ae13-4638-b3a4-e4fe452fd770.png" alt=""/>
                </div>
                <div className="sliderBtn__post">
                    <div className="sliderBtn__post-img">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d46bbba875a6d0ffef9d3025fb55dd5f.jpeg" alt="" className='sliderBtn__post-poster'/>
                        <span className='sliderBtn__hover'>К сериалу</span>
                    </div>
                    <div className="sliderBtn__post-info">
                        <h2 className='sliderBtn-info-desc'>BLUELOCK</h2>
                        <p className='sliderBtn__post-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>
                        <p className='sliderBtn__desc'>Японская сборная всё никак не оклемается после сокрушительного поражения  на чемпионате мира в 2018 году. Чего же не хватило им для победы?...</p>

                        <div className='sliderBtn__post-info-click'>
                            <NavLink to={'/watch/11'}> <button className='sliderBtn__post-info-btn'><p className='sliderBtn__icon'><FiPlay/></p> Смотреть S1 E1</button></NavLink>
                            <button className='sliderBtn__post-info-btn2'><p className='sliderBtn__icon2'><BsBookmark/></p> Добавить в смотреть позже</button>
                        </div>

                    </div>
                </div>

                <div className="anime__list">

                    <h2 className="anime__list-title">
                        Всё чудесатее и чудесатее!
                    </h2>
                    <p className='anime__list-desc'>Приятная смесь триллера, фэнтези и мистики</p>
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
                    </Swiper>
                </div>



        </section>
    );
};

export default SliderBtn;