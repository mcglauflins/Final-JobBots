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

    const getDashboard = async (store, url = `${state.backendURL}/api/dashboard`) => {
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

    const getUserInfo = (store, url=`${state.backendURL}/api/profile-info`) => {
      const token = localStorage.getItem('jwt-token');
      const userID = localStorage.getItem('user_id');
      const requestOptions = {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
        },
        body: JSON.stringify({
          "id": userID,
        })
     }
  
      fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        store.setFName(result.first_name)
        store.setLName(result.last_name)
        store.setUsername(result.username)
        store.setEmail(result.email)
      })
      .catch(err => {
        console.error(err);
      });
    }

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

      getDashboard(state)
      getUserInfo(state)
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
