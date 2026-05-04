import type { Statblock } from "../statblock/Statblock";
import { Languages } from "../statblock/info/Languages";

export function addLanguages(
  statblock: Statblock,
  languages: (keyof typeof Languages)[],
): Statblock {
  const newStatblock: Statblock = structuredClone(statblock);
  newStatblock.languages = [...statblock.languages, ...languages];

  return newStatblock;
}
