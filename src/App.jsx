import React from "react";
import {Header} from '@/components/header';
import {Nav} from "@/components/nav";
import {TextMedia} from "@/components/text-media";

export const App = () => (
    <React.Fragment>
        <Header/>
        <Nav/>
        <main className="main">
            <section className="section">
                <div className="container">
                    <TextMedia/>
                </div>
            </section>
        </main>
    </React.Fragment>
);
