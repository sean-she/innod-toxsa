import React from "react";

import Hero from "./hero";
import AboutBlurp from "./AboutBlurp";
import Values from "./Values";
import Join from "./Join";
import Footer from "../footer/footer";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutBlurp></AboutBlurp>
            <Values></Values>
            <Join></Join>
            <Footer />
        </>
    );
}
