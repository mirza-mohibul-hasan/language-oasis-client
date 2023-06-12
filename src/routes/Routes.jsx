import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../layout/DashBoard";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Login from "../pages/Authentication/Login/Login";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllClasses from "../pages/Dashboard/Admin/AllClasses";
import Classes from "../pages/Classes/Classes";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import Instructors from "../pages/Instructors/Instructors";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'studenthome',
                element: <StudentHome></StudentHome>
            },
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolledclass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'instructorhome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/payment/${params.id}`)
            }
        ]
    },
]);
export default router;