import type { Statblock } from "../statblock/Statblock";

export interface FightNodeType {
  type: "fight";
  enemies: Statblock[];
  allies: Statblock[];

  battlefield: string[][];

  winNode: string;
  loseNode: string;
}
