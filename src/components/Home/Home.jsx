import { RxAvatar } from "react-icons/rx";
import { FaBell } from "react-icons/fa6";

const Home = () => {
    return (
        <div>
            <div className="flex justify-between px-28 pt-20 pb-7 bg-[#00AEEF] rounded-t-3xl">
                <div>
                    <p className="text-white">Welcome Back</p>
                    <h1 className="text-3xl font-bold text-white ">Erbert</h1>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full text-4xl text-white">
                        <RxAvatar />
                    </div>
                </div>
            </div>
            {/* home page */}
            <div className="bg-white rounded-t-3xl mt-[-16px]">
                {/* search */}
                <div className="px-28 py-11 ">
                    <label className="input input-bordered flex items-center gap-2 bg-[#EFF1F3]">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

                {/* job category */}
                <div className="px-28 grid grid-cols-2 gap-x-6">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex ">
                                < FaBell className="text-[#00AEEF] mr-4" />
                                <h1 className="font-bold text-[#2B416A]"> Upcoming Jobs</h1>
                            </div>
                            <div>
                                <p>Veiw all</p>
                            </div>
                        </div>
                        <div className="flex  items-center justify-around bg-[#00AEEF] rounded-3xl pt-5 pb-10 mt-4 text-white text-xs">
                            <div >
                                <h1>Pharmacy</h1>
                                <p>Monday</p>
                                <p>19 Jun 2023</p>
                            </div>
                            <div>
                                <p>123 Sample Stree</p>
                                <p>Belmore</p>
                            </div>
                            <p>t9 AM - 5 PM</p>
                        </div>
                        <div className="flex  items-center justify-around bg-[#00AEEF] rounded-3xl pt-5 pb-10 mt-4 text-white text-xs">
                            <div >
                                <h1>Pharmacy</h1>
                                <p>Monday</p>
                                <p>19 Jun 2023</p>
                            </div>
                            <div>
                                <p>123 Sample Stree</p>
                                <p>Belmore</p>
                            </div>
                            <p>t9 AM - 5 PM</p>
                        </div>
                    </div>






                    <div>
                        <p className="text-[#2B416A] font-bold">Suiteable Option Avaiable</p>
                        <div className="mt-5">
                            {/* card */}
                            <div className="flex justify-between  items-center">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            <div className="flex justify-between  items-center mt-6">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            <div className="flex justify-between  items-center mt-6">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            <div className="flex justify-between  items-center mt-6">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            <div className="flex justify-between  items-center mt-6">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            <div className="flex justify-between  items-center mt-6">
                                <div>
                                    <h1 className="text-[#00AEEF] font-bold">Chapel Street Pharmacy</h1>
                                    <div className="text-[10px]">
                                        <p>Suburb: Belmore</p>
                                        <p>123 Chapel Street, Belmore 2017</p>
                                        <p>Consectetur tristique adipiscing elit. Sed ..</p>
                                    </div>
                                </div>
                                <p className="text-[10px]"> Post Code: 2017     </p>
                                <p className="text-[10px]">  Dates Needed: 01/04/2024 - 02/04/2024</p>

                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;