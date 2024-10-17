

const AcceptMsg = () => {
    return (
        <div className="bg-[#00AEEF] rounded-3xl">
            <div className="flex justify-end mb-3">
                <img src="https://i.ibb.co.com/nmLV952/Group.png" className="w-[200px]" alt="" />
            </div>

            
            <div className="text-center mt-20">
                <h1 className="text-[#EFF1F3] text-3xl font-bold">you’ve accept the offer</h1>
                <p className=" text-white text-lg mt-3 ">Monday, 19 Jun 2023.</p>
                <p className="text-white">9 AM - 5 PM</p>
                <p className="text-white mt-5">Job will be added to your calendar.</p>
            </div>

            <div>
                <img src="https://i.ibb.co.com/nmLV952/Group.png" alt="" className="w-[100px] mt-[170px]" />
            </div>
        </div>
    );
};

export default AcceptMsg;