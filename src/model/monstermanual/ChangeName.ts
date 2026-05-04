import type { Statblock } from "../statblock/Statblock";

export function changeName(statblock: Statblock, name: string): Statblock {
  const newStatblock: Statblock = structuredClone(statblock);
  newStatblock.name = name;

  return newStatblock;
}
