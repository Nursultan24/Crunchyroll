import React from 'react';
import Apple from '../../assets/install/apple-ios.png'
import Android from '../../assets/install/android.png'
import ps5 from '../../assets/install/ps5.png'
import nintendo from '../../assets/install/nintendo.png'
import tv from '../../assets/install/android-tv.png'
import windows from '../../assets/install/windows-platform.png'
import ps4 from '../../assets/install/ps4.png'
import xbox from '../../assets/install/xboxone.png'
import chromecast from '../../assets/install/chromecast_device.png'
import appletv from '../../assets/install/appletv.png'
import roku from '../../assets/install/roku3.png'
import amazon from '../../assets/install/amazon-fire-tv.png'

const Install = () => {
    return (
        <section className='install'>
            <div className="container">
                <img src="https://www.crunchyroll.com/i/beta/devices/nintendo-switch-hero.png" alt=""/>
                   <p className='install__desc'>Мобильные устройства</p>
                <div className="install__all">
                    <div className="install__card">
                        <img src={Apple} alt=""/>

                            <h3 className='install__card-title'>APPLE IOS</h3>
                            <p className='install__card-desc'>Найдите приложение «Crunchyroll» в App Store на своем устройстве iOS!</p>
                            <a  className='install__card-link' href={'https://apps.apple.com/us/app/crunchyroll/id329913454'}>ITUNES STORE</a>
                    </div>
                    <div className="install__card">
                        <img src={Android} alt=""/>

                        <h3 className='install__card-title'>ANDROID</h3>
                        <p className='install__card-desc'>Найдите приложение «Crunchyroll» в Android Market на своем устройстве Android!</p>
                        <a  className='install__card-link' href={'https://play.google.com/store/apps/details?id=com.crunchyroll.crunchyroid&pli=1'}>GOOGLE PLAY</a>
                    </div>
                </div>
                <p className='install__desc'>Игровые консоли</p>
                <div className="install__all2">
                    <div className="install__card">
                        <img src={ps5} alt=""/>
                        <h3 className='install__card-title'>PLAYSTATION 5</h3>
                        <p className='install__card-desc'>Find Crunchyroll among the PS5 video apps and download for free! *</p>
                    </div>
                    <div className="install__card">
                        <img src={nintendo} alt=""/>
                        <h3 className='install__card-title'>NINTENDO SWITCH</h3>
                        <p className='install__card-desc'>Head to the Nintendo eShop to download Crunchyroll to your Nintendo Switch™ home screen today *</p>
                    </div>
                    <div className="install__card">
                        <img src={tv} alt=""/>
                        <h3 className='install__card-title'>ANDROID TV</h3>
                        <p className='install__card-desc'>Available for free in the Google Play Store, you can now watch Crunchyroll with Android TV *</p>
                    </div>
                    <div className="install__card">
                        <img src={windows} alt=""/>
                        <h3 className='install__card-title'>UNIVERSAL WINDOWS PLATFORM APP</h3>
                        <p className='install__card-desc'>Search for "crunchyroll" in the Microsoft Store to download the Crunchyroll app *</p>
                    </div>
                    <div className="install__card">
                        <img src={ps4} alt=""/>
                        <h3 className='install__card-title'>PLAYSTATION 4</h3>
                        <p className='install__card-desc'>Найдите приложение Crunchyroll среди других приложений для просмотра видео на PS4 и скачайте его бесплатно! *</p>
                    </div>
                    <div className="install__card">
                        <img src={xbox} alt=""/>
                        <h3 className='install__card-title'>XBOX ONE</h3>
                        <p className='install__card-desc'>Найдите приложение Crunchyroll среди других приложений для просмотра видео на Xbox One и скачайте его бесплатно!</p>
                    </div>
                    <div className="install__card">
                        <img src={chromecast} alt=""/>
                        <h3 className='install__card-title'>CHROMECAST</h3>
                        <p className='install__card-desc'>Отправлять контент Crunchyroll на ваше устройство Chromecast через наши приложения для iOS или Android, или через браузер Chrome с расширением Google Cast!</p>
                    </div>
                    <div className="install__card">
                        <img src={appletv} alt=""/>
                        <h3 className='install__card-title'>APPLE TV</h3>
                        <p className='install__card-desc'>Чтобы установить приложение, обновите свой Apple TV в настройках, если еще не видите Crunchyroll.</p>
                    </div>
                    <div className="install__card">
                        <img src={roku} alt=""/>
                        <h3 className='install__card-title'>ROKU</h3>
                        <p className='install__card-desc'>Искать "crunchyroll" в магазине каналов для загрузки канала Crunchyroll.</p>
                    </div>
                    <div className="install__card">
                        <img src={amazon} alt=""/>
                        <h3 className='install__card-title'>AMAZON FIRE TV</h3>
                        <p className='install__card-desc'>Введите в поиске "Crunchyroll", чтобы установить приложение на ваш Fire TV.</p>
                    </div>

            </div>
            </div>
        </section>
    );
};

export default Install;