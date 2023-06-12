// import React from 'react';

import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // console.log(classes)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-7">Our Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
                {
                    classes.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;