import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const Search = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="pt-24 ml-12 ">
                <NavLink to="/profile">
                    <IoIosArrowBack className="text-3xl text-[#2B416A] " />
                </NavLink>
            </div>

            <div className="px-28">
                <h1 className="text-[#00AEEF]  text-xl font-bold">Search</h1>
                {/* search input */}
                <div className="mt-6">
                    <label className="input input-bordered flex items-center gap-2 bg-[#EFF1F3]">
                        <FaSearch className="text-2xl text-[#989898]" />
                        <input type="text" className="grow" placeholder="Search Work" />

                    </label>
                </div>
                {/* filter */}
                <div className="mt-5 flex items-center">
                    <IoFilterSharp className="text-xl mr-3" />
                    <p className="text-xs">Filter By</p>
                </div>
                <p className="mt-6 text-xs">Displaying 5 out of 20 jobs found for you</p>

                {/* suggest job */}
                <div className="pb-10 mt-7">
                    <h1 className="font-bold text-[#2B416A]">Suitabel job available</h1>
                    <div className="grid grid-cols-3 items-center mt-5">
                        <div>
                            <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                            <p className="text-xs">Suburb: Belmore  </p>
                            <p className="text-xs">123 Chapel Street, Belmore 2017</p>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed ...</p>
                        </div>
                        <p className="text-xs">Post Code: 2017</p>
                        <p className="text-xs">Dates Needed: 01/04/2024 - 02/04/2024</p>
                    </div>
                    <div className="grid grid-cols-3 items-center mt-5">
                        <div>
                            <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                            <p className="text-xs">Suburb: Belmore  </p>
                            <p className="text-xs">123 Chapel Street, Belmore 2017</p>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed ...</p>
                        </div>
                        <p className="text-xs">Post Code: 2017</p>
                        <p className="text-xs">Dates Needed: 01/04/2024 - 02/04/2024</p>
                    </div>
                    <div className="grid grid-cols-3 items-center mt-5">
                        <div>
                            <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                            <p className="text-xs">Suburb: Belmore  </p>
                            <p className="text-xs">123 Chapel Street, Belmore 2017</p>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed ...</p>
                        </div>
                        <p className="text-xs">Post Code: 2017</p>
                        <p className="text-xs">Dates Needed: 01/04/2024 - 02/04/2024</p>
                    </div>
                    <div className="grid grid-cols-3 items-center mt-5">
                        <div>
                            <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                            <p className="text-xs">Suburb: Belmore  </p>
                            <p className="text-xs">123 Chapel Street, Belmore 2017</p>
                            <p className="text-xs">Consectetur tristique adipiscing elit. Sed ...</p>
                        </div>
                        <p className="text-xs">Post Code: 2017</p>
                        <p className="text-xs">Dates Needed: 01/04/2024 - 02/04/2024</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Search;