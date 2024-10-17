import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const Jobs = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="pt-24 mx-12  flex justify-between">
                <NavLink to="/profile">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
                <FaRegBookmark className="text-3xl text-[#2B416A] " />
            </div>

            <div className="px-28">
                <div className="mt-3">
                    <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2 mr-3" >Badge</span>
                    <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2 mr-3" >New</span>
                    <span className="badge bg-[#EFF1F3] border-none text-[#989898] p-2" > Top Employer</span>
                </div>
                <div className="mt-12">
                    <h1 className="text-[#00AEEF]  text-xl font-bold">Experienced LocumPharmacist</h1>
                    <div className="flex justify-between items-center mt-4">
                        <p>Pharmacy</p>
                        <div className="flex text-[#2B416A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                    <p className="text-[#2B416A] text-xs font-bold mt-3">03 May 2024 - 10 May 2024</p>
                    <p className="text-[#2B416A] text-xs font-bold mt-3">11 Sample Street, Kingsgrove 2217</p>


                    {/* job deiscription */}
                    <div className="mt-5">
                        <h1 className="font-bold text-[#00AEEF]">Job Summary</h1>
                        <p className="text-xs">Our pharmacy is in search of a dedicated Locum Pharmacist to cover a week-long absence. Responsibilities include overseeing prescription management, performing medication reviews for safety and efficacy, and upholding our standard of customer care. This role requires a pharmacist who can efficiently work independently while being an integral part of our health care team.</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-[#00AEEF]">Key Responsibilities</h1>
                        <div>
                            <ul className="list-disc grid grid-cols-2 text-xs pl-4">
                                <li>Management of prescription orders to ensure timely dispensing.</li>
                                <li>Conduct comprehensive medication reviews to identify drug interactions or contraindications </li>
                                <li>Maintain an exceptional level of customer service, including patient counseling and advice.</li>
                                <li>Work autonomously within a busy environment, ensuring operational efficiency.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-[#00AEEF]">Requirements</h1>
                        <div>
                            <ul className="list-disc grid grid-cols-2 text-xs pl-4">
                                <li>Management of prescription orders to ensure timely dispensing.</li>
                                <li>Conduct comprehensive medication reviews to identify drug interactions or contraindications </li>
                                <li>Maintain an exceptional level of customer service, including patient counseling and advice.</li>
                                <li>Work autonomously within a busy environment, ensuring operational efficiency.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pb-[110px]">
                        <NavLink to="/question" className="btn bg-[#00AEEF] w-full mt-12 border-none text-white rounded-[50px]">Apply Now</NavLink>
                    </div>







                </div>
            </div>
        </div>
    );
};

export default Jobs;