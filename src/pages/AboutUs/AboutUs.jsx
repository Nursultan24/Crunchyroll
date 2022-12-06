import React from 'react';
import img1 from '../../assets/AboutUs.webp'
import img2 from '../../assets/aboutUs/img2.webp'
import img3 from '../../assets/aboutUs/img3.webp'
import img4 from '../../assets/aboutUs/img4.webp'
import img5 from '../../assets/aboutUs/img5.webp'
import img6 from '../../assets/aboutUs/img6.webp'
import img7 from '../../assets/aboutUs/img7.webp'

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <img src={img1} alt=""/>
            <div className="container">
                <div className="aboutUs__start">
                    <div className="aboutUs__title">
                        Crunchyroll поддерживает искусство аниме ради преданных <br/> фанатов по всему миру. <br/>
                        <button className='aboutUs__title-btn'>МЫ ИЩЕМ</button>
                    </div>
                </div>
                <div className="aboutUs__content">
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img2} alt=""/>
                        <h2 className='aboutUs__card-title'>ТРАНСЛИРОВАНИЕ</h2>
                    </div>
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img3} alt=""/>
                        <h2 className='aboutUs__card-title'>МЕРОПРИЯТИЯ</h2>
                    </div>
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img4} alt=""/>
                        <h2 className='aboutUs__card-title'>КИНОПРОКАТ</h2>
                    </div>
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img5} alt=""/>
                        <h2 className='aboutUs__card-title'>КОЛЛЕКЦИОННЫЕ ПРЕДМЕТЫ + ТЕМАТИЧЕСКАЯ ПРОДУКЦИЯ</h2>
                    </div>
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img6} alt=""/>
                        <h2 className='aboutUs__card-title'>МОБИЛЬНЫЕ ИГРЫ</h2>
                    </div>
                    <div className="aboutUs__card">
                        <img className='aboutUs__card-img' src={img7} alt=""/>
                        <h2 className='aboutUs__card-title'>МАНГА</h2>
                    </div>

                </div>

                <div className="aboutUs__start ">
                        <button className='aboutUs__title-btn'>МЫ ИЩЕМ</button>
                </div>

            </div>


        </section>
    );
};

export default AboutUs;