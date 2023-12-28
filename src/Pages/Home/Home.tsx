import DealOfWeek from "../../Components/DealOfWeek";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PopularCategories from "../../Components/PopularCategories";

const Home = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="pt-20">
                    <div className="bgimg w-full h-[600px] bg-cover bg-center flex items-center px-20">
                        <div className="w-max h-max text-pry flex flex-col gap-10">
                            <h1 className="text-5xl font-bold">
                                Find your best{" "}
                                <span className="text-white">Gadgets</span> with{" "}
                                <span className="text-white">Us!</span>
                            </h1>
                            <p className="text-white">
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
                    <DealOfWeek/>
                    <PopularCategories/>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
