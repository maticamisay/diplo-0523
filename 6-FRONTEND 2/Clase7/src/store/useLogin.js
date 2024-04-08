import { create } from "zustand";

const useLogin = create((set) => ({
  username: "",
  login: (username) => set({ username }),
}));

export default useLogin;
