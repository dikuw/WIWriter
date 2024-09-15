import { create } from 'zustand';

export const useDocumentStore = create((set) => ({
  documents: [],
  setDocuments: (documents) => set({ documents }),
  createDocument: async (newDocument) => {
    const res = await fetch("http://localhost:5000/api/addDocument", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDocument),
    })
    const data = await res.json();
    set((state) => ({ documents: [...state.documents, data.data] }));
  }
}));