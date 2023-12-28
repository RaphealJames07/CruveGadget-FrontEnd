// import "./SIgnUp.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useEffect, useState} from "react";
import { FcCheckmark } from 'react-icons/fc'
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";
// import Swal from "sweetalert2";
import Flag from "../../assets/flag.svg";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [process, setProcess] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPasswordC, setShowPasswordC] = useState(false);
    const handleShowPasswordC = () => {
        setShowPasswordC(!showPasswordC);
    };
    const[quanVal, setQuanVal] = useState(false)
    const[uppCaseVal, setUppCaseVal] = useState(false)
    const[lowCaseVal, setLowCaseVal] = useState(false)
    const[numVal, setNumVal] = useState(false)
    const[specCharVal, setSpecCharVal] = useState(false)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        message: "",
        multipleErr: "",
        div: "",
    });
    // const [trackDiv, setTrackDiv] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputErr, setInputErr] = useState(true);
    const [backErr, setBackErr] = useState("");
    // console.log(backErr);

    const data = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        confirmPassword,
    };
    const url = "https://e-gadget.onrender.com/api/sign-up";
    const nav = useNavigate();

    const handleInputChange = (e:any, inputType:any) => {
        const inputValue = e.target.value;

        // Reset error styles when input value changes
        setErrMsg((prevState) => ({
            ...prevState,
            error: false,
            type: "",
            message: "",
            multipleErr: "",
            div: "",
        }));

        // Set the input value based on the inputType
        switch (inputType) {
            case "firstName":
                setFirstName(inputValue);
                break;
            case "lastName":
                setLastName(inputValue);
                break;
            case "email":
                setEmail(inputValue);
                break;
            case "phone":
                setPhoneNumber(inputValue);
                break;
            case "password":
                setPassword(inputValue);
                break;
            case "confirmPassword":
                setConfirmPassword(inputValue);
                break;
            default:
                break;
        }
    };
    const [phoneDivError, setPhoneDivError] = useState(false);
    const [passwordDivError, setPasswordDivError] = useState(false);
    const [confirmPasswordDivError, setConfirmPasswordDivError] =
        useState(false);

    const HandleSignUp = (e:any) => {
        console.log("Signing Up...");
        e.preventDefault();
        setErrMsg({error: false, type: "", message: "", multipleErr: "", div:''});
        setPhoneDivError(false);
        setPasswordDivError(false);
        setConfirmPasswordDivError(false);
        if (!firstName) {
            setErrMsg({
                error: true,
                type: "firstName",
                message: "Enter Name",
                multipleErr: "firstName",
                div: "firstName",
            });
            // setErrMsg('');

            setLoading(false);
            setInputErr(false);
        } else if (!lastName) {
            setErrMsg({
                error: true,
                type: "lastName",
                message: "Enter Name",
                multipleErr: "lastName",
                div: "lastName",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!email) {
            setErrMsg({
                error: true,
                type: "email",
                message: "Input Email Address",
                multipleErr: "email",
                div: "email",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!email.includes("@")) {
            setErrMsg({
                error: true,
                type: "email@",
                message: "email must include @",
                multipleErr: "email",
                div: "email",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!phoneNumber) {
            setErrMsg({
                error: true,
                type: "phoneNumber",
                message: "Enter Phone Number",
                multipleErr: "phone",
                div: "phone",
            });

            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (phoneNumber.length < 11) {
            setErrMsg({
                error: true,
                type: "phoneLength",
                message: "Phone No Must be 11 digits",
                multipleErr: "phone",
                div: "phone",
            });
            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (!/^\d+$/.test(phoneNumber)) {
            setErrMsg({
                error: true,
                type: "phoneAlpha",
                message: "No Alphabets allowed",
                multipleErr: "phone",
                div: "phone",
            });
            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (password.length < 7) {
            setErrMsg({
                error: true,
                type: "passwordSmall",
                message: "must be 8 characters long",
                multipleErr: "password",
                div: "password",
            });
            setPasswordDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (password !== confirmPassword) {
            setErrMsg({
                error: true,
                type: "passwordMatch",
                message: "password does not match",
                multipleErr: "confirmPassword",
                div: "confirmPassword",
            });
            setConfirmPasswordDivError(true);
            setLoading(false);
            setInputErr(false);
        } else {
            setPhoneDivError(false);
            setPasswordDivError(false);
            setConfirmPasswordDivError(false);
            setLoading(true);
            setInputErr(true);
            setErrMsg({error: false, type:'', message:'', multipleErr:'', div:''});
            axios
                .post(url, data)
                .then((res) => {
                    toast.success("Account Created Successfully")
                    console.log(res);
                    setLoading(false);
                    setInputErr(false);
                    const token = res.data.data.token;
                    const email = res.data.data.email;
                    setTimeout(() => {
                     nav(`/Verify/${token}?email=${email}`);
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error);
                    const errorMessage = error?.response?.data?.message;
                    setBackErr(errorMessage);
                    setLoading(false);
                    setInputErr(false);
                    toast.error(`${errorMessage}`)
                });
        }

        useEffect(() => {
            setBackErr("");
        }, []);
    };

    useEffect(() => {
        if (!/[A-Z]/.test(password)) {
            setUppCaseVal(true);
            setInputErr(true)
        } else {
            setUppCaseVal(false); 
        }
    
        if (!/[a-z]/.test(password)) {
            setLowCaseVal(true);
            setInputErr(true)
        } else {
            setLowCaseVal(false); 
        }
    
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setSpecCharVal(true);
            setInputErr(true)
        } else {
            setSpecCharVal(false); 
        }
    
        if (!password.split('').some(char => '0123456789'.includes(char))) {
            setNumVal(true);
            setInputErr(true)
        } else {
            setNumVal(false); 
        }
    
        if (password.length < 7) {
            setQuanVal(true);
            setInputErr(true)
        } else {
            setQuanVal(false); 
        }
    }, [password]);
    

    return (
        <>
            <div className="w-full h-full flex items-center justify-around flex-col rounded-md pt-4 pb-5 mt-2 bg-white px-5 ">
                <div className="w-full flex flex-col justify-between h-[10%]">
                    <h1 className="font-medium text-2xl">Hello There</h1>
                    <p>Create an account to get started</p>
                </div>
                <div className="w-full flex flex-col justify-between h-[75%]">
                    <div className="w-full flex justify-between h-[18%]">
                        <div className="w-[48%] h-full">
                            <div className="w-full flex items-center justify-between h-[50%]">
                                <label htmlFor="">First Name</label>
                                {errMsg.type === "firstName" ? (
                                    <p className="text-xs text-red-700">{errMsg.message}</p>
                                ) : null}
                            </div>
                            <div className="w-full h-[50%]">
                                <input
                                    className="w-full h-full pl-2 rounded border-pry border border-solid"
                                    type="text"
                                    placeholder="Input First Name"
                                    value={firstName}
                                    onChange={(e) =>
                                        handleInputChange(e, "firstName")
                                    } // Pass input type to handleInputChange
                                    style={{
                                        border: `${
                                            errMsg.type === "firstName"
                                                ? "2px solid red"
                                                : ""
                                        }`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-[48%] h-full">
                            <div className="w-full h-[50%] flex items-center justify-between">
                                <label htmlFor="">Last Name</label>
                                {errMsg.type === "lastName" ? (
                                    <p className="text-xs text-red-700">{errMsg.message}</p>
                                ) : null}
                            </div>
                            <div className="w-full h-1/2">
                                <input
                                    className="w-full h-full pl-2 rounded border-pry border border-solid"
                                    type="text"
                                    placeholder="Input Last Name"
                                    value={lastName}
                                    onChange={(e) =>
                                        handleInputChange(e, "lastName")
                                    } // Pass input type to handleInputChange
                                    style={{
                                        border: `${
                                            errMsg.type === "lastName"
                                                ? "2px solid red"
                                                : ""
                                        }`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[18%]">
                        <div className="flex w-full items-center justify-between h-1/2">
                            <label htmlFor="">Email Address</label>
                            {errMsg.type === "email" ? (
                                <p className="text-xs text-red-700 block">{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "email@" ? (
                                <p className="text-xs text-red-700 block">{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div className="w-full h-1/2">
                            <input
                                className="w-full h-full pl-2 rounded border-pry border border-solid"
                                type="email"
                                placeholder="Input Email"
                                value={email}
                                onChange={(e) => handleInputChange(e, "email")}
                                style={{
                                    border: `${
                                        errMsg.multipleErr === "email"
                                            ? "2px solid red"
                                            : ""
                                    }`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full h-[18%]">
                        <div className="flex w-full items-center justify-between h-1/2">
                            <label htmlFor="">Phone Number</label>
                            {errMsg.type === "phoneNumber" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}

                            {errMsg.type === "phoneAlpha" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "phoneLength" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="w-full flex rounded h-1/2 border-pry border border-solid"
                            style={{
                                border: `${
                                    phoneDivError ? "2px solid red" : ""
                                }`,
                            }}
                        >
                            <div className="w-1/5 h-full flex items-center justify-center text-sm">
                                <img src={Flag} alt="" className="w-2/5 h-1/2" /> <span>+234</span>
                            </div>

                            <input
                                className="w-4/5 h-full rounded border-none outline-none"
                                type="tel"
                                placeholder="Input Number"
                                value={phoneNumber}
                                maxLength={11}
                                onChange={(e) => {
                                    handleInputChange(e, "phone");
                                    setPhoneDivError(false);
                                }}
                            />
                        </div>
                    </div>
                    <span style={{display: "none"}}>{backErr}</span>
                    <div className="w-full h-[18%]">
                        <div className="flex w-full justify-between items-center h-1/2">
                            <label htmlFor="">Password</label>
                            {errMsg.type === "password" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "passwordSmall" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="w-full flex rounded h-1/2 border-pry border border-solid"
                            style={{
                                border: `${
                                    passwordDivError ? "2px solid red" : ""
                                }`,
                            }}
                        >
                            <input
                                className="w-[90%] h-full border-none outline-none"
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                                value={password}
                                onFocus={() => setProcess(true)}
                                onBlur={() => {
                                    !password
                                        ? setProcess(false)
                                        : setProcess(true);
                                }}
                                onChange={(e) => {
                                    handleInputChange(e, "password");
                                    setPasswordDivError(false);
                                }}
                            />
                            <div
                                className="h-full flex items-center justify-center w-[10%]"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="w-[80%] h-[80%] cursor-pointer" />
                                ) : (
                                    <AiOutlineEye className="w-[80%] h-[80%] cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[18%]">
                        <div className="flex w-full justify-between items-center h-1/2">
                            <label htmlFor="">Confirm Password</label>
                            {errMsg.type === "passwordMatch" ? (
                                <p className="text-xs text-red-700">{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="w-full flex rounded h-1/2 border-pry border border-solid"
                            style={{
                                border: `${
                                    confirmPasswordDivError
                                        ? "2px solid red"
                                        : ""
                                }`,
                            }}
                        >
                            <input
                                className="h-full w-[90%] outline-none border-none"
                                type={!showPasswordC ? "password" : "text"}
                                placeholder="Confirm Your Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    handleInputChange(e, "confirmPassword");
                                    setConfirmPasswordDivError(false);
                                    setInputErr(false);
                                }}
                            />
                            <div
                                className="h-full flex justify-center items-center"
                                onClick={handleShowPasswordC}
                            >
                                {showPasswordC ? (
                                    <>
                                        <AiOutlineEyeInvisible className="w-[80%] h-[80%] cursor-pointer" />
                                    </>
                                ) : (
                                    <AiOutlineEye className="w-[80%] h-[80%] cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center h-[10%]">
                    <button
                        onClick={(e) => HandleSignUp(e)}
                        disabled={loading || inputErr}
                        className="w-full cursor-pointer bg-indigo-700 rounded text-white border-none h-[80%] disabled:cursor-not-allowed disabled:bg-indigo-400"
                    >
                        {loading ? (
                            <LoadingOutlined
                                style={{
                                    fontSize: 24,
                                }}
                                spin
                            />
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </div>
            </div>
            {process ? (
                <div className="fixed w-[300px] h-[350px] right-[7%] bottom-[10%] ph:hidden">
                    <div className="w-full flex font-bold h-[10%] text-black">
                        <span>Your Password must contain</span>
                    </div>
                    <div className="w-full flex flex-col h-[80%] pl-3 gap-[10px]">
                        <div className="flex items-center gap-3">
                            <span className="text-base font-medium rounded-sm" style={{color: `${uppCaseVal ? 'red': 'green'}`}}>
                                UpperCase(A-Z)
                            </span>
                            {uppCaseVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-base font-medium rounded-sm" style={{color: `${lowCaseVal ? 'red': 'green'}`}}>
                                LowerCase(a-z)
                            </span>
                            {lowCaseVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-base font-medium rounded-sm" style={{color: `${specCharVal ? 'red': 'green'}`}}>
                                Special Characters
                            </span>
                            {specCharVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-base font-medium rounded-sm" style={{color: `${numVal ? 'red': 'green'}`}}>
                                Number(0-9)
                            </span>
                            {numVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-base font-medium rounded-sm" style={{color: `${quanVal ? 'red': 'green'}`}}>
                                7+ characters
                            </span>
                            {quanVal === false ? <FcCheckmark /> : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default SignUp;
