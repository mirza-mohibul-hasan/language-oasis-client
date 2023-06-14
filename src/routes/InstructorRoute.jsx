import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isInstructor, isInstructorLoading] = useInstructor()

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center"><RingLoader color="#e2136e" className='text-center my-24' /></div>
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;