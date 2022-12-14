import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAnime, changeSearch} from "../../redux/reducers/anime";
import {useParams} from "react-router-dom";


const Search = () => {

    const dispatch = useDispatch()

    const  params = useParams();

    const {status, error, data,filter} = useSelector((store) => store.anime)



    const handleChange = (e) => {
        dispatch(changeSearch(e.target.value))
    }
    useEffect(() => {
        dispatch(getAnime())
    },[filter])



    return (
        <section className='search'>
            <div className="search__input">
                <input className='search__input-main' type="search" placeholder='Поиск...' onChange={handleChange}/>
            </div>

            {/*{*/}
            {/*    status === "loading" ?*/}
            {/*        <p>load</p>*/}
            {/*         : status === 'resolve' ?*/}
            {/*        <>*/}
            {/*            {*/}
            {/*                data.map((item) => (*/}
            {/*                    <p key={item.id}>{item.title}</p>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </>*/}
            {/*        : <h2>{error}</h2>*/}

            {/*}*/}
        </section>
    );
};

export default Search;