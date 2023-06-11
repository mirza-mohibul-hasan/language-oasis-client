// import React from 'react';

import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
            {
                classes.map(singleClass => <PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClass;