import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";


const PrivateProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="flex justify-center items-center py-10 mx-4 md:mx-0">
               <div className="w-[450px] py-5 rounded-2xl bg-[#FFF9EB] space-y-4 justify-center items-center text-center">
                    <h1 className="text-4xl py-2">HI Dear <span className="text-5xl text-[#4DC879]">{user?.displayName} </span>!</h1>
                    <img className="h-56 w-56 object-cover mx-auto rounded-4xl" src={user?.photoURL} alt="" />
                    <p className="text-2xl">MY NAME : {user?.displayName}</p>
                    <p className=" text-xl bg-[]">Email : {user?.email}</p>
                    <NavLink to='/update' className="btn px-16 py-6 text-xl text-[#FFF9EB] bg-[#4DC879]">Update Profile</NavLink>
               </div>
            </div>
        </div>
    );
};

export default PrivateProfile;