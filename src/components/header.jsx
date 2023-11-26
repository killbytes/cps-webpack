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

    // function ShowWindowDimensions(props) {
    //     const width = useWindowSize();
    //     return <span>Window size: {width}</span>;
    // }
    // let width = window.innerWidth;
    let titleMobile = false;
    let titleDesctop = true;

    // const [titleMobile, setTitleMobile] = useState(false);
    // const [titleDesctop, setTitleDesctop] = useState(true);

    if (useWindowSize() < 1119) {
        // setTitleMobile(!titleMobile);
        titleDesctop = '';
    } else {
        // setTitleMobile(titleMobile);
        titleDesctop = `<h1 className='title__descr'>Услуги и сервисы</h1>`;
    }

    // console.log("titleMobile ", titleMobile);
    // console.log("titleDesctop", titleDesctop);



    // const [titleMobile, setTitleMobile] = useState(false);
    // let width = window.innerWidth;
    // if (width < 1119) {
    //     setTitleMobile(titleMobile);
    // } else {
    //     setTitleMobile(!titleMobile)
    // }
    // window.addEventListener("resize", addTitle);

    // console.log(title)
    // console.log(width)

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
                        <button className="btn btn-call"></button>
                        <button className="btn btn-messages"></button>
                        <button className="btn btn-user"></button>
                        <button className="btn btn-settings"></button>
                        <button className="btn btn-checkstatus"></button>
                    </div>
                </div>
                <div className="title">
                    {/*{titleMobile && <h1 className="title__descr">Услуги и сервисы</h1>}*/}
                </div>
            </div>
            <div className="header__desctop">
                <div className="header__left">
                    <div className="title">
                        {titleDesctop}
                        {/*<ShowWindowDimensions/>*/}
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
