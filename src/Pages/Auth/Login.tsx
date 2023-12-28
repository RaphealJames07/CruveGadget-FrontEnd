
// import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
// import {useState} from "react";
// import axios from "axios";
// import {useDispatch} from "react-redux";
// import {curveGadgetUserLogin} from "../../Redux/Feature";
// import {useNavigate} from "react-router";
// // import Swal from "sweetalert2";
// import {LoadingOutlined} from "@ant-design/icons";
// import { toast } from "react-toastify";

// const Login = () => {
//     const dispatch = useDispatch();
//     const nav = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const handleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const [userData, setUserData] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [errMsg, setErrMsg] = useState({error: false, type: "", msg: ""});
//     const [inputErr, setInputErr] = useState(true);

//     const url = `https://e-gadget.onrender.com/api/sign-in`;
//     const data = {userData, password};

//     const handleLoginIn = (e:any) => {
//         toast.info('Loggin in...')
//         e.preventDefault();
//         setLoading(true);
//         if (!userData) {
//             setErrMsg({
//                 error: true,
//                 type: "noMailPhone",
//                 msg: "Input Your Email or Phone",
//             });
//             setLoading(false);
//             setInputErr(true);
//         } else if (!password) {
//             setErrMsg({
//                 error: true,
//                 type: "password",
//                 msg: "Enter Password",
//             });
//             setLoading(false);
//             setInputErr(true);
//         } else {
//             axios
//                 .post(url, data)
//                 .then((res) => {
//                     console.log(res);
//                     dispatch(curveGadgetUserLogin(res.data));
//                     toast.success("Log in Successful")
//                     nav("/Home");
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     const unVeriry = error?.response?.data?.message
//                     toast.error(`${error?.response?.data?.message}`)
                    
//                     if (unVeriry === 'Email Not Verified, Please verify your email to log in.'){
//                         nav('/ResendVerify')
//                     }
//                     setLoading(false);
//                 });
//         }
        
//     };

//     const handleForgetPwdNav = () =>{
//         nav('/ForgetPassword')
//     }

//     return (
//         <>
//             <div className="w-full h-full flex items-center justify-around flex-col rounded-md pt-4 pb-5 mt-5 px-5 bg-white">
//                 <div className="w-full h-[20%] flex flex-col justify-around">
//                     <h1 className="text-3xl">Hello There</h1>
//                     <p>Log In to get started</p>
//                 </div>
//                 <div className="w-full flex flex-col justify-around h-[60%]">
//                     <div className="w-full h-[40%]">
//                         <div className="flex w-full items-center justify-between h-[50%]">
//                             <label htmlFor="">Email / Phone</label>
//                             {errMsg.type === "noMailPhone" ? (
//                                 <p className="text-xs text-red-700">{errMsg.msg}</p>
//                             ) : null}
//                         </div>
//                         <div className="w-full h-[50%]">
//                             <input
//                                 className="w-full h-full rounded border-2 border-solid border-[#3F51B5]"
//                                 type="text"
//                                 placeholder="Input Email"
//                                 onChange={(e) => {
//                                     setUserData(e.target.value);
//                                     if (errMsg.type === "noMailPhone") {
//                                         setErrMsg((prevState) => ({
//                                             ...prevState,
//                                             error: false,
//                                             type: "",
//                                         }));
//                                     }
//                                 }}
//                                 value={userData}
//                                 style={{
//                                     border: `${
//                                         errMsg.type === "noMailPhone"
//                                             ? "2px solid red"
//                                             : ""
//                                     }`,
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     <div className="w-full h-[40%]">
//                         <div className="flex w-full justify-between items-center h-[50%]">
//                             <label htmlFor="">Password</label>
//                             {errMsg.type === "password" ? (
//                                 <p className="text-xs text-red-700">{errMsg.msg}</p>
//                             ) : null}
//                         </div>
//                         <div
//                             className="w-full flex rounded h-[50%] border-2 border-solid border-[#3F51B5]"
//                             style={{
//                                 border: `${
//                                     errMsg.type === "password"
//                                         ? "2px solid red"
//                                         : ""
//                                 }`,
//                             }}
//                         >
//                             <input
//                                 className="h-full w-[90%] border-none outline-none"
//                                 type={!showPassword ? "password" : "text"}
//                                 placeholder="Input Password"
//                                 value={password}
//                                 onChange={(e) => {
//                                     setInputErr(false)
//                                     setPassword(e.target.value);
//                                     if (errMsg.type === "password") {
//                                         setErrMsg((prevState) => ({
//                                             ...prevState,
//                                             error: false,
//                                             type: "",
//                                         }));
//                                     }
//                                 }}
//                             />
//                             <div
//                                 className="h-full flex items-center justify-center w-[10%]"
//                                 onClick={handleShowPassword}
//                             >
//                                 {showPassword ? (
//                                     <AiOutlineEyeInvisible className="cursor-pointer w-[80%] h-[80%]" />
//                                 ) : (
//                                     <AiOutlineEye className="cursor-pointer w-[80%] h-[80%]" />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full flex items-center justify-center h-[15%]">
//                     <button onClick={(e) => handleLoginIn(e)} disabled={inputErr} className="w-full cursor-pointer bg-indigo-700 rounded text-white border-none h-[80%] disabled:bg-pry disabled:cursor-not-allowed">
//                         {loading ? (
//                             <LoadingOutlined
//                                 style={{
//                                     fontSize: 24,
//                                 }}
//                                 spin
//                             />
//                         ) : (
//                             "Login"
//                         )}
//                     </button>
//                 </div>
//                 <div className="w-full flex justify-end m-2 h-[5%]">
//                     <p onClick={handleForgetPwdNav} style={{cursor:'pointer'}}>Forget Password?</p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;

