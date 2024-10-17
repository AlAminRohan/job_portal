import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TimeUpdate = () => {
    return (
        <div className="bg-white ">
            <div className="pt-24 mx-12  flex justify-between">
                <NavLink to="/question">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
            </div>
            {/* body section */}
            <div className="px-28">
                <h1 className="font-bold text-[#00AEEF] text-xl" >Please indicate your availability for the following sessions</h1>


                <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                        <div className="flex justify-between items-center ">
                            <div >
                                <h2 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h2>
                                <p className="text-xs">Suburb: Belmore</p>
                                <p className="text-xs">Dates Needed: 01/04/2024 - 02/04/2024</p>
                                <p className="text-xs">123 Chapel Street, Belmore 2017</p>
                            </div>
                            <p className="text-xs ">  Post Code: 2017</p>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-[#2B416A] font-bold mb-7">Dates Needed</h2>
                        <div className="flex justify-between items-center border rounded-2xl px-7 py-2">
                            <div className="text-xs">
                                <p>01 | 04 | 2024</p>
                                <p>9AM - 5PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] mb-3">available</p>
                                <input type="checkbox"  className="checkbox checkbox-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center border rounded-2xl px-7 py-2 mt-3">
                            <div className="text-xs">
                                <p>01 | 04 | 2024</p>
                                <p>9AM - 5PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] mb-3">available</p>
                                <input type="checkbox" className="checkbox checkbox-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center border rounded-2xl px-7 py-2 mt-3">
                            <div className="text-xs">
                                <p>01 | 04 | 2024</p>
                                <p>9AM - 5PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] mb-3">available</p>
                                <input type="checkbox" className="checkbox checkbox-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center border rounded-2xl px-7 py-2 mt-3">
                            <div className="text-xs">
                                <p>01 | 04 | 2024</p>
                                <p>9AM - 5PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] mb-3">available</p>
                                <input type="checkbox"  className="checkbox checkbox-lg" />
                            </div>
                        </div>

                        <NavLink to="/submitTime">
                        <button className="btn w-full mt-6 bg-[#00AEEF] border-none text-white rounded-[50px]">Save</button>
                        </NavLink>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default TimeUpdate;