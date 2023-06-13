// import React from 'react';

import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../components/SectionTitle";

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <SectionTitle title={'Our Popular Classes'} description={'Here you can see our popular classes'}></SectionTitle>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
                    {
                        classes.map(singleClass => <PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClass;