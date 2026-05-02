import { diceConstructor } from "../../dice/Dice";
import { attackDamageConstructor } from "../../item/weapons/AttackDamageConstructor";
import { AbilityScores } from "../../statblock/info/AbilityScores";
import { Alignment } from "../../statblock/info/Alignment";
import { CreatureType } from "../../statblock/info/CreatureType";
import { Damage } from "../../statblock/info/Damage";
import { Sense } from "../../statblock/info/Sense";
import { Size } from "../../statblock/info/Size";
import { Skills } from "../../statblock/info/Skills";
import type { Statblock } from "../../statblock/Statblock";

export const Wolf: Statblock = {
  // Base information
  name: "Wolf",
  size: Size.Medium,
  creatureType: CreatureType.Beasts,
  descriptionTag: "",
  alignment: Alignment.UA,

  // AC, HP, Speed + Initiative
  armorClass: 13,
  hp: {
    max: 11,
    cur: 11,
    dice: diceConstructor("2d8"),
  },
  speed: 40,
  initiative: 2,

  // Ability Scores
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  skills: {
    [Skills.Perception]: 3,
    [Skills.Stealth]: 4,
  },

  // Traits
  senses: {
    [Sense.PassivePerception]: 13,
  },
  languages: [],
  challengeRating: "1/4",
  exp: 50,
  //other traits (like passives)

  // Actions
  actions: [
    {
      title: "Bite. Melee Weapon Attack",
      addToHit: 4,
      reach: 5,
      damage: [
        attackDamageConstructor(diceConstructor("2d4"), Damage.Piercing),
      ],
      addToDamage: [[2, Damage.Piercing]],
      description:
        "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone",
    },
  ],
  bonusActions: [],
  reactions: [],

  // Loot
  equipment: [], // Items holding or worn
  loot: [], // Items or gear stored in backpack
  coins: [], // Coins in money pouch
};
