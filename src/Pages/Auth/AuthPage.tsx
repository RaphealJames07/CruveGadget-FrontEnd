import "./AuthPage.css";
import Logo from "../../assets/Logo.png";
import {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthPage = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [signUp, setSignUp] = useState<boolean>(false);

    const showLogin = () => {
        setLogin(true);
        setSignUp(false);
    };

    const showSignUp = () => {
        setSignUp(true);
        setLogin(false);
    };

    return (
        <>
            <div className="w-full h-screen bg-[#F5F5F5] flex justify-center">
                <div className="w-[90%] h-full">
                    <div className="w-full h-[8%]">
                        <img src={Logo} alt="" className="w-32 h-full" />
                    </div>
                    <div className="w-full flex items-center justify-center h-[92%]">
                        <div className="bg-gray-200 rounded flex flex-col items-center w-[35%] phone:w-[100%] h-[95%] py-[10px] px-[20px]">
                            <div className="bg-gray-400 flex justify-between p-1 rounded-sm w-[85%] h-[9%]">
                                <div
                                    className="h-full flex items-center justify-center rounded-sm cursor-pointer text-sm text-white w-[48%]"
                                    onClick={showSignUp}
                                    style={{
                                        background: `${
                                            signUp ? "#3F51B5" : "#fff"
                                        }`,
                                        color: `${signUp ? "white" : "black"}`,
                                    }}
                                >
                                    Create Account
                                </div>
                                <div
                                    className="h-full flex items-center justify-center rounded bg-gray-400 cursor-pointer text-sm text-indigo-700 w-[48%]"
                                    onClick={showLogin}
                                    style={{
                                        background: `${
                                            login ? "#3F51B5" : "#fff"
                                        }`,
                                        color: `${login ? "white" : "black"}`,
                                    }}
                                >
                                    Login
                                </div>
                            </div>
                            <div
                                className={`LoginContentDown ${
                                    login ? "" : "lgnhidden"
                                }`}
                            >
                                <Login />
                            </div>
                            <div
                                className={`SignUpContentDown ${
                                    signUp ? "" : "sgnhidden"
                                }`}
                            >
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
