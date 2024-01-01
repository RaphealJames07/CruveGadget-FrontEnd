import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ProductDetail = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-max pt-20 flex flex-col gap-14 phone:gap-2 px-20 phone:px-5">
                    <div className="w-full h-[70vh] phone:h-[80vh] phone:flex-col flex pt-10 phone:pt-2 gap-16 phone:gap-2">
                        <div className="w-1/2 phone:w-full h-full phone:h-[65%] flex flex-col justify-between">
                            <div className="w-full h-[75%] bg-indigo-100">
                                <img src="" alt="" />
                            </div>
                            <div className="w-full h-[20%] flex gap-5">
                                <div className="w-1/3 h-full rounded bg-sky-100"></div>
                                <div className="w-1/3 h-full rounded bg-sky-100"></div>
                                <div className="w-1/3 h-full rounded bg-sky-100"></div>
                            </div>
                        </div>
                        <div className="w-1/2 phone:w-full h-full phone:h-[35%] flex flex-col gap-5 phone:gap-2">
                            <p className="text-3xl phone:text-2xl text-pry flex items-center justify-between">
                                Air 2s Camera Drone
                                <span className="text-pry font-semibold text-xl hidden phone:flex">
                                    250,000
                                </span>
                            </p>
                            <p className="text-xl font-bold phone:text-base">
                                DJ MINI
                            </p>
                            <div className="flex gap-2 items-center">
                                <AiFillStar className="text-yellow-500" />
                                <AiFillStar className="text-yellow-500" />
                                <AiFillStar className="text-yellow-500" />
                                <AiFillStar className="text-yellow-500" />
                                <AiOutlineStar />
                                (20)
                            </div>
                            <p className="text-pry font-semibold text-xl phone:hidden">
                                N250,000
                            </p>
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="text-lg font-bold text-pry phone:hidden">
                                    Product Details
                                </p>
                                <p className="truncate w-1/2 phone:hidden">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Vel inventore a dolorum
                                    dicta unde molestiae asperiores totam
                                    impedit. Suscipit, expedita eligendi minus
                                    optio sunt aliquam corrupti natus qui
                                    recusandae ex architecto repudiandae tenetur
                                    aperiam nisi cum, dolore eum libero et
                                    temporibus iste ullam sed. Vero sit
                                    blanditiis quod odio distinctio voluptate
                                    natus nam. Voluptas eaque ab, ratione nihil
                                    accusantium reprehenderit?
                                </p>
                            </div>
                            <div className="w-full flex gap-5">
                                <div className="w-max flex items-center gap-4">
                                    <p>Qty</p>
                                    <div className="flex items-center gap-4">
                                        <span className="w-6 h-6 phone:w-8 phone:h-8 border border-pry text-xl cursor-pointer flex items-center justify-center rounded">
                                            -
                                        </span>
                                        <span>2</span>
                                        <span className="w-6 h-6 phone:w-8 phone:h-8  border border-pry text-xl cursor-pointer flex items-center justify-center rounded">
                                            +
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p>Colour</p>
                                    <select
                                        name=""
                                        id=""
                                        className="border border-pry h-8"
                                    >
                                        <option value="">Black</option>
                                        <option value="">White</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-[50%] phone:w-full h-12 phone:h-14 phone:pt-2">
                                <button className="w-full h-full bg-pry rounded  text-white">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col ">
                        <div className="w-full h-max flex gap-5">
                            <div className="w-1/3 h-14 cursor-pointer border-b border-b-pry flex items-center justify-center">
                                Product Info
                            </div>
                            <div className="w-1/3 h-14 cursor-pointer border-b border-b-gray-300 flex items-center justify-center">
                                Specifications
                            </div>
                            <div className="w-1/3 h-14 cursor-pointer border-b border-b-gray-300 flex items-center justify-center">
                                Reviews
                            </div>
                        </div>
                        <div className="w-full h-max py-7">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellendus, recusandae
                                doloremque? Veniam tempore expedita, alias
                                aspernatur, voluptatem ab beatae eligendi
                                perferendis ipsam perspiciatis accusantium animi
                                non hic asperiores ipsum. Veritatis accusamus
                                tempore maxime beatae ullam! Ad eos nisi aut
                                maiores facilis fuga illo esse repellendus sed
                                assumenda cum, deserunt iure harum facere dicta
                                necessitatibus quasi, quis, numquam ducimus
                                possimus laudantium iste voluptatibus at magnam!
                                Asperiores est, eos veritatis, quaerat doloribus
                                atque ad in quasi exercitationem necessitatibus
                                quidem recusandae minus! Illum praesentium autem
                                ratione doloribus quo explicabo modi, delectus
                                quae minus? Necessitatibus aut dolores pariatur
                                laborum quibusdam deleniti ex sapiente sequi!
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ProductDetail;
