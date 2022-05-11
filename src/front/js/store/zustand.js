import create from "zustand";

const useStore = create((set, get) => ({
  loggedIn: false,
  emailSent: false,
  codeVerified: false,
  currentUserID: -1,
  resetCode: -1,
  // addPeople: (person) => {
  //   set({
  //     people: get().people.concat(person),
  //   });
  // },
  setLogin: (isLogged) => {
    set({
      loggedIn: get().loggedIn = isLogged, 
    });
  },
  setUserID: (id) => {
    set({
      currentUserID: get().currentUserID = id, 
    });
  },
  setResetCode: (code) => {
    set({ 
      resetCode: get().resetCode = code,
    })
  },
  setEmailSent: (sent) => {
    set({ 
      emailSent: get().emailSent = sent,
    })
  },
  setCodeVerified: (isVerified) => {
    set({ 
      codeVerified: get().codeVerified = isVerified,
    })
  },
}));

export default useStore;
