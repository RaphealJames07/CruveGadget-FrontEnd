import airpod from "../assets/airpod.png";

const DealOfWeek = () => {
    return (
        <div className="w-full h-max flex flex-col ">
            <div className="w-full flex items-center justify-between h-14 bg-gray-100 px-20">
                <p className="font-bold text-pry text-xl">
                    Best Deals of the Week
                </p>
                <p className="font-bold text-pry text-base underline underline-offset-4">
                    See more
                </p>
            </div>
            <div className="w-full h-max py-4 px-20 flex justify-between gap-10 overflow-x-auto">
                <div className="w-72 rounded h-72 border  border-gray-200">
                    <div className="w-full h-[70%] flex items-center justify-center">
                        <img
                            src={airpod}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[30%] bg-gray-50 flex flex-col justify-center pl-4 gap-2">
                        <p className="text-pry font-bold">Apple Airpod Pro</p>
                        <p className="flex justify-between pr-5">
                            N65,000{" "}
                            <span className="text-sm line-through">
                                N80,000
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-72 rounded h-72  border border-gray-200">
                    <div className="w-full h-[70%] flex items-center justify-center">
                        <img
                            src={airpod}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[30%] bg-gray-50 flex flex-col justify-center pl-4 gap-2">
                        <p className="text-pry font-bold">Apple Airpod Pro</p>
                        <p className="flex justify-between pr-5">
                            N65,000{" "}
                            <span className="text-sm line-through">
                                N80,000
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-72 rounded h-72  border border-gray-200">
                    <div className="w-full h-[70%] flex items-center justify-center">
                        <img
                            src={airpod}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[30%] bg-gray-50 flex flex-col justify-center pl-4 gap-2">
                        <p className="text-pry font-bold">Apple Airpod Pro</p>
                        <p className="flex justify-between pr-5">
                            N65,000{" "}
                            <span className="text-sm line-through">
                                N80,000
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-72 rounded h-72  border border-gray-200">
                    <div className="w-full h-[70%] flex items-center justify-center">
                        <img
                            src={airpod}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[30%] bg-gray-50 flex flex-col justify-center pl-4 gap-2">
                        <p className="text-pry font-bold">Apple Airpod Pro</p>
                        <p className="flex justify-between pr-5">
                            N65,000{" "}
                            <span className="text-sm line-through">
                                N80,000
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfWeek;
