import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const SubmitTime = () => {
    return (
        <div className="bg-white ">
            <div className="pt-24 mx-12  flex justify-between">
                <NavLink to="/timeUpdate">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
            </div>
            {/* body section */}
            <div className="px-28">
                <h1 className="font-bold text-[#00AEEF] text-xl" >Submit Your Time</h1>
                <p className="my-6 text-xs">Business Details</p>
                {/* input section */}
                <div>
                    <div>
                        <h3 className="text-[#2B416A] font-bold mb-3">Date</h3>
                        <input type="text" placeholder="Enter Date" className="input input-bordered w-full bg-[#EFF1F3]" />
                        <p className="text-[#FF0000] text-xs mt-1">cannot submit time for future days</p>
                    </div>

                    <div className="grid grid-cols-2 mt-4 gap-x-4">
                        <div>
                            <h3 className="text-[#2B416A] font-bold mb-3">Start</h3>
                            <input type="text" placeholder="00:00" className="input input-bordered w-full bg-[#EFF1F3]" />
                        </div>
                        <div>
                            <h3 className="text-[#2B416A] font-bold mb-3">End</h3>
                            <input type="text" placeholder="00:00" className="input input-bordered w-full bg-[#EFF1F3]" />
                        </div>
                        <p className="text-[#FF0000] text-xs mt-1">end time cannot be before start time</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-[#2B416A] font-bold mb-3">Paid Lunch Break </h3>
                        <input type="text" placeholder="00:00" className="input input-bordered w-full bg-[#EFF1F3]" />
                        <p className="text-xs mt-3">e.g. 0.5 hour</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-[#2B416A] font-bold mb-3">Unpaid Lunch Break</h3>
                        <input type="text" placeholder="00:00" className="input input-bordered w-full bg-[#EFF1F3]" />
                        <p className="text-xs mt-3">e.g. 0.5 hour</p>
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <IoIosAddCircleOutline className="text-2xl" />
                    <p className="text-xs">Add Another Day</p>
                </div>


                <div className=" grid grid-cols-2 gap-x-4 pb-16">
                    <NavLink to="/successSubmit">
                        <button className="btn w-full mt-3 bg-[#00AEEF] border-none text-white rounded-[50px]  shadow-lg">Upload Invoice</button>
                    </NavLink>
                    <NavLink to="/submitTime">
                        <button className="btn w-full mt-3 bg-[#00AEEF] border-none text-white rounded-[50px]  shadow-lg">Save</button>
                    </NavLink>
                    <p className="text-[#FF0000] text-xs mt-1">Some Fields Are Missing</p>

                </div>





            </div>
        </div>
    );
};

export default SubmitTime;