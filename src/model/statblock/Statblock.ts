import type { Item } from "../item/Item";
import type { AbilityScores } from "./info/AbilityScores";
import type { Alignment } from "./info/Alignment";
import type { CreatureType } from "./info/CreatureType";
import type { Languages } from "./info/Languages";
import type { Sense } from "./info/Sense";
import type { Size } from "./info/Size";
import type { Skills } from "./info/Skills";
import type { Dice } from "../dice/Dice";
import type { Cost } from "../item/Cost";
import type { Action } from "./info/Action";

export interface Statblock {
  // Base information
  name: string;
  size: keyof typeof Size;
  creatureType: keyof typeof CreatureType;
  descriptionTag: string;
  alignment: keyof typeof Alignment;

  // AC, HP, Speed + Initiative
  armorClass: number;
  hp: {
    max: number;
    cur: number;
    dice: Dice;
  };
  speed: number;
  initiative: number;

  // Ability Scores
  abilityScores: Record<keyof typeof AbilityScores, number>;
  skills: Partial<Record<keyof typeof Skills, number>>;

  // Traits
  senses: Partial<Record<keyof typeof Sense, number>>;
  languages: (keyof typeof Languages)[];
  challengeRating: string;
  exp: number;
  //other traits (like passives)

  // Actions
  actions: Action[];
  bonusActions: Action[];
  reactions: Action[];

  // Loot
  equipment: Item[]; // Items holding or worn
  loot: Item[]; // Items or gear stored in backpack
  coins: Cost[]; // Coins in money pouch
}
