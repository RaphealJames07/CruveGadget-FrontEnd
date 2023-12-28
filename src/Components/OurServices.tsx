import {AiOutlineCreditCard, AiOutlineShoppingCart} from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";
import {TbTruckDelivery} from "react-icons/tb";

const OurServices = () => {
    return (
        <div className="w-full flex justify-center items-center h-max phone: flex-col phone:gap-4 pt-10">
            <div className="w-full h-max flex flex-col gap-4 items-center justify-center">
                <p className="text-2xl font-bold text-pry">Our Services</p>
                <p className="text-lg text-center phone:text-sm phone:w-[80%]">We Strife to render these following services to our beloved customers</p>
            </div>
            <div className="h-max flex justify-between items-center w-[90%] phone:flex-wrap gap-4 mt-5">
                <div className="bg-pry text-white rounded-md flex items-center justify-center w-[23%] phone:w-[47%] h-16 gap-4">
                    <AiOutlineShoppingCart className="w-6 h-6" />
                    <p className="text-lg phone:text-sm">Easy To Shop</p>
                </div>
                <div className="bg-pry text-white rounded-md flex items-center justify-center w-[23%] phone:w-[47%] h-16 gap-4">
                    <MdOutlineGppGood className="w-6 h-6" />
                    <p className="text-lg phone:text-sm">Quality Products</p>
                </div>
                <div className="bg-pry text-white rounded-md flex items-center justify-center w-[23%] phone:w-[47%] h-16 gap-4">
                    <AiOutlineCreditCard className="w-6 h-6" />
                    <p className="text-lg phone:text-sm">Easy Payment</p>
                </div>
                <div className="bg-pry text-white rounded-md flex items-center justify-center w-[23%] phone:w-[47%] h-16 gap-4">
                    <TbTruckDelivery className="w-6 h-6" />
                    <p className="text-lg phone:text-sm">Swift Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
