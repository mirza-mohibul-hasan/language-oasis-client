import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div className='flex justify-center items-center md:my-50'>
                <div className='p-5 m-5 md:w-3/12 rounded-2xl space-y-2' style={{ border: '2px solid #e2136e' }}>
                    <h2 className='text-2xl font-bold text-center text-gray-700'>Register here</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
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
                            <input type={passwordShown ? "text" : "password"} required  {...register("password")} placeholder="password" className="input input-bordered" />
                            <i onClick={togglePasswordVisiblity}>{passwordShown ? "Hide" : "Show"} Password</i>
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-[#e2136e] text-white font-semibold rounded py-1" type="submit" value="Login" />
                        </div>
                    </form>
                    <h4 className='my-3 text-sm text-gray-500 font-semibold text-center'>Do not have account? <Link to='/signup' className='text-[#e2136e]'>Sign Up</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;