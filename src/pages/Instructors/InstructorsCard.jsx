// import React from 'react';

const InstructorsCard = ({instructor}) => {
    const {photo, name, email} = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-[#e2136e]">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Instructor" className="w- full h-72 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default InstructorsCard;