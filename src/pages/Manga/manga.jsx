import React from 'react';
import Pdf from "../Pdf/manga.pdf";
import onepiecePdf from "../Pdf/onepiece.pdf";
import BleachPdf from "../Pdf/bleach.pdf";
import MyHeroManga from "../Pdf/MyHeroManga.pdf";
import GulManga from "../Pdf/GulManga.pdf";
import img1 from '../../assets/login1.jpg'
import naruto from '../../assets/manga/naruto.jpg'
import bleach from '../../assets/manga/bleach.jpg'
import onepiece from '../../assets/manga/onepiece.jpg'
import Gul from '../../assets/manga/Gul.jpg'
import MyHero from '../../assets/manga/myhero.jpg'
import Black from '../../assets/manga/Black.jpg'
import Fire from '../../assets/manga/Fire.jpg'



const Manga = () => {



    return (
        <section className='manga'>
            <div className="manga__card">
                <img className='manga__card-img' src={naruto} alt=""/>
                <p className='manga__card-title'>Манга-Naruto</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={bleach} alt=""/>
                <p className='manga__card-title'>Манга-Bleach</p>
                <a className='manga__card-link' href = {BleachPdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={onepiece} alt=""/>
                <p className='manga__card-title'>Манга-Onepiece</p>
                <a className='manga__card-link' href = {onepiecePdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={Gul} alt=""/>
                <p className='manga__card-title'>Манга-Tokyo ghoul</p>
                <a className='manga__card-link' href = {GulManga} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={MyHero} alt=""/>
                <p className='manga__card-title'>Манга-My hero academy</p>
                <a className='manga__card-link' href = {MyHeroManga} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={Black} alt=""/>
                <p className='manga__card-title'>Манга-Black clover</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={Fire} alt=""/>
                <p className='manga__card-title'>Манга-Fire Force</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={naruto} alt=""/>
                <p className='manga__card-title'>Манга-bleach</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={bleach} alt=""/>
                <p className='manga__card-title'>Манга-bleach</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>
            <div className="manga__card">
                <img className='manga__card-img' src={onepiece} alt=""/>
                <p className='manga__card-title'>Манга-bleach</p>
                <a className='manga__card-link' href = {Pdf} target = "_blank">Читать</a>
            </div>

        </section>
    );
};

export default Manga;