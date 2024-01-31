import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreApp = create(
  persist(
    (set: any) => ({
      language: "english",
      setLanguage: (payload: string) =>
        set({
          language: payload,
        }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
