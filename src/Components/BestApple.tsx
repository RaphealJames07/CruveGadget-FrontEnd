import {FaHeart, FaStar} from "react-icons/fa";
import airpod from "../assets/airpod.png";

const BestApple = () => {
    return (
        <>
            <div className="w-full h-max py-5">
                <div className="w-full flex items-center justify-between h-14 bg-gray-100 px-20 phone:px-5">
                    <p className="font-bold text-pry text-xl phone:text-lg">
                        Best Deals on Apple Product
                    </p>
                    <p className="font-bold text-pry text-base underline underline-offset-4">
                        See more
                    </p>
                </div>
                <div className="w-full h-max py-4 px-20 phone:px-5  overflow-x-auto">
                    <div className="w-full phone:w-max h-max flex flex-col phone:flex-row gap-5">
                        <div className="w-full h-max flex justify-between">
                            <div className="w-72 rounded h-80 border  border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80 border  border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80  border border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80  border border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between gap-10">
                            <div className="w-72 rounded h-80 border  border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80  border border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80  border border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="w-72 rounded h-80  border border-gray-200">
                                <div className="w-full h-[50%] flex items-center justify-center">
                                    <img
                                        src={airpod}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-[50%] bg-gray-50 flex flex-col py-4 px-3 gap-2">
                                    <p className="text-pry font-bold">
                                        Apple Airpod Pro
                                    </p>
                                    <p className="flex justify-between pr-5">
                                        N65,000{" "}
                                        <span className="text-sm line-through">
                                            N80,000
                                        </span>
                                    </p>
                                    <p className="flex justify-between items-center">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-orange-400 w-4 h-4" />
                                            3.0
                                        </span>{" "}
                                        (15 reviews){" "}
                                        <span>
                                            <FaHeart className="h-6 w-6 cursor-pointer text-red-500" />
                                        </span>
                                    </p>
                                    <button className="w-full h-max bg-pry py-2 rounded text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestApple;
