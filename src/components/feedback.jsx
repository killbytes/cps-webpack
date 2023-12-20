import React from 'react';

export const Feedback = (props) => {
    const prop = props.isOpenFeedback;
    const feedbackClose = prop[0];
    const toggleFeedbackClose = prop[1];

    return (
        <aside className={ feedbackClose ? 'feedback feedback_open' : 'feedback' }>
            <button className="btn btn-close" onClick={toggleFeedbackClose}></button>
            <div className="title"><h2 className="title__descr">Услуги и сервисы</h2></div>
            <form action="" className="feedback__form">
                <input type="text" min="3" className="feedback__input-text" placeholder="Имя" required />
                <input type="number" className="feedback__input-text" placeholder="Телефон" required/>
                <input type="email" className="feedback__input-text" placeholder="Электронная почта"/>
                <textarea name="" id="" className="feedback__input-textarea" placeholder="Сообщение"></textarea>
                <p className="feedback__description">
                    Нажимая “отправить”, вы даете согласие на <a>обработку персональных данных</a> и
                    соглашаетесь с нашей <a>политикой конфиденциальности</a>
                </p>
                <button type="submit" className="button">Отправить</button>
            </form>
        </aside>
    )
}
