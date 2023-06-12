// import React from 'react';

import FAQ from "../FAQ/FAQ";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import { Fade, Slide } from "react-awesome-reveal";
const Home = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <Slide className="text-4xl font-semibold">
                    <h1>Welcome to Language Oasis</h1>
                </Slide>
                <Fade className="text-2xl" delay={1e3} cascade damping={1e-1}>
                    Easy to learn foreign language
                </Fade>
            </div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;