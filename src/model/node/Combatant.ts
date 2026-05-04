import type { Statblock } from "../statblock/Statblock";

export interface Combatant {
  id: string;
  stat: Statblock;
  side: keyof typeof Side;

  initiative: number;
  removed: boolean;

  logs: string[];
}

export const Side = {
  Player: "Player",
  Ally: "Ally",
  Enemy: "Enemy",
} as const;
