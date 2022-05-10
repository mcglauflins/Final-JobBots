import create from "zustand";

const useStore = create((set, get) => ({
  people: [],
  vehicles: [],
  planets: [],
  loggedIn: false,
  // addPeople: (person) => {
  //   set({
  //     people: get().people.concat(person),
  //   });
  // },
  setLogin: (isLogged) => {
    set({
      loggedIn: get().loggedIn = isLogged, 
    });
  }
}));

export default useStore;
