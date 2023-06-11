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
        <div>
            <p>{classes.length}</p>
            {
                classes.map(singleClass => <PopularClassCard key={setClasses._id} singleClass={singleClass}></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClass;