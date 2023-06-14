// import React from 'react';

import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
    useTitle('Instructors')
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="dark:bg-slate-800 -mb-5 pb-10">
            <div className="py-5 space-y-3">
                <h1 className="text-5xl md:text-7xl text-center font-semibold  text-gray-950 dark:text-white">Here are our <span className="text-[#e2136e]">Instructors</span></h1>
                <p className="text-2xl md:text-3xl text-center font-semibold dark:text-gray-400">Choose from over 100 instructors</p>
            </div>
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5 md:w-10/12 mx-auto">
                {
                    instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;