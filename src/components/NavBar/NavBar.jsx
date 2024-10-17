import { IoHomeOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-white justify-center border-t-2">
            



            <div className="  lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-x-4 ">
                    <li><NavLink to="/notification"  className="text-4xl bg-white"><LuBellDot /></NavLink></li>
                    <li><NavLink to="/appoirment" className="text-4xl"><FaCalendarDays /></NavLink></li>
                    <li><NavLink to="/" className="text-4xl">< IoHomeOutline /></NavLink></li>
                    <li><NavLink to="/message" className="text-4xl"><RiMessage3Fill /></NavLink></li>
                    <li><NavLink to="/profile" className="text-4xl"><CgProfile /></NavLink></li>
                </ul>
            </div>
            
        </div>
    );
};

export default NavBar;