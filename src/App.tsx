import {HashRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
// import Home from "./Pages/Home/Home";
import AuthPage from "./Pages/Auth/AuthPage";
import Verify from "./Pages/Auth/Verify";
import ResendResendVerify from "./Pages/Auth/ResendVerify";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import VerifySuccess from "./Pages/Auth/VerifySuccess";
import ToHome from "./Pages/Home/ToHome";
import Home from "./Pages/Home/Home";

const App = () => {
    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <div className="">
                    <Routes>
                        <Route path="/" element={<ToHome />} />
                        <Route path="/Auth" element={<AuthPage />} />
                        <Route path="/Verify/:token" element={<Verify />} />
                        <Route path="/ResendVerification" element={<ResendResendVerify />} />
                        <Route path="/ResetPassword" element={<ResetPassword />} />
                        <Route path="/ForgetPassword" element={<ForgetPassword />} />
                        <Route path="/VerifySuccess" element={<VerifySuccess />} />
                        <Route path="/Home" element={<Home />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
