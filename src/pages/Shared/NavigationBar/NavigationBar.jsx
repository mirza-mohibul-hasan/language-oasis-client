import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
const NavigationBar = () => {
    const { logOut, user } = useContext(AuthContext)

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const isStudent = (isAdmin || isInstructor) ? false : true;

    const navItems = <>
        <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:border'>Home</NavLink>
        <NavLink to='/instructors' className='font-bold mx-5 my-2 md:my-0 hover:border'>Instructors</NavLink>
        <NavLink to='/classes' className='font-bold mx-5 my-2 md:my-0 hover:border'>Classes</NavLink>
        {
            (user && isAdmin) && <NavLink to='/dashboard/adminhome' className='font-bold mx-5 my-2 md:my-0 hover:border'>Dashboard</NavLink>
        }
        {
            (user && isInstructor) && <NavLink to='/dashboard/instructorhome' className='font-bold mx-5 my-2 md:my-0 hover:border'>Dashboard</NavLink>
        }
        {
            (user && isStudent) && <NavLink to='/dashboard/studenthome' className='font-bold mx-5 my-2 md:my-0 hover:border'>Dashboard</NavLink>
        }
    </>
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-[#e2136e] text-[#f3f3f3] lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <GoThreeBars className="text-3xl"></GoThreeBars>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-2xl">Language Oasis</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img src={user?.photoURL} className='w-8 rounded-3xl' alt="" />
                }
                {

                    user ? <button onClick={handleLogOut} className='py-1 px-2 mx-1 rounded hover:bg-[#af2963] font-semibold md:my-0 text-white border'>Log out</button> :
                        <Link to='/login'><button className='py-1 px-2 mx-1 rounded hover:bg-[#af2963] font-semibold md:my-0 text-white border'>Log in</button></Link>
                }
            </div>
        </div>
    );
};

export default NavigationBar;