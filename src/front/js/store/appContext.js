import React, { useState, useEffect } from "react";

import useStore from "./zustand.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const state = useStore((state) => state);

    const getDashboard = async (store, url = `https://3001-mcglauflins-finaljobbot-10npefry8bl.ws-us44.gitpod.io/api/dashboard`) => {
      // retrieve token form localStorage
      const token = localStorage.getItem('jwt-token');
      const requestOptions = {
        method: 'GET',
        headers: { 
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+ token // ⬅⬅⬅ authorization token
        } 
     }
  
      const resp = await fetch(url, requestOptions)
      if(!resp.ok) {throw Error("There was a problem in the login request")}
  
      else if(resp.status === 403){
          throw Error("Missing or invalid token");
      }
      else if(resp.status === 401 || resp.status === 422){
          store.setLogin(false);
      }
      else{
        const data = await resp.json();
        store.setLogin(true)
        console.log("This is the data you requested", data);
        return data
      }
    };

    useEffect(() => {
      /**
       * EDIT THIS!
       * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
       * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
       * store, instead use actions, like this:
       *
       * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
       *
       **/

      // loadPeopleData(state);
      // loadVehicleData(state);
      // loadPlanets(state);
      getDashboard(state)
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
