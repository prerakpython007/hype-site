"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface AppContextType {
  introDone: boolean;
  revealPage: boolean;
  audio: HTMLAudioElement | null;
  setIntroDone: (v: boolean) => void;
  setRevealPage: (v: boolean) => void;
  setAudio: (a: HTMLAudioElement) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const [revealPage, setRevealPage] = useState(false);
  const [audio, setAudioState] = useState<HTMLAudioElement | null>(null);

  const setAudio = useCallback((a: HTMLAudioElement) => setAudioState(a), []);

  return (
    <AppContext.Provider value={{ introDone, revealPage, audio, setIntroDone, setRevealPage, setAudio }}>
      {children}
    </AppContext.Provider>
  );
}
