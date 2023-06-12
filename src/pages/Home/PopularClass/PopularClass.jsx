// import React from 'react';

import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/popularclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-7">Our Popular Classes</h1>
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