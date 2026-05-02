import { Alignment } from "../../statblock/info/Alignment";
import { CreatureType } from "../../statblock/info/CreatureType";
import { Size } from "../../statblock/info/Size";
import type { Statblock } from "../../statblock/Statblock";
import { AbilityScores } from "../../statblock/info/AbilityScores";
import { Sense } from "../../statblock/info/Sense";
import { Skills } from "../../statblock/info/Skills";
import { Languages } from "../../statblock/info/Languages";
import { Spear } from "../../item/weapons/SimpleMeleeWeapons";
import { roll } from "../../dice/DiceRoller";
import { diceConstructor } from "../../dice/Dice";
import { Coin } from "../../item/Cost";

// export const GoblinArcher: Statblock = {}

export const GoblinWarrior: Statblock = {
  name: "Goblin Warrior",
  size: Size.Small,
  creatureType: CreatureType.Humanoids,
  descriptionTag: "(Goblinoid)",
  alignment: Alignment.NE,
  armorClass: 15,
  hp: {
    max: 7,
    cur: 7,
    dice: {
      printable: "2d6",
      numOfDice: 2,
      diceNumber: 6,
    },
  },
  speed: 30,
  initiative: 2,
  abilityScores: {
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 8,
  },
  skills: {
    [Skills.Stealth]: 6,
  },
  senses: {
    [Sense.Darkvision]: 60,
    [Sense.PassivePerception]: 9,
  },
  languages: [Languages.Common, Languages.Goblin],
  challengeRating: "1/4",
  exp: 50,
  actions: [],
  bonusActions: [],
  reactions: [],
  equipment: [Spear],
  loot: [],
  coins: [{ amount: roll(diceConstructor("1d6")), type: Coin.GP }],
};
