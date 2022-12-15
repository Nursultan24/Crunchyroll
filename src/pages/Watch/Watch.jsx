import {React,useEffect} from 'react';

import {BsBookmark} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {FiPlay} from 'react-icons/fi'
import {useSelector,useDispatch} from "react-redux";
import {useParams,Link} from 'react-router-dom'
import {getOneAnime} from "../../redux/reducers/oneAnime";
import {addFavorites,removeFavorites} from "../../redux/reducers/favorites";


const Watch = () => {

    const dispatch = useDispatch()

    const  params = useParams();

    const {status, error, product} = useSelector((store) => store.oneAnime)
    const {data} = useSelector((store) => store.favorites)

    localStorage.setItem('favorites',JSON.stringify(data))
    localStorage.getItem('favorites')


    useEffect(()=> {
        dispatch(getOneAnime(params.id))
    },[])


    return (
        <section className='watch'>
            <div className="watch__start">
                <div className='watch__start-first'>
                    <img  className='watch__start-img' src={product.img} alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="watch__block2">
                    <div className="watch__left">
                        <h1 className='watch__left-title'>{product.title}</h1>
                        <p>4 видео -Субтитры</p>
                        <div className="watch__left-btn">
                            <button className='sliderBtn__post-info-btn2' onClick={()=> dispatch(addFavorites(product))}><p className='sliderBtn__icon2'><BsBookmark/></p> Добавить в смотреть позже</button>
                            <button className='watch__left-btn2'><p className='watch__icons'><AiOutlinePlus/></p>ДОБАВИТЬ В CRUNCHY-СПИСОК</button>
                        </div>
                        <div className="watch__left-genre">Жанр: {product.genre}</div>
                        <p className='watch__desc'>{product.description}</p>
                        <div className="watch__studios">
                            <p>Студия</p>
                            <p>{product.studios}</p>
                        </div>
                    </div>
                    <div className="watch__right">
                        <img src={product.poster} alt="" className="watch__right-img"/>
                        <Link to={'/video'}>
                            <button className="watch__right-btn">
                                <p className='watch__right-icons'><FiPlay/></p> СМОТРЕТЬ S1 E1
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="watch__series">
                    <h3 className='watch__series-title'>S1 - {product.title} 1 сезон</h3>
                    <div className="watch__row">
                            <div className="watch__card" >
                                <Link to={'/video'}>
                                    <img  className='watch__card-img' src={product.poster} alt=""/>
                                    <p className='watch__card-title'>{product.title}</p>
                                    <h4 className='watch__card-desc'>1сезон 1серия Мидория: Начало</h4>
                                    <p className='watch__card-sub'>Субтитры</p>
                                </Link>

                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.episode} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 2серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.poster} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 3серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.episode} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 4серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.poster} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 5серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.episode} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 6серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.poster} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 7серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                            <div className="watch__card">
                                <Link to={'/video'}>
                                <img  className='watch__card-img' src={product.episode} alt=""/>
                                <p className='watch__card-title'>{product.title}</p>
                                <h4 className='watch__card-desc'>1сезон 8серия Мидория: Начало</h4>
                                <p className='watch__card-sub'>Субтитры</p>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Watch;