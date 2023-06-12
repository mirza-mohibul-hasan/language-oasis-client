// import React from 'react';

import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    // console.log(classes)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
        {
            classes.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
        }
    </div>
    );
};

export default Classes;