import {AiOutlineMenuUnfold, AiOutlineSearch} from "react-icons/ai";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {FaArrowLeft, FaHeart, FaStar} from "react-icons/fa";
import {HiViewGrid} from "react-icons/hi";
import {MdViewList} from "react-icons/md";
import {BiReset} from "react-icons/bi";
import {Pagination, Slider} from "antd";
import airpod from "../assets/airpod.png";
import './Pages.css'

const Shop = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-max pt-20 pb-5">
                    <div className="w-full h-40 bg-pry px-20 phone:px-5 flex flex-col items-center justify-center gap-4">
                        <div className="w-full h-14 bg-white rounded flex">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-[80%] phone:w-[50%] h-full rounded-l pl-3 outline-none"
                            />
                            <select
                                name=""
                                id=""
                                className="w-[16%] phone:w-[37%] h-full outline-none border-gray-400 border-x-2"
                            >
                                <option value="">All Departments</option>
                                <option value="">Laptops</option>
                                <option value="">Desktops</option>
                                <option value="">Smartwatches</option>
                                <option value="">Tablets</option>
                                <option value="">Drones</option>
                                <option value="">Mobile Phones</option>
                                <option value="">Headphones</option>
                            </select>
                            <div className="w-[4%] phone:w-[13%] h-full rounded-r">
                                <button className="w-full h-full flex items-center justify-center bg-black outline-none rounded-r">
                                    <AiOutlineSearch className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="w-[80%] phone:w-[100%] h-14 bg-white rounded flex">
                            <div className="w-[25%] h-full flex items-center justify-center bg-gray-200 text-pry">
                                Phones
                            </div>
                            <div className="w-[25%] h-full flex items-center text-gray-600 justify-center">
                                Tablets
                            </div>
                            <div className="w-[25%] h-full flex items-center text-gray-600 justify-center">
                                Laptops
                            </div>
                            <div className="w-[25%] h-full flex items-center text-gray-600 justify-center">
                                Accessories
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-14 flex items-center gap-2 px-20 phone:px-5">
                        <FaArrowLeft />
                        <p>Home/</p>
                        <p>Shop/</p>
                        <p>Phones</p>
                    </div>
                    <div className="w-full h-14 px-20 phone:px-5 flex items-center justify-between">
                        <div>Phones</div>
                        <div className="w-max flex items-center gap-8 phone:gap-4 phone:text-sm">
                            <div className="w-max flex items-center gap-2">
                                <p>Sort By</p>
                                <select
                                    name=""
                                    id=""
                                    className="w-max h-10 border border-gray-200 rounded pl-2"
                                >
                                    <option value="">Featured</option>
                                    <option value="">Popularity</option>
                                    <option value="">Rating</option>
                                    <option value="">Newest Arrival</option>
                                    <option value="">Price: Low to High</option>
                                    <option value="">Price: High to Low</option>
                                </select>
                            </div>
                            <div className="w-max h-10 flex items-center gap-4">
                                <HiViewGrid className="w-8 h-8 phone:w-6 phone:h-6 cursor-pointer" />
                                <MdViewList className="w-8 h-8 phone:w-6 phone:h-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max px-20 phone:px-5 py-5 flex justify-between">
                        <div className="w-[23%] phone: h-max flex flex-col bg-sky-50 px-2 gap-4">
                            <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-400">
                                <span className="w-max h-max flex items-center gap-2 cursor-pointer bg-sky-300 rounded p-2">
                                    <AiOutlineMenuUnfold className="w-5 h-5" />{" "}
                                    Filters
                                </span>
                                <span className="w-max h-max flex items-center gap-2 cursor-pointer bg-sky-300 rounded p-2">
                                    <BiReset className="w-5 h-5" /> Reset
                                    Filters
                                </span>
                            </div>
                            <div className="w-full h-max flex flex-col gap-2">
                                <div className="px-8 py-2 bg-gray-200 w-max h-max flex items-center justify-center">
                                    PRICES
                                </div>
                                <div className="w-full h-max flex flex-col gap-2">
                                    <Slider range defaultValue={[20, 50]} />
                                    <div className="w-full h-max flex justify-between">
                                        <div className="px-4 py-2 border-2 border-pry flex items-center justify-center">
                                            10,000
                                        </div>
                                        <div className="px-4 py-2 border-2 border-pry flex items-center justify-center">
                                            10,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-4">
                                <div className="w-max h-max px-4 py-2 bg-gray-200 rounded flex items-center justify-center">
                                    COLOR
                                </div>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="radio"
                                        className="w-7 h-7 cursor-pointer"
                                    />
                                    <input
                                        type="radio"
                                        className="w-7 h-7 cursor-pointer"
                                    />
                                    <input
                                        type="radio"
                                        className="w-7 h-7 cursor-pointer"
                                    />
                                    <input
                                        type="radio"
                                        className="w-7 h-7 cursor-pointer"
                                    />
                                    <input
                                        type="radio"
                                        className="w-7 h-7 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-4">
                                <div className="w-max px-4 py-2 flex items-center justify-center h-max bg-gray-200">
                                    SHOP BY BRANDS
                                </div>
                                <input
                                    type="search"
                                    placeholder="Search brands"
                                    className="w-full h-10 rounded border-pry border pl-3 outline-none text-sm"
                                />
                                <div className="w-full h-max flex flex-col">
                                    <div className="w-full h-12  cursor-pointer text-pry flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[75%] phone:w-[100%] h-max flex flex-col bg-sky-300 py-1 px-2">
                            <div className="w-full h-max flex flex-wrap gap-4">
                                <div className="w-[32%]  rounded h-80 border border-gray-200">
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
                                <div className="w-[32%]  rounded h-80 border border-gray-200">
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
                                <div className="w-[32%]  rounded h-80 border border-gray-200">
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
                                <div className="w-[32%]  rounded h-80 border border-gray-200">
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
                                <div className="w-[32%]  rounded h-80 border border-gray-200">
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
                            <div className="w-full h-20 flex items-center justify-center">
                                <Pagination defaultCurrent={1} total={50} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Shop;
