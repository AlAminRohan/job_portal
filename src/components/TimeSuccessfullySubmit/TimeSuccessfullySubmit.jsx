

const TimeSuccessfullySubmit = () => {
    return (
        <div className="bg-[#00AEEF] rounded-3xl">
            <div className=" h-full">
                <div className="flex justify-end items-start h-full">
                    <img className="w-[200px]" src="https://i.ibb.co/K5R274h/Group.png" alt="" />
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-[#EFF1F3] text-2xl font-bold">Thank you for uploading your time and invoice.</h1>
                <p className=" text-white text-base mt-7 ">We have sent this to the business owner for verification.</p>
                <div className="bg-white grid grid-cols-2  gap-x-5  text-[#00AEEF]   py-10 text-base mx-28 mt-10 rounded-3xl">
                    <div className=" flex flex-col items-end ">
                        <p>Account Name :  </p>
                        <p>BSB : </p>
                        <p>Account Number : </p>
                    </div>
                    <div className=" flex flex-col items-start text-[#00AEEF]">
                        <p>Erbie Alcordo</p>
                        <p>Bank of the Community</p>
                        <p>123456789</p>
                    </div>
                </div>
                <p className="text-xl text-[#2B416A] mt-11 font-semibold  pb-12">Please make sure your bank details are up to date.</p>
            </div>
            <div className=" h-full">
                <div className="flex justify-start items-end h-full">
                    <img className="w-[120px]" src="https://i.ibb.co/K5R274h/Group.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TimeSuccessfullySubmit;