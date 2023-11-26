import React from "react";

export function TextMedia() {
    return (
        <div className="text-media">
            <div className="text-media__content">
                <div className="text-media__text">
                    <p>
                        Мы являемся авторизованным сервисным центром по ремонту техники
                        Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с
                        официальной гарантией производителя.
                    </p>
                    <p>
                        Мы успешно работаем с 1992 года и заслужили репутацию надежного
                        партнера, что подтверждает большое количество постоянных клиентов.
                        Мыгордимся тем, что к нам обращаются по рекомендациям и, в
                        своюочередь, советуют нас родным и близким.
                    </p>
                </div>
                <div className="read-more">
                    <button className="read-more__btn">Читать далее</button>
                </div>
            </div>
            <div className="text-media__media">
                <picture>
                    <source
                        srcSet="./images/MG1120.jpg"
                        media="(min-width: 1120px)"
                    />
                    <source
                        srcSet="./images/MG3223.jpg"
                        media="(min-width: 768px)"
                    />
                    <img src="./images/MG3223.jpg" alt="img"/>
                </picture>
            </div>
        </div>
    );
}
