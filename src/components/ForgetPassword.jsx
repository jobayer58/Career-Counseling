import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
    const [showPassword ,setShowPassword] = useState(false)
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="text-center py-4">
                <h1 className="text-[#f44848]">Did You Forget Your Password?</h1>
                <h1 className="text-2xl">Don't Worry! You Can Fix Your <span className="text-[#4DC879]">Password</span></h1>
            </div>
            <div className="flex justify-center items-center py-8 ">
                <div className="card bg-base-100 w-96  max-w-lg shrink-0 shadow-2xl">
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Reset Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Reset Password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className=' text-xl absolute right-2 top-8'>
                                {
                                    showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                }

                            </button>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#4DC879]">Update Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;