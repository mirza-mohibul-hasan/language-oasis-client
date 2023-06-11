// import React from 'react';

import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 gap-5">
            {
                instructors.map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
            }
        </div>
    );
};

export default PopularInstructors;