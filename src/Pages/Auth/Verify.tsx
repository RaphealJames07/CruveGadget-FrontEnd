import Logo from "../../assets/Logo.png";
import {useRef, useState} from "react";
// import "./Verify.css";
import {Modal} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import {  useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
    const nav = useNavigate()
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [modalVisible, setModalVisible] = useState(false);
    
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    


    const focusNextInput = (currentIndex) => {
        if (currentIndex < inputRefs.length - 1) {
            inputRefs[currentIndex + 1].current.focus();
        }
    };

    const handleInputChange = (e, currentIndex) => {
        const {value} = e.target;

        if (!/^[0-9]+$/.test(value)) {
            showModal();
            return;
        }

        if (currentIndex === 0) {
            setInputValue1(value);
        } else if (currentIndex === 1) {
            setInputValue2(value);
        } else if (currentIndex === 2) {
            setInputValue3(value);
        } else if (currentIndex === 3) {
            setInputValue4(value);
        }else if (currentIndex === 4) {
            setInputValue5(value);
            setInputErr(false)
        }

        if (value && currentIndex < inputRefs.length - 1) {
            focusNextInput(currentIndex);
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        if (/^\d{5}$/.test(pastedText)) {
            const digits = pastedText.split("");

            inputRefs.forEach((inputRef, index) => {
                if (index < digits.length) {
                    inputRef.current.value = digits[index];

                    if (index === 0) {
                        setInputValue1(digits[index]);
                    } else if (index === 1) {
                        setInputValue2(digits[index]);
                    } else if (index === 2) {
                        setInputValue3(digits[index]);
                    } else if (index === 3) {
                        setInputValue4(digits[index]);
                    } else if (index === 4) {
                        setInputValue5(digits[index]);
                        setInputErr(false)
                    }
                }
            });

            if (digits.length > 0) {
                focusNextInput(digits.length - 1);
            }
        }
    };

    const handleKeyDown = (e, currentIndex) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            if (currentIndex > 0) {
                inputRefs[currentIndex - 1].current.focus();
            } else {
                inputRefs[currentIndex].current.focus();
            }

            inputRefs[currentIndex].current.value = "";

            // Clear the corresponding inputValue state variable based on the currentIndex
            if (currentIndex === 0) {
                setInputValue1("");
                setInputErr(true)
            } else if (currentIndex === 1) {
                setInputValue2("");
                setInputErr(true)
            } else if (currentIndex === 2) {
                setInputValue3("");
                setInputErr(true)
            } else if (currentIndex === 3) {
                setInputValue4("");
                setInputErr(true)
            } else if (currentIndex === 4) {
                setInputValue5("");
                setInputErr(true)
            }
        }
    };

    const otp = `${inputValue1}${inputValue2}${inputValue3}${inputValue4}${inputValue5}`;
    console.log("Verification Code:", otp);

    const [loading, setLoading] = useState(false);
    const [inputErr, setInputErr] = useState(true);
    const {token} = useParams()
    console.log(token);
    const data = {otp}
    const url = `https://e-gadget.onrender.com/api/user/verify/${token}`;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    console.log(email);

    const HandleVerify = (e) => {
        e.preventDefault();
        setLoading(true)
        axios
             .post(url, data)
             .then((res)=>{
                console.log(res);
                setTimeout(() => {
                   toast.success("Account Verified Successfully")
                
               }, 3000);
                nav('/Auth')
             })
             .catch((error)=>{
                console.log(error);
               
                    toast.error(`${error.response.data.message}`)
               
                setLoading(false)
             })
    };

    const handleBackTo = () =>{
        nav('/Auth')
    }

    function hideEmail(email) {
        const [username, domain] = email.split('@');
        const hiddenUsername = username.slice(0, 2) + '*'.repeat(username.length - 2);
        const maskedEmail = `${hiddenUsername}@${domain}`;
        return maskedEmail;
    }
    
    
    const maskedEmail = hideEmail(email);
    

    return (
        <>
            <div className="w-full h-screen bg-gray-200 flex justify-center">
                <div className="w-[90%] h-full">
                    <div className="w-full h-[8%]">
                        <img src={Logo} alt="" className="w-20 h-full"/>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col h-[80%] ph:h-[90%]">
                        <div className="w-3/5 flex flex-col justify-around items-center h-1/2 ph:h-[60%] ph:w-[90%]">
                            <h1 className="text-3xl ph:w-full ph:text-center">Authenticate Your Account!</h1>
                            <p className="text-center text-sm w-4/5 ph:w-full">
                                Protecting your account is our top priority,
                                please verify your account by entering the
                                authorization code sent to {maskedEmail}
                            </p>
                            <div
                                style={{display: "flex", fontSize: "30px"}}
                                className="flex justify-between w-[30%] h-[15%] ph:h-[10%] ph:w-[60%]"
                                onPaste={handlePaste}
                            >
                                {inputRefs.map((inputRef, index) => (
                                    <input
                                        className="flex pl-4 text-base w-[18%] outline-none border-none border-b-2 border-b-slate-900"
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={inputRef}
                                        onChange={(e) =>
                                            handleInputChange(e, index)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        onInput={(e) => {
                                            const newValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ""
                                                );
                                            e.target.value = newValue;
                                            handleInputChange(e, index);
                                        }}
                                    />
                                ))}
                            </div>
                            <button className="bg-indigo-700 w-40 h-12 rounded text-white text-base cursor-pointer border-none disabled:bg-indigo-400 disabled:cursor-not-allowed" onClick={(e)=>HandleVerify(e)} disabled={inputErr}>
                                {loading ? (
                                    <LoadingOutlined
                                        style={{
                                            fontSize: 24,
                                        }}
                                        spin
                                    />
                                ) : (
                                    "Verify"
                                )}
                            </button>
                            <p className="ph:w-full ph:text-center">
                                it may take a minute to receive your code, haven
                                {"'"}t received it?{" "}
                                <span
                                    style={{
                                        color: "#3F51B5",
                                        cursor: "pointer",
                                    }}
                                >
                                    Resend a new code.
                                </span>
                            </p>
                        </div>
                        <div className="w-full flex items-center justify-center h-[10%]">

                    <button onClick={handleBackTo} className="w-32 h-12 rounded-md cursor-pointer text-sm bg-none border-2 border-solid border-[#3F51B5]">Back to Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Invalid Input"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                The code sent to your email should contain 4 digit numbers only.
                No alphabets or special characters are allowed. Please check and
                try again.
            </Modal>
        </>
    );
};

export default Verify;
