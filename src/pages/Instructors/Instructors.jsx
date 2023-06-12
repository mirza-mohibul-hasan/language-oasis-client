// import React from 'react';

import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
            {
                instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;