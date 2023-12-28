import Laptops from "../assets/Laptop.svg";
import Desktops from "../assets/Desktop.svg";
import SmartWatches from "../assets/SmartWatches.svg";
import MobilePhones from "../assets/MobilePhones.svg";
import Drones from "../assets/Drones.svg";
import EarPods from "../assets/EarPods.svg";
import Tablets from "../assets/Tablets.svg";
import HeadPhones from "../assets/HeadPhones.svg";

const PopularCategories = () => {
    return (
        <div className="w-full h-max flex flex-col gap-10  py-5">
            <div className="w-full flex items-center justify-between h-14 bg-gray-100 px-20 phone:px-5">
                <p className="font-bold text-pry text-xl">Popular Categories</p>
                <p className="font-bold text-pry text-base underline underline-offset-4">
                    See more
                </p>
            </div>
            <div className="w-full h-max flex justify-between phone:flex-wrap phone:gap-5 px-20 phone:px-5">
                <div className="w-64 phone:w-[45%] h-48 border   cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={Laptops}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    Laptops
                </div>
                <div className="w-64 phone:w-[45%] h-48 border  cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={Desktops}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    Desktop
                </div>
                <div className="w-64 phone:w-[45%] h-48 border  cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={SmartWatches}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    SmartWatches
                </div>
                <div className="w-64 phone:w-[45%] h-48 border  cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={MobilePhones}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    MobilePhones
                </div>
            </div>
            <div className="w-full h-max flex justify-between phone:flex-wrap phone:gap-5 px-20 phone:px-5">
                <div className="w-64 phone:w-[45%] h-48 border cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={Drones}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    Drones
                </div>
                <div className="w-64 phone:w-[45%] h-48 border cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={EarPods}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    EarPods
                </div>
                <div className="w-64 phone:w-[45%] h-48 border cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={Tablets}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    Tablets
                </div>
                <div className="w-64 phone:w-[45%] h-48 border cursor-pointer border-gray-200 rounded-md flex items-center flex-col justify-center">
                    <img
                        src={HeadPhones}
                        alt=""
                        className="w-full h-[80%] flex items-center justify-center"
                    />
                    HeadPhones
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;
