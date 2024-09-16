import { create } from 'zustand';

export const useDocumentStore = create((set) => ({
  documents: [],
  setDocuments: (documents) => set({ documents }),
  createDocument: async (newDocument) => {
    const res = await fetch("/api/documents/addDocument", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDocument),
    })
    const data = await res.json();
    set((state) => ({ documents: [...state.documents, data.data] }));
  },
  getDocuments: async () => {
    const res = await fetch("/api/documents/getDocuments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json();
    set({ documents: data.data });
  }, 
}));