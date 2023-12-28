import BestApple from "../../Components/BestApple";
import DealOfWeek from "../../Components/DealOfWeek";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import OurServices from "../../Components/OurServices";
import PopularCategories from "../../Components/PopularCategories";
import Recomemded from "../../Components/Recomemded";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="pt-20">
                    <div className="bgimg w-full h-[600px] phone:h-[400px] bg-cover bg-center flex items-center px-20 phone:px-5">
                        <div className="w-max h-max text-pry flex flex-col gap-10 phone:gap-5">
                            <h1 className="text-5xl phone:text-2xl font-bold w-[80%]">
                                Find your best{" "}
                                <span className="text-white">Gadgets</span> with{" "}
                                <span className="text-white">Us!</span>
                            </h1>
                            <p className="text-white phone:text-white phone:text-bold">
                                Let us help you choose you latest trends of
                                gadgets and devices, seamless experience and
                                quality assured gadgets
                            </p>
                            <button className="w-max h-max px-8 py-4 text-white bg-pry rounded-md">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max bg-white py-10 ">
                    <DealOfWeek />
                    <PopularCategories />
                    <Recomemded />
                    <BestApple/>
                    <Testimonials/>
                    <OurServices/>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
