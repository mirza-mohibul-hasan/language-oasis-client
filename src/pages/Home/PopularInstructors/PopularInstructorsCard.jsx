// import React from 'react';

const PopularInstructorsCard = ({ instructor }) => {
    const { photo, name, email } = instructor;
    return (
        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-md dark:bg-slate-700">
            <img src={photo} alt="Instructor" className="w-full h-72 p-2 rounded-xl" />
            <div className="card-body items-center text-center -mt-3 dark:text-white">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className="text-md">Contact: {email}</p>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;