import React from 'react';

export const FeedbackCall = (props) => {
    const prop = props.isOpenFeedback;
    const feedbackClose = prop[0];
    const toggleFeedbackClose = prop[1];

    return (
        <aside className={ feedbackClose ? 'feedback feedback-call feedback-call_open' : 'feedback feedback-call' }>
            <button className="btn btn-close" onClick={toggleFeedbackClose}></button>
            <div className="title"><h2 className="title__descr">Заказать звонок</h2></div>
            <form action="" className="feedback__form">
                <input type="text" className="feedback__input-text" placeholder="Телефон"/>
                    <p className="feedback__description">
                        Нажимая “отправить”, вы даете согласие на <a>обработку персональных данных</a> и соглашаетесь с
                        нашей <a>политикой конфиденциальности</a>
                    </p>
                    <button type="submit" className="button">Отправить</button>
            </form>
        </aside>
    )
}
