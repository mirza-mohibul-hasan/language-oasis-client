import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const NavigationBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);


    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const isStudent = (isAdmin == true || isInstructor == true) ? false : true;

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
        <div className="dark:bg-slate-700 rounded">
            <button
                className="p-1 rounded bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                onClick={toggleTheme}
            >
                {theme === 'light' ? <CiLight></CiLight> : <MdDarkMode></MdDarkMode>}
            </button>
        </div>
    </>
    const handleLogOut = () => {
        logOut();
        navigate('/')
    }
    return (
        <div className="navbar bg-[#e2136e] text-[#f3f3f3] lg:px-10 dark:text-gray-100 dark:bg-slate-900">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <GoThreeBars className="text-3xl"></GoThreeBars>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-slate-900 rounded-box w-52 text-gray-950 dark:text-white">
                        {navItems}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case md:text-2xl">Language Oasis</p>

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