// import React from 'react';

const PopularInstructorsCard = ({instructor}) => {
    const {instructorImage, instructorName, instructorEmail} = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-[#e2136e]">
            <figure className="px-10 pt-10">
                <img src={instructorImage} alt="Instructor" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructorName}</h2>
                <p>Email: {instructorEmail}</p>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;