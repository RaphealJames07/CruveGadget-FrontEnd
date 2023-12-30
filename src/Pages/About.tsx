// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import AboutUsImg from "../assets/aboutus.jpg";
// import WhoWeAre from "../assets/whoweare.jpg";
// import ourAim from "../assets/ourAim.jpg";
// import ourApproach from "../assets/ourApproach.jpg";
// import {MdDeliveryDining} from "react-icons/md";
// import {RiCustomerService2Fill} from "react-icons/ri";
// import {
//     BsFillChatDotsFill,
//     BsFillCreditCard2BackFill,
//     BsFillTagFill,
// } from "react-icons/bs";

// const About = () => {
//     return (
//         <>
//                 <Header />
//             <div className="w-full h-max pt-20">
//                 <div className="w-full h-max">
//                     <div className="w-full h-[80vh] bg-gray-200">
//                         <img
//                             src={AboutUsImg}
//                             alt=""
//                             className="w-full h-full "
//                         />
//                     </div>
//                     <div className="w-full h-[170vh] bg-purple-50 flex flex-col justify-around px-16">
//                         <div className="w-full h-80 flex justify-between items-center pl-4">
//                             <div className="w-[65%] h-[50%] flex flex-col justify-between">
//                                 <h1 className="text-2xl font-bold w-[80%]">
//                                     Who We Are
//                                 </h1>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur
//                                     adipisicing elit. Hic, quod dicta ea eveniet
//                                     quam, iusto autem rem commodi labore tempore
//                                     possimus rerum sed dolorem quae, optio enim
//                                     inventore aliquid consequatur ab maxime
//                                     tenetur placeat necessitatibus. Earum,
//                                     repellendus error maiores dignissimos nemo
//                                     dolorum eius perspiciatis suscipit, fugiat
//                                     nihil beatae asperiores veritatis recusandae
//                                     sunt eum quaerat sapiente? Perspiciatis
//                                     dolor natus amet obcaecati?
//                                 </p>
//                             </div>
//                             <div className="w-[30%] h-full bg-black  rounded">
//                                 <img
//                                     src={WhoWeAre}
//                                     alt=""
//                                     className="w-full h-full object-cover rounded"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full h-80 flex flex-row-reverse justify-between items-center pl-4">
//                             <div className="w-[65%] h-[50%] flex flex-col justify-between">
//                                 <h1 className="text-2xl font-bold w-[80%]">
//                                     Our Aim
//                                 </h1>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur
//                                     adipisicing elit. Hic, quod dicta ea eveniet
//                                     quam, iusto autem rem commodi labore tempore
//                                     possimus rerum sed dolorem quae, optio enim
//                                     inventore aliquid consequatur ab maxime
//                                     tenetur placeat necessitatibus. Earum,
//                                     repellendus error maiores dignissimos nemo
//                                     dolorum eius perspiciatis suscipit, fugiat
//                                     nihil beatae asperiores veritatis recusandae
//                                     sunt eum quaerat sapiente? Perspiciatis
//                                     dolor natus amet obcaecati?
//                                 </p>
//                             </div>
//                             <div className="w-[30%] h-full bg-black  rounded">
//                                 <img
//                                     src={ourAim}
//                                     alt=""
//                                     className="w-full h-full object-cover rounded"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full h-80 flex justify-between items-center pl-4">
//                             <div className="w-[65%] h-[50%] flex flex-col justify-between">
//                                 <h1 className="text-2xl font-bold w-[80%]">
//                                     Our Approach
//                                 </h1>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur
//                                     adipisicing elit. Hic, quod dicta ea eveniet
//                                     quam, iusto autem rem commodi labore tempore
//                                     possimus rerum sed dolorem quae, optio enim
//                                     inventore aliquid consequatur ab maxime
//                                     tenetur placeat necessitatibus. Earum,
//                                     repellendus error maiores dignissimos nemo
//                                     dolorum eius perspiciatis suscipit, fugiat
//                                     nihil beatae asperiores veritatis recusandae
//                                     sunt eum quaerat sapiente? Perspiciatis
//                                     dolor natus amet obcaecati?
//                                 </p>
//                             </div>
//                             <div className="w-[30%] h-full bg-black  rounded">
//                                 <img
//                                     src={ourApproach}
//                                     alt=""
//                                     className="w-full h-full object-cover rounded"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full h-[70vh] ">
//                     <div className="w-full h-[15%] bg-slate-100 flex items-center justify-center text-2xl font-bold">
//                         Our Services
//                     </div>
//                     <div className="w-full h-[85%] bg-slate-100 px-20 flex flex-col items-center">
//                         <div className="w-full h-[50%]  flex justify-between items-center">
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <MdDeliveryDining className="w-10 h-10" />
//                                     <h3 className="text-xl font-semibold">
//                                         Fast Delivery
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <BsFillChatDotsFill className="w-8 h-8" />
//                                     <h3 className="text-xl font-semibold">
//                                         Chat Support
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <BsFillCreditCard2BackFill className="w-8 h-8" />
//                                     <h3 className="text-xl font-semibold">
//                                         Easy Payment
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full h-1/2  flex justify-between items-center">
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <BsFillTagFill className="w-8 h-8" />
//                                     <h3 className="text-xl font-semibold">
//                                         Best Offer
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <RiCustomerService2Fill className="w-8 h-8" />
//                                     <h3 className="text-xl font-semibold">
//                                         Customer Care
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                             <div className="w-80 h-44 bg-gray-50 rounded p-4 phone:w-full opacity-0">
//                                 <div className="w-full h-[20%] flex items-center gap-5 text-pry">
//                                     <RiCustomerService2Fill className="w-10 h-10" />
//                                     <h3 className="text-xl font-semibold">
//                                         Customer Care
//                                     </h3>
//                                 </div>
//                                 <div className="w-full h-[80%] flex items-center">
//                                     Lorem ipsum, dolor sit amet consectetur
//                                     adipisicing elit. Illo veritatis porro
//                                     provident eum deleniti aut cum? Neque
//                                     doloremque at esse.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// };

