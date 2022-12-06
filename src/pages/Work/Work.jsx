import React from 'react';
import work1 from '../../assets/work.webp'
import map from '../../assets/map.svg'

const Work = () => {
    return (
        <section className='work'>
            <div className="work__content">
                <img className='work__content-img' src={work1} alt=""/>
                <div className="work__content-title">
                    <p className='work__content-title-text'>РАБОТАТЬ С НАМИ</p>
                </div>
            </div>
            <div className="aboutUs__start">
                <div className="aboutUs__title">
                    Присоединяйся к нашей команде и помоги сформировать новое будущее для <br/> аниме! <br/>
                    <button className='aboutUs__title-btn'>ВАКАНСИИ</button>
                </div>
            </div>
            <img src={map} alt=""/>
            <div className="work__address">
                <p className='work__country'>Мы международная организация, насчитывающая 12 офисов по всему <br/> миру: США (Калвер-Сити, Сан-Франциско, Даллас, Бербанк, Нью-Йорк), <br/> Австралия (Мельбурн), Канада (Монреаль), Франция (Париж, Рубе), <br/> Германия (Берлин), Япония (Токио), Молдова (Кишинев), Швейцария <br/> (Лозанна) и Великобритания (Лондон).</p>
            </div>


        </section>
    );
};

export default Work;