import create from "zustand";

const useStore = create((set, get) => ({
  loggedIn: false,
  currentUserID: -1,
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
  }
}));

export default useStore;
