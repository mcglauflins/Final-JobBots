import create from "zustand";

const useStore = create((set, get) => ({
  loggedIn: false,
  backendURL: process.env.BACKEND_URL,
  emailSent: false,
  codeVerified: false,
  first_name: "Joe",
  last_name: "Doe",
  username: "JoeMama",
  email: "joedoe@gmail.com",
  password: "nottherealpasswordlol",
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
  setFName: (fName) => {
    set({ 
      first_name: get().first_name = fName,
    })
  },
  setLName: (LName) => {
    set({ 
      last_name: get().last_name = LName,
    })
  },
  setEmail: (email) => {
    set({ 
      email: get().email = email,
    })
  },
  setUsername: (username) => {
    set({ 
      username: get().username = username,
    })
  },
  setPassword: (password) => {
    set({ 
      password: get().password = password,
    })
  }
}));

export default useStore;
