// import React from 'react';

import { Link, Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer.jsx/Footer";
import { FaHome, FaRegAddressBook, FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const isStudent = (isAdmin ==true || isInstructor == true)?false: true;
    return (
        <div className="bg-white">
            <NavigationBar></NavigationBar>
            <div className="flex lg:px-10 py-10">
                {
                    isStudent && <div className="w-1/5 space-y-2">
                        <Link to='/dashboard/studenthome'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        </Link>
                        <Link to='/dashboard/selectedclass'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><SiGoogleclassroom></SiGoogleclassroom> My Selected Class</button>
                        </Link>
                        <Link to='/dashboard/enrolledclass'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaRegCalendarCheck></FaRegCalendarCheck> My Enrolled Class</button>
                        </Link>
                    </div>
                }
                {
                    isInstructor &&
                    <div className="w-1/5 space-y-2">
                        <Link to='/dashboard/instructorhome'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        </Link>
                        <Link to='/dashboard/myclasses'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><SiGoogleclassroom></SiGoogleclassroom>My Classes</button>
                        </Link >
                        <Link to='/dashboard/addaclass'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><MdAssignmentAdd></MdAssignmentAdd> Add A Class</button>
                        </Link>
                    </div>
                }
                {
                    isAdmin &&
                    <div className="w-1/5 space-y-5">
                        <Link to='/dashboard/adminhome'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaHome></FaHome>Home</button>
                        </Link>
                        <Link to='/dashboard/allclasses'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaRegAddressBook></FaRegAddressBook>All Classes</button>
                        </Link>
                        <Link to='/dashboard/manageusers'>
                            <button className="btn bg-[#e2136e] w-full text-white hover:bg-gray-500"><FaUsers></FaUsers>Manage Users</button>
                        </Link>
                    </div>
                }
                <div className="w-4/5">
                    <Outlet></Outlet>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Dashboard;