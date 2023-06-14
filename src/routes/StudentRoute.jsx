import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import { RingLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()
    if (loading) {
        return <div className="flex justify-center"><RingLoader color="#e2136e" className='text-center my-24' /></div>
    }

    if (user && !isInstructor && !isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;