import {
    AiFillAndroid,
    AiFillApple,
    AiFillFacebook,
    AiFillInstagram,
    AiFillMessage,
    AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col px-20 ph:px-5 bg-[#1f1f1f] py-10 ph:py-5 text-white">
                <div className="w-full h-80 ph:h-max flex justify-between ph:flex-col">
                    <div className="w-80 ph:w-full h-full py-5 flex flex-col gap-5">
                        <p className="text-xl font-bold text-white">
                            10% off any product when you subscribe to our
                            newsletter
                        </p>
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full h-10 border rounded border-white outline-pry bg-transparent pl-2"
                        />
                        <button className="w-full h-10 border-none text-white rounded outline-pry bg-pry">
                            Subscribe
                        </button>
                    </div>
                    <div className="w-80 ph:w-full h-full py-5 flex flex-col ">
                        <p className="w-full text-xl font-bold text-white mb-10">
                            HELP AND INFO
                        </p>
                        <ul className="flex flex-col gap-2">
                            <li className="cursor-pointer">Help</li>
                            <li className="cursor-pointer">Track your order</li>
                            <li className="cursor-pointer">
                                Shipping and refunds
                            </li>
                            <li className="cursor-pointer">
                                10% discounts for subscribers
                            </li>
                            <li className="cursor-pointer">FAQS</li>
                        </ul>
                    </div>
                    <div className="w-80 ph:w-full h-full py-5 flex flex-col justify-between">
                        <div className="w-full h-max">
                            <p className="text-xl font-bold"> MOBILE VERSION</p>
                            <div className="flex gap-2 ">
                                <AiFillApple className="w-8 h-8 cursor-pointer" />
                                <AiFillAndroid className="w-8 h-8 cursor-pointer" />
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <p className="text-xl font-bold">CONTACT US</p>
                            <div className="flex gap-4">
                                <AiFillTwitterSquare className="w-8 h-8 cursor-pointer" />
                                <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                                <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                                <AiFillMessage className="w-8 h-8 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 ph:h-max flex ph:flex-col justify-between items-center">
                    <div className="w-max flex items-center gap-5 ph:flex-col underline underline-offset-4">
                        <p className="cursor-pointer transition-all hover:text-gray-400">
                            Privacy and cookies
                        </p>
                        <p className="cursor-pointer transition-all hover:text-gray-400">
                            Accessibility
                        </p>
                        <p className="cursor-pointer transition-all hover:text-gray-400">
                            Terms and conditions
                        </p>
                    </div>
                    <div className=" ph:h-14 w-max flex items-center">
                        <p>C 2023 All Right Reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
