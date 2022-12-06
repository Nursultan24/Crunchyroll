import React from 'react';
import {Link} from "react-router-dom";
import {TfiCrown} from 'react-icons/tfi'
import {FiYoutube} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FaOdnoklassnikiSquare} from 'react-icons/fa'
import Terms from "../../pages/Terms/Terms";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link className="footer__link white">Навигация</Link></li>
                        <li className="footer__list-item"><Link className="footer__link">Популярное</Link></li>
                        <li className="footer__list-item"><Link className="footer__link">Сезоны</Link></li>
                        <li className="footer__list-item"><Link className="footer__link">Каталог манги</Link></li>
                        <li className="footer__list-item"><Link className="footer__link">Календарь релизов</Link></li>
                        <li className="footer__list-item"><Link className="footer__link">Новости</Link></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link className="footer__link white">Связаться с нами</Link></li>
                        <li className="footer__list-item"><a href={'https://www.youtube.com/user/crunchyroll'} className="footer__link"><FiYoutube/> Youtube</a></li>
                        <li className="footer__list-item"><a href={'https://www.facebook.com/Crunchyroll/'} className="footer__link"><AiFillFacebook/> Facebook</a></li>
                        <li className="footer__list-item"><a href={'https://twitter.com/crunchyroll'} className="footer__link"><FiTwitter/> Twitter</a></li>
                        <li className="footer__list-item"><a href={'https://www.instagram.com/crunchyroll/'} className="footer__link"><AiOutlineInstagram/> Instagram</a></li>
                        <li className="footer__list-item"><a href={'https://www.tiktok.com/@crunchyroll'} className="footer__link"><FaTiktok/> TikTok</a></li>
                        <li className="footer__list-item"><a href={'https://vk.com/crunchyroll'} className="footer__link"><SlSocialVkontakte/> ВКонтакте</a></li>
                        <li className="footer__list-item"><a href={'https://ok.ru/crunchyroll'} className="footer__link"><FaOdnoklassnikiSquare/> Одноклассники</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link className="footer__link white">Crunchyroll</Link></li>
                        <li className="footer__list-item"><Link style={{color:'orange'}} className="footer__link"> <TfiCrown/> Оформить пробную подписку</Link></li>
                        <li className="footer__list-item"><Link to={'/AboutUs'} className="footer__link">О нас</Link></li>
                        <li className="footer__list-item"><Link to={'/Terms'} className="footer__link">Пользовательское соглашение</Link></li>
                        <li className="footer__list-item"><a href={'https://www.crunchyroll.com/ru/privacy'} className="footer__link">Политика конфиденциальности</a></li>
                        <li className="footer__list-item"><Link to={'/Install'} className="footer__link">Установить приложения</Link></li>
                        <li className="footer__list-item"><a href={'https://www.crunchyroll.com/ru/redeem'} className="footer__link">Активировать код</a></li>
                        <li className="footer__list-item"><Link to={'/Work'} className="footer__link">Работа</Link></li>


                    </ul>
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link  className="footer__link white">Аккаунт</Link></li>
                        <li className="footer__list-item"><Link to={'/register'} className="footer__link">Создать аккаунт</Link></li>
                        <li className="footer__list-item"><Link to={'/auth'} className="footer__link">Войти</Link></li>
                    </ul>
                </div>
                <div className='footer__bottom'>
                    <p>© Ellation, LLC</p>
                    <p>Русский</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;