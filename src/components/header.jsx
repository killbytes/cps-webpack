// import React from "react";

export const Header = () => {
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
                    {/*<h1 class="title__descr">Услуги и сервисы</h1>*/}
                </div>
            </div>
            <div className="header__desctop">
                <div className="header__left">
                    <div className="title">
                        {/*<h1 class="title__descr">Услуги и сервисы</h1>*/}
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
