// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer.jsx/Footer";

const Main = () => {
    return (
        <div className="">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;