import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaNimblr} from "react-icons/fa"
import {TfiCrown} from "react-icons/tfi"
import {useDispatch, useSelector} from "react-redux";
import {logOutAccount} from "../../redux/reducers/user";
import {changeSearch} from "../../redux/reducers/anime";

const Header = () => {

    const dispatch = useDispatch()

    const {user} = useSelector((store) => store.user)

    const handleChange = (e) => {
        dispatch(changeSearch(e.target.value))
    }

    return (
        <header className="header">
            <div className="container__header">
                <nav className="header__nav">

                    <ul className="header__menu">
                        <Link to={'/'}>
                            <div className="header__logo">
                                <FaNimblr/>
                                crunchyroll
                            </div>
                        </Link>
                        <li className="header__item">
                            <NavLink className="header__link header__link-films" to={'/catalog'}>
                                Каталог
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/manga'}>
                                Манга
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/newsFirst'}>
                                Новости
                            </NavLink>
                        </li>
                    </ul>

                    <div className="header__right">
                        <div className="header__right-pay">
                            <TfiCrown/>
                            <div className="header__right-pay-crown">
                                Попробовать <br/>
                                Бесплатно <br/>
                                <div className='header__right-pay-crown-text' >
                                    Премиум
                                </div>
                            </div>
                        </div>
                        <ul className='header__right-icons'>
                            <input type="search" placeholder='Поиск' className='header__search' onChange={handleChange}/>

                            <li>
                                {
                                    user.email.length ?
                                        <p onClick={() => {
                                            dispatch(logOutAccount())
                                            localStorage.removeItem('user')
                                        }}  className='header__link'>Выйти</p>
                                        :
                                        <Link to={'/auth'}  className='header__link'>Войти</Link>
                                }

                            </li>


                        </ul>


                    </div>
                </nav>
            </div>



        </header>

    );
};


export default Header;