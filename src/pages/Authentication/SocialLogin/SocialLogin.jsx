// import React from 'react';
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Login Successful.`,
                            showConfirmButton: false,
                            timer: 800
                        })
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className='flex justify-around mt-2'>
            <button onClick={handleGoogleSignIn} className='border p-2 rounded  hover:bg-[#0f3452] flex items-center justify-center gap-1 bg-[#e2136e] w-full'>
                <FaGoogle className='text-white text-center'></FaGoogle>
                <span className='font-semibold text-white'>Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;