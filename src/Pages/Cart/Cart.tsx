import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./Cart.css";
import {FaTrash} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";

const Cart = () => {
    return (
        <>
            <div className="h-max w-full">
                <Header />
                <div className="h-max w-full flex flex-col pt-20 pb-10">
                    <div className="w-full h-max flex items-center pl-20 phone:pl-5 pt-5">
                        <BiArrowBack className="mr-6 text-2xl" />
                        <p>
                            Home / <span className="text-[#3F51B5]">Cart</span>
                        </p>
                    </div>
                    <div className="w-full max-h-max  flex items-center justify-center px-20 phone:px-5">
                        <div className="h-max w-full">
                            <div className="w-full h-20  flex items-center justify-between">
                                <div className="w-[34%] phone:w-max h-full  flex flex-col justify-between pl-16 phone:pl-0 pt-7">
                                    <p>Products</p>
                                    <p className="text-xs">
                                        You have selected (2) items
                                    </p>
                                </div>
                                <div className="w-[22%] phone:hidden h-full flex items-center justify-center">
                                    Unit Price
                                </div>
                                <div className="w-[22%] phone:hidden h-full flex items-center justify-center">
                                    QTY
                                </div>
                                <div className="w-[22%] phone:w-max h-full flex items-center justify-center">
                                    Price
                                </div>
                            </div>
                            <div className="w-full min-h-[200px] max-h-screen overflow-y-auto flex flex-col gap-10">
                                <div className="w-full h-44 phone:h-32  flex items-center justify-between">
                                    <div className="w-[34%] phone:w-max h-full flex gap-2 ">
                                        <div className="w-12 phone:w-5 h-full flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6 cursor-pointer"
                                            />
                                        </div>
                                        <div className="w-44 phone:w-28 h-full bg-slate-400 ">
                                            <img src="" alt="" />
                                        </div>
                                        <div className=" w-52 phone:w-32 h-full flex flex-col justify-between py-6 phone:py-0">
                                            <p className="font-semibold">
                                                Headset
                                            </p>
                                            <p>Oraimo</p>
                                            <p>Wireless Foldable Headset</p>
                                            <p>
                                                Color: <span>Black</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[66%] phone:w-max phone:flex-col phone:gap-1 h-full flex justify-between">
                                        <div className="w-[33%] phone:w-full h-full phone:h-max flex items-center justify-center phone:justify-end phone:font-bold">
                                            N5,000
                                        </div>
                                        <div className="w-[33%] phone:w-max h-full phone:h-max flex items-center justify-between  px-16 phone:px-0 phone:gap-4">
                                            <div className="w-20 h-10 phone:h-max phone:w-max flex items-center justify-center">
                                                <AiFillMinusCircle className="w-7 h-7 rounded-full bg-white text-gray-400 cursor-pointer" />
                                            </div>
                                            <div className="w-20 h-10 phone:h-max phone:w-max flex items-center justify-center text-xl">
                                                2
                                            </div>
                                            <div className="w-20 h-10 phone:h-max phone:w-max flex items-center justify-center">
                                                <AiFillPlusCircle className="w-7 h-7 rounded-full bg-white text-gray-400 cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="w-[33%] phone:w-full h-full flex phone:flex-col justify-center items-center">
                                            <div className="w-60 phone:w-full h-full flex items-center justify-end px-16 phone:px-0 phone:font-bold phone:justify-end">
                                                N10,000
                                            </div>
                                            <div className="w-14 phone:w-full phone:px-3 phone:py-2 h-14 flex justify-center items-center phone:justify-end">
                                                <FaTrash className="text-xl text-red-600 bg-red-200 w-8 h-8 p-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-end px-36 phone:px-5">
                        <div className="w-80 h-72  shadow-lg rounded-md py-10 px-5">
                            <div className="w-full h-[60%] flex flex-col justify-around">
                                <p className="flex justify-between">
                                    Sub Total <span>N260,000</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    Discount{" "}
                                    <span>
                                        <input
                                            type="text"
                                            placeholder="coupon code"
                                            className="h-9 w-28 rounded-lg text-sm px-2 border-y border-x outline-none"
                                        />
                                    </span>
                                </p>
                                <p className="flex justify-between text-[#3F51B5] text-2xl">
                                    Total <span className="">N260,000</span>
                                </p>
                            </div>
                            <div className="h-24 flex flex-col justify-around ">
                                <p className="text-sm">
                                    Shipping fee to be included at checkout
                                </p>
                                <button className="w-68 h-10 bg-[#3F51B5] text-white rounded-md">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Cart;
