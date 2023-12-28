import {useState} from "react";
import Logo from "../../assets/Logo.png";
// import "./ResendVerify.css";
import axios from "axios";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

const ResendResendVerify = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(true);
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        msg: "",
        multipleErr: "",
    });
    const nav = useNavigate();

    const data = {email};
    const url = `https://e-gadget.onrender.com/api/user/resend-verification-otp`;

    const HandleResendVerify = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email) {
            setErrMsg({
                error: true,
                type: "noMail",
                msg: "Input your Email",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else if (!email.includes("@")) {
            setErrMsg({
                error: true,
                type: "no@",
                msg: "Email must contain @",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else {
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    setLoading(false);

                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        html: "<h3>Code Resent Successfully <p>Check Your mail for code </p></h3>",
                        timer: "5000",
                    });
                    const token = res.data.token;
                    const emailTo = email;
                    nav(`/Verify/${token}?email=${emailTo}`);
                })
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: `${error.response.data.message}`,
                        timer: "8000",
                    });
                    setLoading(false);
                });
        }
    };

    const handleBackTo = () => {
        nav("/");
    };

    return (
        <>
            <div className="w-full h-screen bg-gray-200 flex justify-center">
                <div className="h-full w-[90%]">
                    <div className="w-full h-[8%]">
                        <img
                            src={Logo}
                            alt=""
                            className="h-full w-[8%] phone:w-32 object-contain"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center h-[80%]">
                        <div className="w-[50%] phone:w-[90%] flex flex-col justify-around items-center h-[60%] phone:h-[70%] bg-white">
                            <div className="w-full flex items-center justify-around flex-col h-1/2">
                                <label htmlFor="email">
                                    Input Email for verification code
                                </label>
                                <input
                                    className="w-[70%] phone:w-[90%] h-10 pl-2 rounded outline-none border border-solid border-[#3F51B5]"
                                    style={{
                                        border: `${
                                            errMsg.multipleErr === "mailErrMul"
                                                ? "1px solid red"
                                                : ""
                                        }`,
                                    }}
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setInputError(false);
                                        if (
                                            errMsg.multipleErr === "mailErrMul"
                                        ) {
                                            setErrMsg((prevState) => ({
                                                ...prevState,
                                                error: false,
                                                multipleErr: "",
                                                type: "",
                                            }));
                                        }
                                    }}
                                />
                                {errMsg.type === "noMail" ? (
                                    <p style={{color: "red"}}>{errMsg.msg}</p>
                                ) : null}
                                {errMsg.type === "no@" ? (
                                    <p style={{color: "red"}}>{errMsg.msg}</p>
                                ) : null}
                            </div>
                            <div className="w-full flex items-center justify-center h-1/2">
                                <button
                                    className="bg-indigo-700 w-40 h-12 rounded text-white text-base cursor-pointer border-none disabled:cursor-not-allowed disabled:bg-indigo-400"
                                    onClick={(e) => HandleResendVerify(e)}
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
                                        "Resend Code"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center h-[10%]">
                        <button
                            className="w-40 h-12 rounded text-indigo-700 text-base cursor-pointer bg-white border border-solid border-[#3F51B5]"
                            onClick={handleBackTo}
                        >
                            Back To Sign In
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResendResendVerify;
