import { NavLink } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";


const JobOffer = () => {
    return (
        <div className="bg-[#00AEEF] rounded-3xl">
            <div className="flex justify-end mb-3">
                <img src="https://i.ibb.co.com/nmLV952/Group.png" className="w-[200px]" alt="" />
            </div>
            <div className="text-center">
                <h1 className="text-[#EFF1F3] text-3xl font-bold">Business has offered you the following days</h1>
                <p className=" text-white text-lg mt-6 ">Monday, 19 Jun 2023.</p>
                <p className="text-white">9 AM - 5 PM</p>
            </div>


            <div className="px-28 ">
                <NavLink to="/accept">
                <button className="btn w-full mt-3 bg-white border-none rounded-3xl text-[#00AEEF] ">Accept</button>
                </NavLink>


                <NavLink to="/reject">
                <button className="btn w-full mt-3 bg-white border-none rounded-3xl text-[#00AEEF] ">Reject</button>
                </NavLink>
            </div>

            <div className="flex justify-center items-center mt-3 gap-x-2 text-white">
                <MdInfoOutline />
                <p>not accepting the offer within 24HR will be automatically declined.</p>
            </div>


            <div>
                <img src="https://i.ibb.co.com/nmLV952/Group.png" alt="" className="w-[100px] mt-28" />
            </div>
        </div>
    );
};

export default JobOffer;