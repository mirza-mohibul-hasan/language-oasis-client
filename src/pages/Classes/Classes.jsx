// import React from 'react';

import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import useTitle from "../../hooks/useTitle";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    useTitle('Classes')
    return (
        <div className="dark:bg-slate-800 pb-10">
            <div className="py-5 space-y-3">
                <h1 className="text-5xl md:text-7xl text-center font-semibold  text-gray-950 dark:text-white">Here are our <span className="text-[#e2136e]">Classes</span></h1>
                <p className="text-2xl md:text-3xl text-center font-semibold dark:text-gray-400">Choose from over 1200 classes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5 md:w-10/12 mx-auto">
                {
                    classes.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;