import type { Spell } from "../spell/Spell";
import type { Statblock } from "./Statblock";

export interface SpellcasterStatblock extends Statblock {
  // Spellslots
  spellslots: {
    lvl1: { max: number; cur: number };
    lvl2: { max: number; cur: number };
    lvl3: { max: number; cur: number };
    lvl4: { max: number; cur: number };
    lvl5: { max: number; cur: number };
    lvl6: { max: number; cur: number };
    lvl7: { max: number; cur: number };
    lvl8: { max: number; cur: number };
    lvl9: { max: number; cur: number };
  };
  spells: {
    lvl0: Spell[];
    lvl1: Spell[];
    lvl2: Spell[];
    lvl3: Spell[];
    lvl4: Spell[];
    lvl5: Spell[];
    lvl6: Spell[];
    lvl7: Spell[];
    lvl8: Spell[];
    lvl9: Spell[];
  };
}
