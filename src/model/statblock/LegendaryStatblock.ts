import type { Statblock } from "./Statblock";

export interface LegendaryStatblock extends Statblock {
  legendaryResistance: {
    max: number;
    cur: number;
  };
  legendaryReaction: {
    max: number;
    cur: number;
  };
  legendaryReactionList: null;
}
