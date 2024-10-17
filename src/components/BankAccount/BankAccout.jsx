import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const BankAccout = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="pt-24 ml-12">
                <NavLink to="/profile" >
                    <IoIosArrowBack className="text-3xl text-[#2B416A]" />
                </NavLink>
            </div>

            <div className="px-28">
                <h1 className="text-[#00AEEF] text-xl font-bold">Bank Account</h1>
                <div className="mt-7">
                    <h2 className="text-[#2B416A] font-bold">Account Name</h2>
                    <p className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl ">**********</p>
                </div>
                <div className="mt-7">
                    <h2 className="text-[#2B416A] font-bold">BSB</h2>
                    <p className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl ">**********</p>
                </div>
                <div className="mt-7">
                    <h2 className="text-[#2B416A] font-bold">Account Number</h2>
                    <p className="bg-[#EFF1F3] mt-3 py-4 pl-12 rounded-3xl ">**********</p>
                </div>
                <button className="btn w-full mb-[140px] mt-16 rounded-[50px] bg-[#00AEEF] border-none text-white">Save</button>
            </div>
        </div>
    );
};

export default BankAccout;