// import React from 'react';

import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <h1 className="text-7xl">Extra Sections</h1>
        </div>
    );
};

export default Home;