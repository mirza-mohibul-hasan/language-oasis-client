// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer.jsx/Footer";

const Dashboard = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="flex">
                <div className="w-1/5">
                    SideNav
                </div>
                <div className="w-4/5">
                    Content
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;