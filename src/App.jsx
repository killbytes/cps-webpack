import React, {useEffect, useState} from "react";
import {Header} from '@/components/header';
import {Nav} from "@/components/nav";
import {TextMedia} from "@/components/text-media";
import {Brands} from "@/components/brands";
import {Repairs} from "@/components/repairs";
import {Prices} from "@/components/prices";
import {Footer} from "@/components/footer";
import {Feedback} from "@/components/feedback";
import {FeedbackCall} from "@/components/feedback-call";

export const App = () => {
    const [isFeedbackOpen, setFeedbackOpen] = useState(false);
    const toggleFeedback = () => {
        setFeedbackOpen(!isFeedbackOpen);
    };

    const [isFeedbackCallOpen, setFeedbackCallOpen] = useState(false);
    const toggleFeedbackCall = () => {
        setFeedbackCallOpen(!isFeedbackCallOpen);
    };

    useEffect(() => {
        const toggleFeedback = (event) => {
            if ((!event.srcElement.classList.contains("feedback_open")) && !(event.target.className === "btn btn-messages")) {
                let targetElement = event.target;
                function hasParentWithClass(element, className) {
                    // Пока есть родительские элементы
                    while (element) {
                        // Проверяем наличие класса у текущего элемента
                        if (element.classList.contains(className)) {
                            return true; // Класс найден у родителя
                        }
                        // Переходим к следующему родителю
                        element = element.parentElement;
                    }
                    return false; // Класс не найден у родителя
                }
                // Проверяем наличие класса у родителя
                let classNameToCheck = 'feedback_open';
                if (hasParentWithClass(targetElement, classNameToCheck)) {
                } else {
                    setFeedbackOpen(false);
                }
            }
            if ((!event.srcElement.classList.contains("feedback-call_open")) && !(event.target.className === "btn btn-call")) {
                let targetElement = event.target;
                function hasParentWithClass(element, className) {
                    // Пока есть родительские элементы
                    while (element) {
                        // Проверяем наличие класса у текущего элемента
                        if (element.classList.contains(className)) {
                            return true; // Класс найден у родителя
                        }
                        // Переходим к следующему родителю
                        element = element.parentElement;
                    }
                    return false; // Класс не найден у родителя
                }
                // Проверяем наличие класса у родителя
                let classNameToCheck = 'feedback-call_open';
                if (hasParentWithClass(targetElement, classNameToCheck)) {
                } else {
                    setFeedbackCallOpen(false);
                }
            }
        };

        document.addEventListener('click', toggleFeedback);
        return () => {
            document.removeEventListener('click', toggleFeedback);
        };
    }, []);

    return (
        <React.Fragment>
            <Feedback isOpenFeedback ={[isFeedbackOpen, toggleFeedback]}/>
            <FeedbackCall isOpenFeedback ={[isFeedbackCallOpen, toggleFeedbackCall]}/>
            <Header isOpenFeedback ={[isFeedbackOpen, toggleFeedback, isFeedbackCallOpen, toggleFeedbackCall, setFeedbackCallOpen, setFeedbackOpen]}/>
            <Nav/>
            <main className="main">
                <section className="section">
                    <div className="container">
                        <TextMedia/>
                    </div>
                </section>
                <Brands/>
                <Repairs/>
                <Prices/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}
