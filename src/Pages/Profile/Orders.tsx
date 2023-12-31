import Iphone from "../../assets/iphone12.png";
import {useNavigate} from "react-router";

const Orders = () => {
    const nav = useNavigate();
    const handleViewMoreOrder = () => {
        nav("/OrderDetail");
    };
    return (
        <>
            <div className="w-full h-max py-4 flex flex-col gap-5">
                <div className="w-full h-10 ">
                    <ul className="w-full h-full phone:overflow-x-auto">
                        <div className="flex gap-2 items-center justify-between  phone:w-max">
                            <li className="w-28 h-10  flex items-center justify-center rounded-full cursor-pointer bg-pry text-white">
                                All Orders
                            </li>
                            <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                                Processing
                            </li>
                            <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                                Delivered
                            </li>
                            <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                                On Delivery
                            </li>
                            <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                                Canceled
                            </li>
                            <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                                Returned
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="w-full min-h-[50vh] max-h-screen overflow-y-auto flex flex-col gap-5">
                    <div
                        className="w-full h-32 bg-slate-50 p-2 flex phone:gap-2 justify-between cursor-pointer"
                        onClick={handleViewMoreOrder}
                    >
                        <div className="w-[20%] phone:w-[30%] h-full bg-red-100">
                            <img
                                src={Iphone}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-[20%] phone:w-[70%] h-full flex flex-col justify-between">
                            <p>Iphone 12 Pro max</p>
                            <p className="flex gap-10">
                                QTY: 1 <span>Color: Red</span>
                            </p>
                            <p>Price: 300,000</p>
                        </div>
                        <div className="w-[20%] phone:w-[35%] h-full phone:hidden">
                            <p>Order No</p>
                            <h1>VIP-123456789</h1>
                        </div>

                        <div className="w-[20%] h-full phone:hidden">
                            <p>Status</p>
                            <p>
                                Shipped <span>12-10-2023</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
