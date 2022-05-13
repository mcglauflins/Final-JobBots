import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
// import {Modal} from "./component/loginModal.jsx";
import { Welcome } from "./views/Welcome.jsx";
import { Dashboard } from "./views/dashboard.jsx";
import Faqs from "./views/Faq.jsx";
import About from "./views/About.jsx";
import HowItWorks from "./views/Howitwork.jsx";
import ForgotPassword from "./views/ForgotPassword.jsx";
import SignUp from "./views/signup.jsx";
import Settings from "./views/Settings.jsx";
import Jobs from "./views/jobs.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<><Navbar /><Welcome /></>} />
            <Route path="/signup" element={<><Navbar /><SignUp/></>} />
            <Route  path="/About" element={<><Navbar /><About /></>}/>
            <Route  path="/Faqs" element={<><Navbar /><Faqs /></>}/>
            <Route  path="/Howitworks" element={<><Navbar /><HowItWorks /></>}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route exact path="/dashboard" element={<Dashboard />}/>
            <Route exact path="/jobs" element={<Jobs />}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/logged" element={<Navigate to="/dashboard"/>}/>
            <Route element={<h1>Not found!</h1>} />
          </Routes>

       {  /* <Footer /> */}
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
