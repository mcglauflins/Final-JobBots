import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import injectContext from "./store/appContext";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import {Header} from "./component/header.jsx";
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Header />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);