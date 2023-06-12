// import React from 'react';

import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    instructors.slice(0, 6)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-7">Our Popular Instructors</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
                    {
                        instructors.map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;