// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer.jsx/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="bg-white">
            <ToastContainer />
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;