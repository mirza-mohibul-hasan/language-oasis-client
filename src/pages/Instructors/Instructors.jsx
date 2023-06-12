// import React from 'react';

import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-7">Our Instructors</h1>
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
                {
                    instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;