import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const MobileMenu = (props) => {
    const prop = props.isOpened;
    const propsOpen = prop[0];
    const propsClose = prop[1];
    const menuRef = prop[2];
    const feedbackClose = prop[3];
    const toggleFeedback = prop[4];

    const feedbackCallClose = prop[5];
    const toggleFeedbackCall = prop[6];

    return (
            <aside className={ propsOpen ? 'mobile-menu mobile-menu_open' : 'mobile-menu'} ref={menuRef}>
                <div className="mobile-menu__header">
                    <button className="btn btn-close" onClick={propsClose}></button>
                    <div className="logo"><Link className="logo__link" to='#'><img src="./images/Group.png" alt="logo"/></Link></div>
                    <button className="btn btn-search"></button>
                </div>
                <nav className="mobile-menu__main">
                    <ul className="list">
                        <li className="list__item"><a className="list__link list__link--active">Ремонт техники</a></li>
                        <li className="list__item"><a className="list__link">Услуги и сервисы</a></li>
                        <li className="list__item"><a className="list__link">Корпоративным клиентам</a></li>
                        <li className="list__item"><a className="list__link">Продавцам техники</a></li>
                        <li className="list__item"><a className="list__link">Партнерам</a></li>
                        <li className="list__item"><a className="list__link">Производителям</a></li>
                        <li className="list__item"><a className="list__link">Наши сервисные центры</a></li>
                        <li className="list__item"><a className="list__link">Контакты</a></li>
                    </ul>
                </nav>

                <div className="mobile-menu__footer">
                    <div className="mobile-menu__contacts">
                        <button className="btn btn-call" onClick={toggleFeedbackCall}></button>
                        <button className="btn btn-messages" onClick={toggleFeedback}></button>
                        <button className="btn btn-user"></button>
                        <a href="" className="mail">mail@cps.com</a>
                        <a href="" className="phone">8 800 890 8900</a>
                    </div>
                    <div className="lang">
                        <a className="lang__link lang__link--active" href="" className="ru">RU</a>
                        <a className="lang__link" href="" className="en">EN</a>
                        <a className="lang__link" href="" className="ch">CH</a>
                    </div>
                </div>

            </aside>

    )
}
