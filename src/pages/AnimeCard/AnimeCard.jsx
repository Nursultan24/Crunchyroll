import React from 'react';
import {Link} from 'react-router-dom'



const AnimeCard = ({item}) => {


    return (

                    <section className="anime__card">
                        <div className='anime__card-catalog'>
                            <Link to={`/watch/${item.id}`}>
                                <img className='anime__card-img' src={item.series} alt=""/>
                                <div className="anime__card-info">
                                    <h3 className='anime__card-info-title'>{item.title}</h3>
                                    <p className='sliderBtn__card-info sub'><span className='sliderBtn__ser'>Сериал</span> - Суб. | Озв.</p>
                                </div>
                            </Link>
                        </div>


                    </section>

    );
};

export default AnimeCard;