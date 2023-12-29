import {AiOutlineSearch} from "react-icons/ai";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {FaArrowLeft} from "react-icons/fa";
import {HiViewGrid} from "react-icons/hi";
import {MdViewList} from "react-icons/md";

const Shop = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-max pt-20 pb-5">
                    <div className="w-full h-40 bg-pry px-20 flex flex-col items-center justify-center gap-4">
                        <div className="w-full h-14 bg-white rounded flex">
                            <input
                                type="text"
                                placeholder="Search for products and brands...."
                                className="w-[80%] h-full rounded-l pl-3 outline-none"
                            />
                            <select
                                name=""
                                id=""
                                className="w-[16%] h-full outline-none border-gray-400 border-x-2"
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
                            <div className="w-[4%] h-full rounded-r">
                                <button className="w-full h-full flex items-center justify-center bg-black outline-none rounded-r">
                                    <AiOutlineSearch className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="w-[80%] h-14 bg-white rounded flex">
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
                    <div className="w-full h-14 flex items-center gap-2 px-20">
                        <FaArrowLeft />
                        <p>Home/</p>
                        <p>Shop/</p>
                        <p>Phones</p>
                    </div>
                    <div className="w-full h-14 px-20 flex items-center justify-between">
                        <div>Phones</div>
                        <div className="w-max flex items-center gap-8">
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
                                <HiViewGrid className="w-8 h-8 cursor-pointer" />
                                <MdViewList className="w-8 h-8 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max px-20">
                      <div className=""></div>
                      <div className=""></div>
                      
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Shop;
