import { CiCircleRemove } from "react-icons/ci";

const Appoirment = () => {
    return (
        <div className="bg-[#00AEEF] rounded-t-3xl">
            <div className="flex justify-end">
                <img src="https://i.ibb.co.com/2YwwcXw/pic.png" className="w-48" alt="" />
            </div>

            {/* body section */}
            <div className=" rounded-t-3xl bg-white  ">
                <div className="flex justify-around py-6 items-center">
                    <h2 className="text-[#00AEEF] font-bold">Job Offer</h2>
                    <p>Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                    <div><CiCircleRemove  className="text-2xl"/></div>
                </div>
                <div className="flex justify-around py-6 items-center border-t">
                    <h2 className="text-[#00AEEF] font-bold">Job Offer</h2>
                    <p>Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                    <div><CiCircleRemove  className="text-2xl"/></div>
                </div>
                <div className="flex justify-around py-6 items-center pb-96 border-t">
                    <h2 className="text-[#00AEEF] font-bold">Job Offer</h2>
                    <p>Consectetur tristique adipiscing elit. Sed augue felis, tristique sed.</p>
                    <div><CiCircleRemove  className="text-2xl"/></div>
                </div>

            </div>
        </div>
    );
};

export default Appoirment;