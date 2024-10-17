import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Security = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="pt-24 ml-12">
                <NavLink to="/profile" >
                    <IoIosArrowBack className="text-3xl text-[#2B416A]" />
                </NavLink>
            </div>

            <div className="px-28">
                <h1 className="text-[#00AEEF] text-xl font-bold">Security</h1>
                <div className="mt-7">
                    <h2 className="text-[#2B416A] font-bold">Email</h2>
                    <p className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl ">erbertcalcord@email.com</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-[#2B416A] font-bold">Password</h2>
                    <p className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl ">**********</p>
                </div>

                {/* change pass */}
                <div className="mt-6">
                    <h1 className="text-[#00AEEF] text-2xl font-bold">Change Password</h1>
                <div className="mt-3">
                    <h2 className="text-[#2B416A] font-bold">New Password</h2>
                    <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />
                </div>
                <div className="mt-3">
                    <h2 className="text-[#2B416A] font-bold">Retype New Password</h2>
                    <input className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl w-full border-none" placeholder="Enter Password" />
                    
                </div>
                </div>
                
                <button className="btn w-full mb-10 mt-9 rounded-[50px] bg-[#00AEEF] border-none text-white">Save</button>
            </div>
        </div>
    );
};

export default Security;