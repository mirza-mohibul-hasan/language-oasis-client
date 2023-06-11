import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    const navItems = <>
        <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:border'>Home</NavLink>
        <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:border'>Instructors</NavLink>
        <NavLink to='/' className='font-bold mx-5 my-2 md:my-0 hover:border'>Classes</NavLink>
    </>
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
                    user? <>
                        <NavLink to='/dashboard' className='font-bold mx-5 my-2 md:my-0 hover:border'>Dashboard</NavLink>
                        <p>User Profile </p>
                    </>:
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default NavigationBar;