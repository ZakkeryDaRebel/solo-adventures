import { diceConstructor } from "../../dice/Dice";
import { roll } from "../../dice/DiceRoller";
import { ChainShirt } from "../../item/armor/MediumArmor";
import { Shield } from "../../item/armor/Shield";
import { Coin } from "../../item/Cost";
import { costConstructor } from "../../item/CostConstructor";
import { attackDamageConstructor } from "../../item/weapons/AttackDamageConstructor";
import { Spear } from "../../item/weapons/SimpleMeleeWeapons";
import { AbilityScores } from "../../statblock/info/AbilityScores";
import { Alignment } from "../../statblock/info/Alignment";
import { CreatureType } from "../../statblock/info/CreatureType";
import { Damage } from "../../statblock/info/Damage";
import { Languages } from "../../statblock/info/Languages";
import { Sense } from "../../statblock/info/Sense";
import { Size } from "../../statblock/info/Size";
import { Skills } from "../../statblock/info/Skills";
import type { Statblock } from "../../statblock/Statblock";

const pierce = Damage.Piercing;

export const GuardSpear: Statblock = {
  name: "Spear Guard",
  size: Size.Medium,
  creatureType: CreatureType.Humanoids,
  descriptionTag: " (any race)",
  alignment: Alignment.Any,

  // AC, HP, Speed + Initiative
  armorClass: 16,
  hp: {
    max: 11,
    cur: 11,
    dice: diceConstructor("2d8"),
  },
  speed: 30,
  initiative: 1,

  // Ability Scores
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  skills: {
    [Skills.Perception]: 2,
  },

  // Traits
  senses: {
    [Sense.PassivePerception]: 12,
  },
  languages: [Languages.Common],
  challengeRating: "1/8",
  exp: 25,
  //other traits (like passives)

  // Actions
  actions: [
    {
      title: "Spear (One Handed). Melee Weapon Attack",
      addToHit: 3,
      reach: 5,
      damage: [attackDamageConstructor(diceConstructor("1d6"), pierce)],
      addToDamage: [[1, pierce]],
      description: "",
    },
    {
      title: "Spear (Two Handed). Melee Weapon Attack",
      addToHit: 3,
      reach: 5,
      damage: [attackDamageConstructor(diceConstructor("1d8"), pierce)],
      addToDamage: [[1, pierce]],
      description: "",
    },
  ],
  bonusActions: [],
  reactions: [],

  // Loot
  equipment: [ChainShirt, Shield, Spear], // Items holding or worn
  loot: [], // Items or gear stored in backpack
  coins: [
    costConstructor(roll(diceConstructor("2d4")), Coin.GP),
    costConstructor(roll(diceConstructor("2d6")), Coin.SP),
  ], // Coins in money pouch
};
