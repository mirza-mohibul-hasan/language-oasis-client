import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../layout/DashBoard";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader:()=> fetch('classes.json')
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