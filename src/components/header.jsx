import React, { useLayoutEffect, useState } from 'react';
import {logPlugin} from "@babel/preset-env/lib/debug";

export const Header = () => {

    function useWindowSize() {
        const [size, setSize] = useState([0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    let titleMobile;
    let titleDesctop;

    if (useWindowSize() < 1119) {
        titleDesctop = '';
        titleMobile = <h1 className='title__descr'>Услуги и сервисы</h1>
    } else {
        titleDesctop = <h1 className='title__descr'>Услуги и сервисы</h1>;
        titleMobile = '';
    }

    return (
        <header className="header">
            <div className="header__mobile">
                <div className="header__top">
                    <div className="header__left">
                        <button className="btn btn-menu"></button>
                        <div className="logo">
                            <a href="#"><img src="./images/Group.png" alt="logo"/></a>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__btns">
                            <button className="btn btn-call"></button>
                            <button className="btn btn-messages"></button>
                            <button className="btn btn-user"></button>
                        </div>
                        <button className="btn btn-settings"></button>
                        <button className="btn btn-checkstatus"></button>
                    </div>
                </div>
                <div className="title">
                    {titleMobile}
                </div>
            </div>
            <div className="header__desctop">
                <div className="header__left">
                    <div className="title">
                        {titleDesctop}
                    </div>
                </div>
                <div className="header__right">
                    <button className="btn btn-with_text btn-settings">Оставить заявку</button>
                    <button className="btn btn-with_text btn-checkstatus">Статус ремонта</button>
                </div>
            </div>
        </header>
    )
}
