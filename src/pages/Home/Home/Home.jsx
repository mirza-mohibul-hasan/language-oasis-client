// import React from 'react';

import FAQSection from "../FAQ/FAQSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
const Home = () => {
    return (
        <div className="dark:bg-slate-800">
            <div className="py-5 space-y-3">
                <h1 className="text-5xl md:text-7xl text-center font-semibold dark:text-gray-50">Welcome to <span className="text-[#e2136e]">Language Oasis</span></h1>
                <p className="text-2xl md:text-3xl text-center font-semibold dark:text-gray-400">Choose from over 210,000 online video courses <br /> with new additions published every month</p>
            </div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;