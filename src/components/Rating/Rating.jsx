import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Rating = () => {
    return (
        <div className="bg-white ">
            <div className="pt-24 mx-12  flex justify-between">
                <NavLink to="/profile">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
            </div>
            {/* body section */}
            <div className="px-28">


                <div className=" grid grid-cols-2 gap-3">
                    {/* rating */}
                    <div>
                        <h1 className="font-bold text-[#00AEEF] text-xl" >Review</h1>
                        <div className="flex items-center gap-x-11 mt-7">
                            <p>5</p>
                            <progress className="progress progress-info w-ful" value="70" max="100"></progress>
                        </div>
                        <div className="flex items-center gap-x-11 mt-7">
                            <p>4</p>
                            <progress className="progress progress-info w-ful" value="60" max="100"></progress>
                        </div>
                        <div className="flex items-center gap-x-11 mt-7">
                            <p>3</p>
                            <progress className="progress progress-info w-ful" value="80" max="100"></progress>
                        </div>
                        <div className="flex items-center gap-x-11 mt-7">
                            <p>2</p>
                            <progress className="progress progress-info w-ful" value="50" max="100"></progress>
                        </div>
                        <div className="flex items-center gap-x-11 mt-7">
                            <p>1</p>
                            <progress className="progress progress-info w-ful" value="90" max="100"></progress>
                        </div>
                        {/* badge */}
                        <div className="mt-12 ">
                            <div className="badge bg-[#F8F8F8] border-none text-[#969696] text-xs mr-5">Communication</div>
                            <div className="badge bg-[#F8F8F8] border-none text-[#969696] text-xs mr-5">Work Environment</div>
                            <div className="badge bg-[#F8F8F8] border-none text-[#969696] text-xs mr-5">Support</div>
                            <div className="badge bg-[#F8F8F8] border-none text-[#969696] text-xs">Available facilities</div>

                        </div>
                    </div>

                    {/* work */}
                    <div className="space-y-4 mb-6">
                        <div className="border px-5 py-6 rounded-2xl">
                            <div className="flex justify-between">
                                <h3 className="text-[#2C426A] font-bold">Locum</h3>
                                <div className="flex text-[#2B416A]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                            </div>
                            <p className="text-xs mt-5">ACCEPT</p>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus dapibus arcu sit amet egestas</p>
                        </div>
                        <div className="border px-5 py-6 rounded-2xl">
                            <div className="flex justify-between">
                                <h3 className="text-[#2C426A] font-bold">Locum</h3>
                                <div className="flex text-[#2B416A]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                            </div>
                            <p className="text-xs mt-5">ACCEPT</p>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus dapibus arcu sit amet egestas</p>
                        </div>
                        <div className="border px-5 py-6 rounded-2xl">
                            <div className="flex justify-between">
                                <h3 className="text-[#2C426A] font-bold">Locum</h3>
                                <div className="flex text-[#2B416A]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                            </div>
                            <p className="text-xs mt-5">ACCEPT</p>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus dapibus arcu sit amet egestas</p>
                        </div>
                        <div className="border px-5 py-6  rounded-2xl">
                            <div className="flex justify-between">
                                <h3 className="text-[#2C426A] font-bold">Locum</h3>
                                <div className="flex text-[#2B416A]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                            </div>
                            <p className="text-xs mt-5">ACCEPT</p>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus dapibus arcu sit amet egestas</p>
                        </div>

                    </div>




                </div>


            </div>
        </div>
    );
};

export default Rating;