import React, {useEffect, useState} from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Prices = () => {


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


    return (  swiperInitialized ?
        <div className="prices">
            <div className="title-block">Цены на услуги</div>

            <Swiper
                modules={[Navigation, Pagination]}
                className="swiper"
                spaceBetween={16}
                slidesPerView="auto"
                initialSlide={0}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide className="prices__slide swiper-slide">
                    <div className="prices__info">
                        <p className="title">Ремонтные услуги</p>
                        <p className="description">Тестирование с выдачей технического заключения</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Цена</p>
                        <p className="description">Бесплатно</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Срок</p>
                        <p className="description">30-120 мин</p>
                    </div>
                    <a className="button" href="#">Заказать</a>
                </SwiperSlide>

                <SwiperSlide className="prices__slide swiper-slide">
                    <div className="prices__info">
                        <p className="title">Ремонтные услуги</p>
                        <p className="description">Тестирование с выдачей технического заключения</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Цена</p>
                        <p className="description">Бесплатно</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Срок</p>
                        <p className="description">30-120 мин</p>
                    </div>
                    <a className="button" href="#">Заказать</a>
                </SwiperSlide>

                <SwiperSlide className="prices__slide swiper-slide">
                    <div className="prices__info">
                        <p className="title">Ремонтные услуги</p>
                        <p className="description">Тестирование с выдачей технического заключения</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Цена</p>
                        <p className="description">Бесплатно</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Срок</p>
                        <p className="description">30-120 мин</p>
                    </div>
                    <a className="button" href="#">Заказать</a>
                </SwiperSlide>

                <SwiperSlide className="prices__slide swiper-slide">
                    <div className="prices__info">
                        <p className="title">Ремонтные услуги</p>
                        <p className="description">Тестирование с выдачей технического заключения</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Цена</p>
                        <p className="description">Бесплатно</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Срок</p>
                        <p className="description">30-120 мин</p>
                    </div>
                    <a className="button" href="#">Заказать</a>
                </SwiperSlide>

                <SwiperSlide className="prices__slide swiper-slide">
                    <div className="prices__info">
                        <p className="title">Ремонтные услуги</p>
                        <p className="description">Тестирование с выдачей технического заключения</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Цена</p>
                        <p className="description">Бесплатно</p>
                    </div>
                    <div className="prices__info">
                        <p className="title">Срок</p>
                        <p className="description">30-120 мин</p>
                    </div>
                    <a className="button" href="#">Заказать</a>
                </SwiperSlide>

            </Swiper>

            <p className="prices__bottom-info">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>
            <div className="prices__bottom-link"><a href="#" >Получить коммерческое предложение</a></div>
        </div>
            :
        <div className="prices">
            <div className="title-block">Цены на услуги</div>
            <div className="rows">
                <div className="rows__head">
                    <div className="row__item"><p>Ремонтные услуги</p></div>
                    <div className="row__item"><p>Цена</p></div>
                    <div className="row__item"><p>Срок</p></div>
                    <div className="row__item"></div>
                </div>
                <div className="row">
                    <div className="row__item"><p>Диагностика</p></div>
                    <div className="row__item"><p>Бесплатно</p></div>
                    <div className="row__item"><p>30 мин</p></div>
                    <div className="row__item"><a className="button" href="#">Заказать</a></div>
                </div>
                <div className="row">
                    <div className="row__item"><p>Замена дисплея</p></div>
                    <div className="row__item"><p>1 000 ₽</p></div>
                    <div className="row__item"><p>30-120 мин</p></div>
                    <div className="row__item"><a className="button" href="#">Заказать</a></div>
                </div>
                <div className="row">
                    <div className="row__item"><p>Замена полифонического динамика</p></div>
                    <div className="row__item"><p>1 000 ₽</p></div>
                    <div className="row__item"><p>30-120 мин</p></div>
                    <div className="row__item"><a className="button" href="#">Заказать</a></div>
                </div>
                <div className="row">
                    <div className="row__item"><p>Тестирование с выдачей технического заключения</p></div>
                    <div className="row__item"><p>1 000 ₽</p></div>
                    <div className="row__item"><p>30-120 мин</p></div>
                    <div className="row__item"><a className="button" href="#">Заказать</a></div>
                </div>
                <div className="row">
                    <div className="row__item"><p>Замена программного обеспечения</p></div>
                    <div className="row__item"><p>1 000 ₽</p></div>
                    <div className="row__item"><p>30-120 мин</p></div>
                    <div className="row__item"><a className="button" href="#">Заказать</a></div>
                </div>
            </div>

            <p className="prices__bottom-info">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>
            <div className="prices__bottom-link"><a href="#" >Получить коммерческое предложение</a></div>
        </div>
    );
}
