import Logo from "../../assets/Logo.png";
// import "./SuccessVerify.css";

const VerifySuccess = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#f5f5f5] flex justify-center">
                <div className="w-[90%] h-full">
                    <div className="w-full h-[8%]">
                        <img
                            src={Logo}
                            alt=""
                            className="w-[8%] ph:w-20 h-full object-contain"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center h-[80%]">
                        <div className="w-2/5 ph:w-[90%] flex flex-col justify-around items-center h-[50%] bg-white">
                            <h1 className="text-3xl">Congratulations</h1>
                            <p className="text-lg font-normal text-center">
                                Welcome To Curve
                                <span style={{color: "#3F51B5"}}>Gadgets. </span>
                                 account created successful
                            </p>
                            {/* <p className="text-xl">Log in your account to start shopping with your details or continue </p> */}
                            <button className="bg-indigo-700 w-40 h-12 rounded text-white text-base cursor-pointer border-none">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifySuccess;
