import { NavLink } from "react-router-dom";


const Reject = () => {
    return (
        <div className="bg-[#00AEEF] rounded-3xl">
            <div className="flex justify-end mb-3">
                <img src="https://i.ibb.co.com/nmLV952/Group.png" className="w-[200px]" alt="" />
            </div>
            <div className="text-center mt-20">
                <h1 className="text-[#EFF1F3] text-3xl font-bold">Are you sure you want to Reject the offer</h1>
                <p className=" text-white text-lg mt-6 ">Monday, 19 Jun 2023.</p>
                <p className="text-white">9 AM - 5 PM</p>
            </div>


            <div className="px-28 ">
                <NavLink to="/rejectMsg">

                <button className="btn w-full mt-3 bg-white border-none rounded-3xl text-[#00AEEF] ">Reject</button>
                </NavLink>
                
                
            </div>

            


            <div>
                <img src="https://i.ibb.co.com/nmLV952/Group.png" alt="" className="w-[100px] mt-36" />
            </div>
        </div>
    );
};

export default Reject;