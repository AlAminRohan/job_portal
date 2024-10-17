import { MdOutlineAccountCircle } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoWalletOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";

const Profile = () => {
    return (
        <div className="bg-[#00AEEF] rounded-t-3xl">
            <div className="flex justify-end">
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className=" w-52" alt="" />
            </div>

            {/* body section */}
            <div className=" rounded-t-3xl bg-white  ">
                <div className="flex justify-center ">
                    <MdOutlineAccountCircle className="text-8xl m-[-50px] bg-[#2B416A] rounded-full shadow-lg" />

                </div>
                <h2 className="text-center pt-11 text-[#2B416A] font-bold text-xl">Eebert</h2>
                {/* body containtent */}
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="ml-28 mt-5">
                        <h1 className="font-bold text-[#00AEEF] mb-5">Profile</h1>
                        <div className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                            <div className="flex items-center">
                                <VscAccount className="text-3xl text-[#01ABE9]" />
                                <h2 className="font-bold ml-12 text-[#1D2027]">Account</h2>
                            </div>
                            <p>Your account details</p>
                        </div>

                        {/* bank  */}
                        <h1 className="font-bold text-[#00AEEF] mb-5 mt-5">Payment</h1>
                        <NavLink to="/bankAccount" className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14  ">
                            <div className="flex items-center">

                                <IoWalletOutline className="text-3xl text-[#01ABE9]" />
                                <h2 className="font-bold ml-12 text-[#1D2027]">Bank Details</h2>
                            </div>
                            <p>Your account details</p>
                        </NavLink>
                        <button className="btn w-full bg-[#00AEEF] text-white border-none rounded-[50px] mt-5" >Logout</button>

                    </div>

                    {/* general option */}
                    <div className="mt-5 mr-28">
                        <h1 className="font-bold text-[#00AEEF]">General</h1>
                        <div className="mt-5">
                            <NavLink to="/jobHistory" className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                                <div className="flex items-center">

                                    <RiMenu2Fill  className="text-3xl text-[#01ABE9]" />
                                    <h2 className="font-bold ml-12 text-[#1D2027]">Job History</h2>
                                </div>
                                <p>Your account details</p>
                            </NavLink>
                        </div>
                        <div className="mt-5">
                            <NavLink to="/rating" className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                                <div className="flex items-center">

                                    <CiStar  className="text-3xl text-[#01ABE9]" />
                                    <h2 className="font-bold ml-12 text-[#1D2027]">My Rating</h2>
                                </div>
                                <p>Your account details</p>
                            </NavLink>
                        </div>


                        <div className="mt-5">
                            <NavLink to="/security" className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                                <div className="flex items-center">

                                    <IoShieldOutline  className="text-3xl text-[#01ABE9]" />
                                    <h2 className="font-bold ml-12 text-[#1D2027]">Security</h2>
                                </div>
                                <p>Your account details</p>
                            </NavLink>
                        </div>
                        <div className="mt-5">
                            <NavLink className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                                <div className="flex items-center">

                                    <CiLock  className="text-3xl text-[#01ABE9]" />
                                    <h2 className="font-bold ml-12 text-[#1D2027]">Privacy Policy</h2>
                                </div>
                                <p>Your account details</p>
                            </NavLink>
                        </div>
                        <div className="mt-5 mb-11">
                            <NavLink to="/jobs" className="flex justify-between rounded-3xl bg-[#EFF1F3] py-4 px-14 ">
                                <div className="flex items-center">

                                    <BiMessageSquareDetail  className="text-3xl text-[#01ABE9]" />
                                    <h2 className="font-bold ml-12   text-[#1D2027]">Help</h2>
                                </div>
                                <p>Your account details</p>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;