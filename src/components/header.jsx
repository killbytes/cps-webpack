import React, { useLayoutEffect, useState, useEffect, useRef  } from 'react';
import {logPlugin} from "@babel/preset-env/lib/debug";
import {MobileMenu} from "@/components/mobile-menu";

export const Header = (props) => {
    const prop = props.isOpenFeedback;
    const feedbackClose = prop[0];
    const toggleFeedback = prop[1];

    const feedbackCallClose = prop[2];
    const toggleFeedbackCall = prop[3];

    const setFeedbackCallOpen = prop[4];
    const setFeedbackOpen = prop[5];

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

    // Состояние, отвечающее за открытие/закрытие меню
    const [isMenuOpen, setMenuOpen] = useState(false);
    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && (!event.target.classList.contains("btn-menu")) && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (event.target.className === 'mobile-menu mobile-menu_open') {
                if (event.clientX > 325 && event.clientX < 1070) {
                    setMenuOpen(false);
                }
            }
            if (event.target.classList.contains("btn-messages")) {
                setMenuOpen(false);
            }

            if (event.target.classList.contains("btn-call")) {
                setMenuOpen(false);
            }
        };
        const handleEscKeyPress = (event) => {
            if (event.key === 'Escape') {
                // Закрыть меню при нажатии клавиши Esc
                setMenuOpen(false);
                setFeedbackCallOpen(false);
                setFeedbackOpen(false);
            }
        };
        // clickButtons.forEach(button => {
        //     button.addEventListener('click', function () {
        //         window.location.href = this.dataset.link;
        //     });
        // });
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscKeyPress);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [menuRef]);
    return (
        <header className="header">
            <div className="header__mobile">
                <div className="header__top">
                    <div className="header__left">
                        <button className="btn btn-menu" onClick={toggleMenu}></button>
                        <div className="logo">
                            <a href="#"><img src="./images/Group.png" alt="logo"/></a>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__btns">
                            <button className="btn btn-call" onClick={toggleFeedbackCall}></button>
                            <button className="btn btn-messages" onClick={toggleFeedback}></button>
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
            <MobileMenu isOpened={[isMenuOpen, toggleMenu, menuRef, feedbackClose, toggleFeedback, feedbackCallClose, toggleFeedbackCall]} />
        </header>
    )
}
