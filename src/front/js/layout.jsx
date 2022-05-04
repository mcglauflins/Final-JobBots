import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";



import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
// import {Modal} from "./component/loginModal.jsx";
import {Welcome} from "./views/Welcome.jsx";
import {Dashboard} from "./views/dashboard.jsx";
import Faqs from "./views/Faq.jsx";
import About from "./views/About.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Welcome />
            </Route>
            <Route  path="/About">
              <About />
            </Route>
            <Route  path="/Faqs">
              <Faqs />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);