import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";


const Question = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="pt-24 mx-12  flex justify-between">
                <NavLink to="/jobs">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
            </div>

            <div className="px-28">

                <div className="mt-5">
                    <div>
                        <h2 className="text-[#00AEEF] font-bold ">What Pharmacy Software Have You Used?</h2>
                        <textarea
                            placeholder="Enter Your Answer"
                            className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[#00AEEF] font-bold">What Pharmacy Software Have You Used?</h2>
                        <textarea
                            placeholder="Enter Your Answer"
                            className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[#00AEEF] font-bold">What Pharmacy Software Have You Used?</h2>
                        <textarea
                            placeholder="Enter Your Answer"
                            className="textarea  bg-[#EFF1F3] w-full h-32 mt-3"></textarea>
                    </div>


                    <div className="pb-3">
                        <NavLink to="/timeUpdate" className="btn bg-[#00AEEF] w-full mt-3 border-none text-white rounded-[50px]">Save</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;