// export default About;

import AboutUsImg from "../assets/aboutus.jpg";
import WhoWeAre from "../assets/whoweare.jpg";
import ourAim from "../assets/ourAim.jpg";
import ourApproach from "../assets/ourApproach.jpg";
import {MdDeliveryDining} from "react-icons/md";
import {RiCustomerService2Fill} from "react-icons/ri";
import {
    BsFillChatDotsFill,
    BsFillCreditCard2BackFill,
    BsFillTagFill,
} from "react-icons/bs";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
    return (
        <>
            <Header />
            <div className="w-full h-max flex flex-col pt-20">
                <div className="w-full h-[60vh] phone:h-[35vh] bg-gray-200">
                    <img src={AboutUsImg} alt="" className="w-full h-full phone:object-contain" />
                </div>
                <div className="w-full h-max flex flex-col gap-4 phone:gap-2 px-20 phone:px-5 pt-2">
                    <div className="w-full h-max phone:flex phone:flex-col phone:gap-4">
                        <p className="hidden phone:flex text-2xl font-bold w-full justify-center">Who We Are</p>
                        <div className="w-full h-max flex justify-between phone:flex-col-reverse">
                            <div className=" w-[65%] phone:w-full h-[20rem] phone:h-[17rem] flex flex-col justify-center gap-5 phone:gap-2">
                                <h1 className="text-2xl font-bold w-[70%] phone:hidden">
                                    Who We Are
                                </h1>
                                <p className="w-[90%] phone:w-full">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                            <div className="w-[30%] phone:w-full h-[20rem] p-4 phone:p-0 rounded">
                                <img
                                    src={WhoWeAre}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max phone:flex phone:flex-col phone:gap-4">
                        <p className="hidden phone:flex text-2xl font-bold w-full justify-center">Our Aim</p>
                        <div className="w-full h-max flex justify-between phone:flex-col">
                            <div className="w-[30%] phone:w-full h-[20rem] p-4 phone:p-0 rounded">
                                <img
                                    src={ourAim}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="w-[65%] phone:w-full h-[20rem] phone:h-[17rem] flex flex-col justify-center gap-5 phone:gap-2">
                                <h1 className="text-2xl font-bold w-[70%] phone:hidden">
                                    Our Aim
                                </h1>
                                <p className="w-[90%] phone:w-full">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-4">
                        <p className="hidden phone:flex text-2xl font-bold w-full justify-center">Our Approach</p>
                        <div className="w-full h-max flex justify-between phone:flex-col-reverse">
                            <div className="w-[65%] phone:w-full h-[20rem] phone:h-[17rem] flex flex-col justify-center gap-5 phone:gap-2">
                                <h1 className="text-2xl font-bold w-[70%] phone:hidden">
                                    Our Approach
                                </h1>
                                <p className="w-[80%] phone:w-full">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                            <div className="w-[30%] phone:w-full h-[20rem] p-4 phone:p-0 rounded">
                                <img
                                    src={ourApproach}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
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

export default About;
