

import {useState} from "react";
import Logo from "../../assets/Logo.png";
// import "./ResetPwd.css";
import axios from "axios";
import {  useLocation} from "react-router";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ResetPassword = () => {
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [showPasswordC, setShowPasswordC] = useState(false);
    const handleShowPasswordC = () => {
        setShowPasswordC(!showPasswordC);
    };

    const [newPassword, setNewPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(true);
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        msg: "",
        multipleErr: "",
    });
    const data = {newPassword};
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    // console.log(token);
    const url = `https://e-gadget.onrender.com/api/user/reset-password/${token}`;

    const handleResetPwd = (e) => {
        e.preventDefault(e);
        setLoading(true);
        if (!newPassword) {
            setErrMsg({
                error: true,
                type: "password",
                msg: "Input your Password",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else if (newPassword !== cPassword) {
            setErrMsg({
                error: true,
                type: "noMatch",
                msg: "Password does not Match",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else {
            setLoading(true)
            setInputError(true)
            axios.post(url, data)
                .then((res)=>{
                    console.log(res);
                    setLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: "Error",
                        text:  `Password reset Successfully, Please login`,
                        timer: '5000'
                    });
                })
                .catch((error)=>{
                    console.log(error);
                    setLoading(false)
                    const expToken = error.response.data.message
                    if (expToken === 'jwt expired'){
                        Swal.fire({
                            icon: 'error',
                            title: "Error",
                            text:  `Token Expired, please request another one`,
                            timer: '5000'
                        });
                    }else {
                        Swal.fire({
                            icon: 'error',
                            title: "Error",
                            text:  `${error.response.data.message}`,
                            timer: '5000'
                        });
                    }
                })
        }
    };

    const handleBackto = () =>{
        nav('/')
    }

    return (
        <>
            <div className="w-full h-screen bg-gray-200 flex justify-center">
                <div className="h-full w-[90%]">
                    <div className="w-full h-[8%]">
                        <img
                            src={Logo}
                            alt=""
                            className="h-full w-[8%] ph:w-20 object-contain"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col h-[80%]">
                        <h1>Forgot Your Password?</h1>
                        <div className="flex flex-col justify-around items-center mt-5 w-[30%] ph:w-[100%] h-[50%] ph:h-[60%] bg-white">
                            <div className="w-full flex items-center justify-around flex-col p-2 h-[70%]">
                                <div className="w-full flex flex-col rounded h-[40%]">
                                    <p
                                        className="mb-1"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        Input New Password
                                        {errMsg.type === "password" ? (
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                enter Password
                                            </span>
                                        ) : null}
                                    </p>
                                    <div
                                        className="w-full flex items-center justify-around p-2 border-pry border-2 rounded"
                                        style={{
                                            border: `${
                                                errMsg.type === "password"
                                                    ? "2px solid red"
                                                    : ""
                                            }`,
                                        }}
                                    >
                                        <input
                                            className="h-full pl-2 w-[90%] border-none outline-none"
                                            type={
                                                !showPassword
                                                    ? "password"
                                                    : "text"
                                            }
                                            placeholder="Input Password"
                                            value={newPassword}
                                            onChange={(e) => {
                                                
                                                setNewPassword(e.target.value);
                                                if (
                                                    errMsg.type === "password"
                                                ) {
                                                    setErrMsg((prevState) => ({
                                                        ...prevState,
                                                        error: false,
                                                        type: "",
                                                    }));
                                                }
                                            }}
                                        />
                                         <div
                                className="h-full flex items-center justify-center w-[10%]"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="cursor-pointer w-[80%] h-[80%]" />
                                ) : (
                                    <AiOutlineEye className="cursor-pointer w-[80%] h-[80%]" />
                                )}
                            </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col rounded">
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                        className="mb-1"
                                    >
                                        Confirm Password
                                        {errMsg.type === "noMatch" ? (
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {errMsg.msg}
                                            </span>
                                        ) : null}
                                    </p>
                                    <div
                                        className="w-full h-[90%] flex items-center justify-around p-2 border-pry border-2 rounded"
                                        style={{
                                            border: `${
                                                errMsg.type === "noMatch"
                                                    ? "2px solid red"
                                                    : ""
                                            }`,
                                        }}
                                    >
                                        <input
                                            className="h-full pl-2 w-[90%] border-none outline-none"
                                            type={
                                                !showPasswordC
                                                    ? "password"
                                                    : "text"
                                            }
                                            placeholder="Input Password"
                                            value={cPassword}
                                            onChange={(e) => {
                                                setInputError(false);
                                                setCPassword(e.target.value);
                                                if (
                                                    errMsg.type === "noMatch"
                                                ) {
                                                    setErrMsg((prevState) => ({
                                                        ...prevState,
                                                        error: false,
                                                        type: "",
                                                    }));
                                                }
                                            }}
                                        />
                                         <div
                                className="h-full flex items-center justify-center w-[10%]"
                                onClick={handleShowPasswordC}
                            >
                                {showPasswordC ? (
                                    <AiOutlineEyeInvisible className="cursor-pointer w-[80%] h-[80%]" />
                                ) : (
                                    <AiOutlineEye className="cursor-pointer w-[80%] h-[80%]" />
                                )}
                            </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full flex items-center justify-center disabled:bg-indigo-400 disabled:cursor-not-allowed">
                                <button
                                    className="bg-indigo-700 w-40 h-12 rounded text-white text-base cursor-pointer border-none disabled:cursor-not-allowed disabled:bg-indigo-400"
                                    onClick={(e) => handleResetPwd(e)}
                                    disabled={inputError}
                                >
                                    {loading ? (
                                        <LoadingOutlined
                                            style={{
                                                fontSize: 24,
                                            }}
                                            spin
                                        />
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center h-[10%]">
                        <button className="w-40 h-12 rounded text-indigo-700 text-base cursor-pointer bg-white border border-solid border-[#3F51B5]" onClick={handleBackto}>Back To Sign In</button> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
