// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer.jsx/Footer";
import { FaHome, FaRegAddressBook, FaRegCalendarCheck,FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";

const Dashboard = () => {
    const isStudent = false;
    const isAdmin = true;
    const isInstructor = false;
    return (
        <div className="bg-white">
            <NavigationBar></NavigationBar>
            {
                isStudent && <div className="flex lg:px-10 py-10">
                    <div className="w-1/5 space-y-2">
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><SiGoogleclassroom></SiGoogleclassroom> My Selected Class</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaRegCalendarCheck></FaRegCalendarCheck> My Enrolled Class</button>
                    </div>
                    <div className="w-4/5">
                        <Outlet></Outlet>
                    </div>
                </div>
            }
            {
                isInstructor && <div className="flex lg:px-10 py-10">
                    <div className="w-1/5 space-y-2">
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><SiGoogleclassroom></SiGoogleclassroom>My Class</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><MdAssignmentAdd></MdAssignmentAdd> Add A Class</button>
                    </div>
                    <div className="w-4/5">
                        <Outlet></Outlet>
                    </div>
                </div>
            }
            {
                isAdmin && <div className="flex lg:px-10 py-10">
                    <div className="w-1/5 space-y-2">
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaRegAddressBook></FaRegAddressBook>All Classes</button>
                        <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaUsers></FaUsers>Manage Users</button>
                    </div>
                    <div className="w-4/5">
                        <Outlet></Outlet>
                    </div>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;