import type { Item } from "../item/Item";
import type { AbilityScores } from "./info/AbilityScores";
import type { Alignment } from "./info/Alignment";
import type { CreatureType } from "./info/CreatureType";
import type { Languages } from "./info/Languages";
import type { Sense } from "./info/Sense";
import type { Size } from "./info/Size";
import type { Skills } from "./info/Skills";

export interface Statblock {
  // Base information
  name: string;
  size: typeof Size;
  creatureType: typeof CreatureType;
  description: string;
  alignment: typeof Alignment;

  // AC, HP, Speed + Initiative
  armorClass: number;
  hp: {
    max: number;
    cur: number;
  };
  speed: number;
  initiative: number;

  // Ability Scores
  abilityScores: Record<keyof typeof AbilityScores, number>;
  skills: Record<keyof typeof Skills, number>;

  // Traits
  senses: (typeof Sense)[];
  languages: (typeof Languages)[];
  challengeRating: string;
  exp: number;
  //other traits (like passives)

  // Actions
  actions: null;
  bonusActions: null;
  reactions: null;

  // Loot
  loot: Item[];
}
