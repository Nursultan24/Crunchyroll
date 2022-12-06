import React from 'react';
import img1 from '../../assets/watch/img1.jpg'
import {BsBookmark} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {FiPlay} from 'react-icons/fi'
import midoria from '../../assets/watch/midoria.png'
import e1 from '../../assets/watch/E1.jpg'



const Video = () => {
    return (
        <section className='watch'>
            <iframe className="video-player" allow="autoplay; fullscreen; encrypted-media *" allowFullScreen=""
                    src="https://static.crunchyroll.com/vilos-v2/web/vilos/player.html" title="Видеоплеер"><p>Ваш
                браузер не поддерживает встроенные фреймы.</p></iframe>

            <div className="container">

                <div className="watch__block2">
                    <div className="watch__left">
                        <h1 className='watch__left-title'>Моя геройская академия</h1>
                        <p>4 видео -Субтитры</p>
                        <div className="watch__left-btn">
                            <button className='sliderBtn__post-info-btn2'><p className='sliderBtn__icon2'><BsBookmark/></p> Добавить в смотреть позже</button>
                            <button className='watch__left-btn2'><p className='watch__icons'><AiOutlinePlus/></p>ДОБАВИТЬ В CRUNCHY-СПИСОК</button>
                        </div>
                        <p className='watch__desc'>Идзуку всю жизнь мечтал стать героем. Это непростая цель для любого, но особенно для мальчика без суперсил. В его мире четыре пятых людей обладают причудой — некого рода сверхъестественной способностью, но Идзуку не посчастливилось родиться совершенно заурядным. Но ему ничего не помешает вступить в одну из лучших школ для обучения героев.</p>
                        <div className="watch__studios">
                            <p>Студия</p>
                            <p>Toho</p>
                        </div>
                    </div>
                    <div className="watch__right">
                        <img src={midoria} alt="" className="watch__right-img"/>
                        <button className="watch__right-btn">
                            <p className='watch__right-icons'><FiPlay/></p> СМОТРЕТЬ S1 E1
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Video;