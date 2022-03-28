import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route element={<h1>Not found!</h1>} />
          </Route>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
