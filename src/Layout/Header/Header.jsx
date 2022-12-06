import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import {FaNimblr} from "react-icons/fa"
import {TfiCrown} from "react-icons/tfi"
import {useDispatch, useSelector} from "react-redux";
import {logOutAccount} from "../../redux/reducers/user";

const Header = () => {

    const dispatch = useDispatch()

    const {user} = useSelector((store) => store.user)

    return (
        <header className="header">

                <nav className="header__nav">

                    <ul className="header__menu">
                        <Link to={'/'}>
                            <div className="header__logo">
                                <FaNimblr/>
                                crunchyroll
                            </div>
                        </Link>
                        <li className="header__item">
                            <NavLink className="header__link header__link-films" to={''}>
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
                          <li className='header__right-icons-li'><AiOutlineSearch/></li>

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

        </header>

    );
};


export default Header;