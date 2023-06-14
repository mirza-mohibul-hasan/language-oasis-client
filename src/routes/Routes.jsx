import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
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
import MyPayments from "../pages/Dashboard/Student/MyPayments";
import Dashboard from "../layout/Dashboard";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

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
            // Admin Routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'allclasses',
                element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
            },
            // Student Routes
            {
                path: 'studenthome',
                element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
            },
            {
                path: 'selectedclass',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: 'enrolledclass',
                element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
            },
            {
                path: 'paymenthistory',
                element: <StudentRoute><MyPayments></MyPayments></StudentRoute>
            },
            // Instructor Routes
            {
                path: 'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
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