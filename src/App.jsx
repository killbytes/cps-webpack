import React, {useState} from "react";
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
