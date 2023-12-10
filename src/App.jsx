import React from "react";
import {Header} from '@/components/header';
import {Nav} from "@/components/nav";
import {TextMedia} from "@/components/text-media";
import {Brands} from "@/components/brands";

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
            <Brands/>
        </main>
    </React.Fragment>
);
