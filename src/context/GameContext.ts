import { createContext, useContext } from "react";

export interface GameState {
  playerInitiative: number | null;
  setPlayerInitiative: (n: number | null) => void;
}

export const GameContext = createContext<GameState | null>(null);

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}
