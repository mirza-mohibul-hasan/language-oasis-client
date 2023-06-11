import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../layout/DashBoard";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Login from "../pages/Authentication/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>,
            },
            {
                path: '/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        // children: [
        //     {
        //         path: '/',
        //         element:<Home></Home>,
        //         loader:()=> fetch('classes.json')
        //     }
        // ]
    },
]);
export default router;