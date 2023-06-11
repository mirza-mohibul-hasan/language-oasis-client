import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = data => {
        if(data.password != confirmPassword){
           return alert("Password not matched")
        }


        navigate('/')
    };
    const handleConfim = (e)=>{
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword)
    }
    return (
        <div>
            <div className='flex justify-center items-center md:my-50'>
                <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-2' style={{ border: '2px solid #e2136e' }}>
                    <h2 className='text-2xl font-bold text-center text-gray-700'>Register here</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name")} name="name" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required  {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required  {...register("password", {
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} placeholder="password" className="input input-bordered" />
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
                            <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
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