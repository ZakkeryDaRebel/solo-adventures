import type { Statblock } from "../statblock/Statblock";
import { Race } from "../race/Race";

export function addRace(
  statblock: Statblock,
  race: keyof typeof Race,
): Statblock {
  const newStatblock: Statblock = structuredClone(statblock);
  newStatblock.descriptionTag = " (" + race + ")";

  return newStatblock;
}
