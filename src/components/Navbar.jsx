import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import Logo from '../assets/icons8-compass-100.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/profile'><span className="text-[#FFF9EB] bg-[#43aae2] py-2 px-4 rounded-[5px] ">My Profile</span> </NavLink>
    </>

    return (
        <div className="bg-[#FFF9EB]">
            <div className="navbar flex justify-around items-center py-8">
                <div className="flex justify-center items-center ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="md:h-9 md:w-9 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-5 py-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="md:h-14 md:w-14 h-9 w-9 object-cover" src={Logo} alt="" />
                        <h1 className="md:text-3xl text-center md:text-start font-semibold text-[#4DC879]">CAREER <span className="text-[#f44848]">COUNSELING</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-7 text-xl ">
                        {links}
                    </ul>
                </div>
                <div className="">
                <div className="flex justify-center items-center md:gap-4 gap-1">
                    {
                        user && user?.email ? <div><img className="md:w-14 md:h-14 w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt="" /></div>
                            : <img className="md:w-14 md:h-14 w-10 h-10 rounded-full object-cover" src={userIcon} alt="" />
                    }

                    {
                        user && user?.email ? <button onClick={logOut} className="btn bg-[#4DC879] text-[#FFF9EB] md:px-8 px-2 py2 md:py-6 md:text-[20px]">LogOut</button> : <NavLink to='/auth/login' className="btn bg-[#4DC879] text-[#FFF9EB] md:px-8 px-2 py2 md:py-6 md:text-[20px]">Login</NavLink>
                    }
                
                </div>
                </div>
            </div>
            {
               user?.email && <h1 className="text-center text-xl pb-5 "> Welcome Ore Website Dear <span className="text-3xl text-[#4DC879]">{user?.displayName}</span>🥰</h1> 
            } 
            {/* optional */}
            {/* <div className="flex justify-around items-center py-8 bg-[#FFF9EB]">
                <div className="flex justify-center items-center">
                    <img className="h-14 w-14 object-cover" src={Logo} alt="" />
                    <h1 className="text-3xl font-semibold text-[#4DC879]">CAREER <span className="text-[#f44848]">COUNSELING</span></h1>
                </div>
                <div className="flex gap-7 text-xl">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/profile'><span className="text-[#FFF9EB] bg-[#43aae2] py-2 px-4 rounded-[5px] ">My Profile</span> </NavLink>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {
                        user && user?.email ? <div><img className="w-14 h-14 rounded-full object-cover" src={user?.photoURL} alt="" /></div>
                            : <img className="w-14 h-14 rounded-full object-cover" src={userIcon} alt="" />
                    }

                    {
                        user && user?.email ? <button onClick={logOut} className="btn bg-[#4DC879] text-[#FFF9EB] px-8 py-6 text-[20px]">LogOut</button> : <NavLink to='/auth/login' className="btn bg-[#4DC879] text-[#FFF9EB] px-8 py-6 text-[20px]">Login</NavLink>
                    }

                </div>
            </div>
            {
               user?.email && <h1 className="text-center text-xl pb-5"> Welcome Ore Website Dear <span className="text-3xl text-[#4DC879]">{user?.displayName}</span>🥰</h1> 
            } */}
        </div>
    );
};

export default Navbar;