import React from "react";
export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav__item nav__item--active"><a className="nav__link" href="#">Ремонтируемые устройства</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Ремонтируемые бренды</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Цены на услуги</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Адреса сервисных центров</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Специальные цены</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Отзывы</a></li>
            </ul>
        </nav>
    );
};
