import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errormsg, setErrormsg] = useState('');
    const onSubmit = data => {
        if (data.password != confirmPassword) {
            return alert("Password not matched")
        }
        // console.log(data)
        // Register With Emaill pass function
        createUser(data.email, data.password)
            .then(result => {
                // console.log(result)
                updateUserProfile(result.user, data.name, data.photo)
                logOut()
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photo }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    alert("Successfully registered")
                                    navigate('/login');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                if ((error.message).includes('email-already-in-use')) {
                    setErrormsg("Already Registered")
                }
                else {
                    setErrormsg(error.message)
                }
            })
    };
    const handleConfim = (e) => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword)
    }
    return (
        <div>
            
            <div className='flex justify-center items-center md:my-50'>
                <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-2' style={{ border: '2px solid #e2136e' }}>
                    <h2 className='text-2xl font-bold text-center text-gray-700'>Register here</h2>
                    {
                        (errormsg.length > 2) && <p className='text-center border border-[#e2136e] text-[#e2136e] text-sm my-1 font-semibold rounded-md'>{errormsg}</p>
                    }
                    <SocialLogin></SocialLogin>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name")} name="name" placeholder="ex: Mohibul Refat" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required  {...register("email")} name="email" placeholder="ex: mirza@mohibul.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required  {...register("password", {
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} placeholder="Your password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input onChange={handleConfim} type="password" required placeholder="Confirm Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photo")} placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-[#e2136e] text-white font-semibold rounded py-1" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <h4 className='my-3 text-sm text-gray-500 font-semibold text-center'>Already registered? <Link to='/login' className='text-[#e2136e]'>Log in</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default SignUp;