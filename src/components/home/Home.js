import React from "react";
import { Helmet } from "react-helmet";

import Hero from "./hero";
import AboutBlurp from "./AboutBlurp";
import Values from "./Values";
import Join from "./Join";
import Footer from "../footer/footer";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>UC Berkeley ToxSA</title>
            </Helmet>

            <Hero />
            <AboutBlurp></AboutBlurp>
            <Values></Values>
            <Join></Join>
            <Footer />
        </>
    );
}
