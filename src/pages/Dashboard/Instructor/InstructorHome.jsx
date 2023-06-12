// import React from 'react';

import useAuth from "../../../hooks/useAuth";

const InstructorHome = () => {
    const {user}=useAuth();
    return (
        <div>
            <h1 className="text-center text-5xl">Welcome <span className="text-[#e2136e]">{user?.displayName}</span>!!</h1>
        </div>
    );
};

export default InstructorHome;