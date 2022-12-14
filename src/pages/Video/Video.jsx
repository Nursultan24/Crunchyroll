import React, {useEffect} from 'react';
import img1 from '../../assets/watch/img1.jpg'
import {BsBookmark} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {FiPlay} from 'react-icons/fi'
import midoria from '../../assets/watch/midoria.png'
import e1 from '../../assets/watch/E1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOneAnime} from "../../redux/reducers/oneAnime";



const Video = () => {

    const dispatch = useDispatch()
    const  params = useParams();

    const {status, error, product} = useSelector((store) => store.oneAnime)

    useEffect(()=> {
        dispatch(getOneAnime(params.title))
    },[])

    return (
        <section className='watch'>

            <video className='watch__video' src={product.video} controls></video>

            <div className="container">
                <div className="watch__block2">
                    <div className="watch__left">
                        <h1 className='watch__left-title'>{product.title}</h1>
                        <p>4 видео -Субтитры</p>
                        <div className="watch__left-btn">
                            <button className='sliderBtn__post-info-btn2'><p className='sliderBtn__icon2'><BsBookmark/></p> Добавить в смотреть позже</button>
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