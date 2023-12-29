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
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";

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
                        <Route path="/Shop" element={<Shop />} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Contact" element={<Contact/>} />
                        <Route path="/Blog" element={<Blog/>} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
