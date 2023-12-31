import {FaTrash} from "react-icons/fa";
import Iphone from "../../assets/iphone12.png";

const Saved = () => {
    return (
        <>
            <div className="w-full h-max pb-5">
                <div className="w-full h-14 flex items-center text-2xl font-semibold">
                    Saved (5)
                </div>
                <div className="w-full min-h-80 max-h-[80vh] overflow-y-auto">
                    <div className="w-full h-max flex flex-col gap-5">
                        <div className="w-full h-40 flex items-center justify-between py-5 px-5 bg-gray-100">
                            <div className="w-[15%] phone:w-[25%] h-full bg-white">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-[85%] phone:w-[75%] h-full flex items-center justify-between px-2">
                                <div className="w-max h-full  flex flex-col justify-center gap-5">
                                    <h1 className="text-xl">
                                        Iphone 12 5G 128GB
                                    </h1>
                                    <p className="text-lg">N505,000</p>
                                </div>
                                <div className="w-max h-full  flex  phone:flex-col items-center gap-4 px-2">
                                    <button className=" bg-pry w-32 phone:w-max phone:px-2 rounded text-white h-10">
                                        Add to cart
                                    </button>
                                    <span className="bg-red-200 w-10 phone:w-max phone:px-2 h-10 flex justify-center items-center cursor-pointer">
                                        <FaTrash className="text-xl text-red-600" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-40 flex items-center justify-between py-5 px-5 bg-gray-100">
                            <div className="w-[15%] phone:w-[25%] h-full bg-white">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-[85%] phone:w-[75%] h-full flex items-center justify-between px-2">
                                <div className="w-max h-full  flex flex-col justify-center gap-5">
                                    <h1 className="text-xl">
                                        Iphone 12 5G 128GB
                                    </h1>
                                    <p className="text-lg">N505,000</p>
                                </div>
                                <div className="w-max h-full  flex  phone:flex-col items-center gap-4 px-2">
                                    <button className=" bg-pry w-32 phone:w-max phone:px-2 rounded text-white h-10">
                                        Add to cart
                                    </button>
                                    <span className="bg-red-200 w-10 phone:w-max phone:px-2 h-10 flex justify-center items-center cursor-pointer">
                                        <FaTrash className="text-xl text-red-600" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-40 flex items-center justify-between py-5 px-5 bg-gray-100">
                            <div className="w-[15%] phone:w-[25%] h-full bg-white">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-[85%] phone:w-[75%] h-full flex items-center justify-between px-2">
                                <div className="w-max h-full  flex flex-col justify-center gap-5">
                                    <h1 className="text-xl">
                                        Iphone 12 5G 128GB
                                    </h1>
                                    <p className="text-lg">N505,000</p>
                                </div>
                                <div className="w-max h-full  flex  phone:flex-col items-center gap-4 px-2">
                                    <button className=" bg-pry w-32 phone:w-max phone:px-2 rounded text-white h-10">
                                        Add to cart
                                    </button>
                                    <span className="bg-red-200 w-10 phone:w-max phone:px-2 h-10 flex justify-center items-center cursor-pointer">
                                        <FaTrash className="text-xl text-red-600" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-40 flex items-center justify-between py-5 px-5 bg-gray-100">
                            <div className="w-[15%] phone:w-[25%] h-full bg-white">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-[85%] phone:w-[75%] h-full flex items-center justify-between px-2">
                                <div className="w-max h-full  flex flex-col justify-center gap-5">
                                    <h1 className="text-xl">
                                        Iphone 12 5G 128GB
                                    </h1>
                                    <p className="text-lg">N505,000</p>
                                </div>
                                <div className="w-max h-full  flex  phone:flex-col items-center gap-4 px-2">
                                    <button className=" bg-pry w-32 phone:w-max phone:px-2 rounded text-white h-10">
                                        Add to cart
                                    </button>
                                    <span className="bg-red-200 w-10 phone:w-max phone:px-2 h-10 flex justify-center items-center cursor-pointer">
                                        <FaTrash className="text-xl text-red-600" />
                                    </span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Saved;
