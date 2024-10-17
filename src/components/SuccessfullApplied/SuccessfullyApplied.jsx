

const SuccessfullyApplied = () => {
    return (
        <div className="bg-[#00aeef] h-[100vh]">
                <div className="flex flex-col h-full">
                    <div className=" h-full">
                        <div className="flex justify-end items-start h-full">
                            <img className="w-[200px]" src="https://i.ibb.co/K5R274h/Group.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full container mx-auto">
                        <h2 className=" text-center text-[#EFF1F3] font-bold text-2xl capitalize">You Successfully Applied for the Job!</h2>
                        <p className=' text-center text-[#fff] font-medium text-xs mt-2'>The company will be reviewing your details and will get back to you as soon as possible.</p>
                    </div>
                    <div className=" h-full">
                        <div className="flex justify-start items-end h-full">
                            <img className="w-[120px]" src="https://i.ibb.co/K5R274h/Group.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default SuccessfullyApplied;