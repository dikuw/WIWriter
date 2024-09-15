import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: [],
  setUsers: (users) => set({ users }),
  registerUser: async (newUser) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const data = await res.json();
    set((state) => ({ users: [...state.users, data.data] }));
  }
}));