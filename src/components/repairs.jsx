import React, {useEffect, useState} from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Repairs = () => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked); // Изменяем состояние при клике
    };


    const [swiperInitialized, setSwiperInitialized] = useState(false);

    useEffect(() => {
        const initializeSwiper = () => {
            // Инициализация Swiper при разрешении экрана 768px и выше
            if (window.innerWidth < 768 && !swiperInitialized) {
                setSwiperInitialized(true);
            }
        };

        // Вызываем функцию при монтировании компонента
        initializeSwiper();

        // Добавляем слушателя изменения размера окна для повторной инициализации при изменении разрешения
        window.addEventListener('resize', initializeSwiper);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', initializeSwiper);
        };
    }, [swiperInitialized]);

    return (

        <>
            {   swiperInitialized ?
                <div className="brands repairs">
                    <div className="title-block">Ремонт различных видов техники</div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        className="swiper repairs"
                        spaceBetween={16}
                        slidesPerView="auto"
                        initialSlide={0}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="card swiper-slide">
                            <p>Ремонт ноутбуков</p>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <p>Ремонт планшетов</p>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <p>Ремонт ПК </p>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <p>Ремонт  мониторов</p>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/BOSCH.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/hp.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/acer.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/sony.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/lenovo.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/Samsung.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>

                        <SwiperSlide className="card swiper-slide">
                            <img src="./images/Apple.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </SwiperSlide>
                    </Swiper>
                </div>
                :
                <div className="brands repairs">
                    <div className="title-block">Ремонт различных видов техники</div>
                    <ul className={isClicked ? 'brands__card brands__card--active' : 'brands__card'}>
                        <li className="card">
                            <p>Ремонт ноутбуков</p>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <p>Ремонт планшетов</p>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <p>Ремонт ПК </p>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <p>Ремонт  мониторов</p>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/BOSCH.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/hp.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/acer.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/sony.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>

                        <li className="card">
                            <img src="./images/lenovo.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/Samsung.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                        <li className="card">
                            <img src="./images/Apple.svg" alt="img"/>
                            <a className="card__link" href="#"></a>
                        </li>
                    </ul>
                    <div className = {isClicked ? 'read-more read-more--active' : 'read-more'} onClick={handleClick}>
                        <button className="read-more__btn">{isClicked ? 'Скрыть' : 'Показать все'}</button>
                    </div>
                </div>
            }
        </>
    )
}