import React, { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { curveGadgetUserLogin } from "../../Redux/Feature";
import { useNavigate } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [userData, setUserData] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<{ error: boolean; type: string; msg: string }>({
    error: false,
    type: "",
    msg: "",
  });
  const [inputErr, setInputErr] = useState<boolean>(true);

  const url = `https://e-gadget.onrender.com/api/sign-in`;
  const data = { userData, password };

  const handleLoginIn = (e: SyntheticEvent) => {
    e.preventDefault();
    // toast.info('Logging in...');
    setLoading(true);

    if (!userData) {
      setErrMsg({
        error: true,
        type: "noMailPhone",
        msg: "Input Your Email or Phone",
      });
      setLoading(false);
      setInputErr(true);
    } else if (!password) {
      setErrMsg({
        error: true,
        type: "password",
        msg: "Enter Password",
      });
      setLoading(false);
      setInputErr(true);
    } else {
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          dispatch(curveGadgetUserLogin(res.data));
          toast.success("Log in Successful");
          nav("/Home");
        })
        .catch((error) => {
          console.log(error);
          const unVerify = error?.response?.data?.message;
          toast.error(`${error?.response?.data?.message}`);

          if (unVerify === 'Email Not Verified, Please verify your email to log in.') {
            nav('/ResendVerify');
          }
          setLoading(false);
        });
    }
  };

  const handleForgetPwdNav = () => {
    nav('/ForgetPassword');
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-around flex-col rounded-md pt-4 pb-5 mt-5 px-5 bg-white">
        <div className="w-full h-[20%] flex flex-col justify-around">
          <h1 className="text-3xl">Hello There</h1>
          <p>Log In to get started</p>
        </div>
        <div className="w-full flex flex-col justify-around h-[60%]">
          <div className="w-full h-[40%]">
            <div className="flex w-full items-center justify-between h-[50%]">
              <label htmlFor="">Email / Phone</label>
              {errMsg.type === "noMailPhone" ? (
                <p className="text-xs text-red-700">{errMsg.msg}</p>
              ) : null}
            </div>
            <div className="w-full h-[50%]">
              <input
                className={`w-full h-full rounded border-2 border-solid border-[#3F51B5] ${
                  errMsg.type === "noMailPhone" ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Input Email"
                onChange={(e) => {
                  setUserData(e.target.value);
                  if (errMsg.type === "noMailPhone") {
                    setErrMsg((prevState) => ({
                      ...prevState,
                      error: false,
                      type: "",
                    }));
                  }
                }}
                value={userData}
              />
            </div>
          </div>

          <div className="w-full h-[40%]">
            <div className="flex w-full justify-between items-center h-[50%]">
              <label htmlFor="">Password</label>
              {errMsg.type === "password" ? (
                <p className="text-xs text-red-700">{errMsg.msg}</p>
              ) : null}
            </div>
            <div
              className={`w-full flex rounded h-[50%] border-2 border-solid border-[#3F51B5] ${
                errMsg.type === "password" ? "border-red-500" : ""
              }`}
            >
              <input
                className="h-full w-[90%] border-none outline-none"
                type={!showPassword ? "password" : "text"}
                placeholder="Input Password"
                value={password}
                onChange={(e) => {
                  setInputErr(false);
                  setPassword(e.target.value);
                  if (errMsg.type === "password") {
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
        </div>
        <div className="w-full flex items-center justify-center h-[15%]">
          <button
            onClick={(e) => handleLoginIn(e)}
            disabled={inputErr}
            className="w-full cursor-pointer bg-indigo-700 rounded text-white border-none h-[80%] disabled:bg-pry disabled:cursor-not-allowed"
          >
            {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className="w-full flex justify-end m-2 h-[5%]">
          <p onClick={handleForgetPwdNav} style={{ cursor: 'pointer' }}>
            Forget Password?
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

