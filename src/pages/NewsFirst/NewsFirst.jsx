import React from 'react';
import news1 from '../../assets/animeList/news1.jpg'
import news2 from '../../assets/animeList/news2.png'
import news3 from '../../assets/animeList/news3.jpg'
import news4 from '../../assets/animeList/news4.png'
import news5 from '../../assets/animeList/news5.png'
import news6 from '../../assets/animeList/news6.jpg'
import news7 from '../../assets/animeList/news7.png'

const NewsFirst = () => {
    return (
        <section className='news'>
            <div className="container container2">
                <div className="news__block">
                    <h2 className='news__title'>Новости Crunchyroll</h2>
                    <div className="news__all">
                        <div className="news__left">
                            <div className="news__left-card">
                                <h4 className='news__left-card-name'>Главные новости</h4>
                                <img className='news__left-card-img' src={news1} alt=""/>
                                <p className='news__left-card-title'>
                                    На Anime NYC состоится премьера первой серии TRIGUN STAMPEDE
                                </p>
                                <p className='news__left-card-time'>
                                    Nov 09, 2022 8:17pm GMT+6
                                    AsusWay
                                </p>
                            </div>
                            <div className="news__left-card">
                                <img className='news__left-card-img' src={news2} alt=""/>
                                <p className='news__left-card-title'>
                                    На Anime NYC состоится премьера первой серии TRIGUN STAMPEDE
                                </p>
                                <p className='news__left-card-time'>
                                    Nov 09, 2022 8:17pm GMT+6
                                    AsusWay
                                </p>
                            </div>
                        </div>
                        <div className="news__right">
                            <div className="news__right-card">
                                <h4 className='news__left-card-name'>Последние</h4>

                                <ul className='news__right-card-list'>
                                    <li className='news__right-card-info'>
                                        <div className="news__right-card-photo">
                                            <img  className='news__right-card-img' src={news3} alt=""/>
                                        </div>

                                        <div className='news__right-card-text'>
                                            <p className='news__right-card-desc'>Смотрим опенинги и эндинги аниме Hyouka без титров</p>
                                            <p className='news__left-card-time'>Nov 19, 2022 1:46am GMT+6 <br/>AsusWay</p>
                                        </div>

                                    </li>
                                    <li className='news__right-card-info'>
                                        <div className="news__right-card-photo">
                                            <img  className='news__right-card-img' src={news4} alt=""/>
                                        </div>

                                        <div className='news__right-card-text'>
                                            <p className='news__right-card-desc'>
                                                Аниме Bureau of Paranormal Investigation появится на Crunchyroll
                                            </p>
                                            <p className='news__left-card-time'>Nov 19, 2022 1:46am GMT+6 <br/>AsusWay</p>
                                        </div>

                                    </li>
                                    <li className='news__right-card-info'>
                                        <div className="news__right-card-photo">
                                            <img  className='news__right-card-img' src={news5} alt=""/>
                                        </div>

                                        <div className='news__right-card-text'>
                                            <p className='news__right-card-desc'>Новые подробности об аниме Liar Liar</p>
                                            <p className='news__left-card-time'>Nov 19, 2022 1:46am GMT+6 <br/>AsusWay</p>
                                        </div>

                                    </li>
                                    <li className='news__right-card-info'>
                                        <div className="news__right-card-photo">
                                            <img  className='news__right-card-img' src={news6} alt=""/>
                                        </div>

                                        <div className='news__right-card-text'>
                                            <p className='news__right-card-desc'>Смотрим новый трейлер аниме Sugar Apple Fairy Tale</p>
                                            <p className='news__left-card-time'>Nov 19, 2022 1:46am GMT+6 <br/>AsusWay</p>
                                        </div>

                                    </li>
                                    <li className='news__right-card-info'>
                                        <div className="news__right-card-photo">
                                            <img  className='news__right-card-img' src={news7} alt=""/>
                                        </div>

                                        <div className='news__right-card-text'>
                                            <p className='news__right-card-desc'>Аниме Sacrificial Princess and the King of Beasts выйдет в апреле</p>
                                            <p className='news__left-card-time'>Nov 19, 2022 1:46am GMT+6 <br/>AsusWay</p>
                                        </div>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default NewsFirst;