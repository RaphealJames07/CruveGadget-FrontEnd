import {MdCall, MdDeliveryDining, MdEmail, MdLocationPin} from "react-icons/md";
import {RiCustomerService2Fill, RiWhatsappFill} from "react-icons/ri";
import {
    BsFillChatDotsFill,
    BsFillCreditCard2BackFill,
    BsFillTagFill,
} from "react-icons/bs";
import contactImg from "../assets/contactUs.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <div className="w-full h-max pt-20">
                <div className="w-full h-[55vh] phone:h-[30vh] bg-red-50">
                    <img src={contactImg} alt="" className="w-full h-full" />
                </div>
                <div className="w-full h-[100vh] phone:h-max flex phone:flex-col phone:gap-5 justify-between px-20 phone:px-5 py-10">
                    <div className="h-full w-[48%] phone:w-full flex flex-col justify-between">
                        <div className="w-full h-[48%] phone:h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d990.8517117295021!2d3.340912600000001!3d6.5962522000000074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1697210657602!5m2!1sen!2sng"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full border-none"
                            ></iframe>
                        </div>
                        <div className="w-full h-[48%] phone:h-max flex flex-col phone:gap-4 justify-between">
                            <div className="w-full h-14 bg-white flex items-end text-2xl">
                                Contact Information
                            </div>
                            <div className="w-full h-14  flex items-center">
                                <MdLocationPin className="w-8 h-8  text-pry mr-10" />
                                <span className="text-pry">
                                    <p className="text-lg font-semibold">
                                        Address
                                    </p>
                                    <p>No 6 idowu lane ikeja C/village</p>
                                </span>
                            </div>
                            <div className="w-full h-14  flex items-center">
                                <MdEmail className="w-8 h-8  text-pry mr-10" />
                                <span className="text-pry">
                                    <p className="text-lg font-semibold">
                                        Email
                                    </p>
                                    <p>vipvendor@gmail.com</p>
                                </span>
                            </div>
                            <div className="w-full h-14  flex items-center">
                                <MdCall className="w-8 h-8  text-pry mr-10" />
                                <span className="text-pry">
                                    <p className="text-lg font-semibold">
                                        Phone
                                    </p>
                                    <p>081234567890 080123456789 07012345678</p>
                                </span>
                            </div>
                            <div className="w-full h-14  flex items-center">
                                <RiWhatsappFill className="w-8 h-8  text-pry mr-10" />
                                <span className="text-pry">
                                    <p className="text-lg font-semibold">
                                        Whatsapp
                                    </p>
                                    <p>081234567890 080123456789</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-[48%] phone:w-full phone:h-max bg-gray-100">
                        <div className="w-full h-full phone:h-max phone:py-4">
                            <div className="w-full h-[20%] phone:h-24  flex flex-col items-center justify-center gap-2">
                                <h2 className="text-3xl font-semibold text-pry">
                                    Get In Touch
                                </h2>
                                <p>We would love to hear from you</p>
                            </div>
                            <div className="w-full h-[60%] phone:h-max  flex flex-col items-center py-4 gap-5">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-[90%] h-14 border-none border-y border-x rounded-md px-3 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-[90%] h-14 border-none border-y border-x rounded-md px-3 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-[90%] h-14 border-none border-y border-x rounded-md px-3 outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-[90%] h-28 border-none border-y border-x rounded-md px-3 outline-none py-3"
                                />
                            </div>
                            <div className="w-full h-[10%] phone:h-max  flex items-center justify-center">
                                <button className="w-[70%] phone:w-[80%] py-4 rounded text-white bg-pry">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[70vh] phone:h-max ">
                    <div className="w-full h-[15%] phone:h-16 bg-slate-100 flex items-center justify-center text-2xl font-bold">
                        Our Services
                    </div>
                    <div className="w-full h-[85%] phone:h-max bg-slate-100 px-20 phone:gap-5 phone:py-4 phone:px-5 flex flex-col items-center">
                        <div className="w-full h-[50%] phone:h-max flex phone:flex-col phone:gap-5 justify-between items-center">
                            <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <MdDeliveryDining className="w-10 h-10" />
                                    <h3 className="text-xl font-semibold">
                                        Fast Delivery
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                            <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <BsFillChatDotsFill className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">
                                        Chat Support
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                            <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <BsFillCreditCard2BackFill className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">
                                        Easy Payment
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-1/2 phone:h-max  flex phone:flex-col phone:gap-5 justify-between items-center">
                            <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <BsFillTagFill className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">
                                        Best Offer
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                            <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <RiCustomerService2Fill className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">
                                        Customer Care
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                            <div className="w-80 h-44 bg-gray-50 phone:hidden rounded p-4 phone:w-full opacity-0">
                                <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                    <RiCustomerService2Fill className="w-10 h-10" />
                                    <h3 className="text-xl font-semibold">
                                        Customer Care
                                    </h3>
                                </div>
                                <div className="w-full h-[80%] flex items-center">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Illo veritatis porro
                                    provident eum deleniti aut cum? Neque
                                    doloremque at esse.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
