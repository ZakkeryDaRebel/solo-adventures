import { Coin } from "../Cost";
import { costConstructor } from "../CostConstructor";
import { ArmorType, type Armor } from "./Armor";
import { armorConstructor } from "./ArmorConstructor";

const gp = Coin.GP;

const heavy = ArmorType.Heavy;

function getHeavyString(strength: number): string {
  return " (Strength requirement of " + strength + ", Disadvantage on Stealth)";
}

const heavyArmorString: string = getHeavyString(15);

export const RingMail: Armor = armorConstructor(
  "Ring Mail",
  costConstructor(30, gp),
  40,
  14,
  heavy,
  " (Disadvantage on Stealth)",
);

export const ChainMail: Armor = armorConstructor(
  "Chain Mail",
  costConstructor(75, gp),
  55,
  16,
  heavy,
  getHeavyString(13),
);

export const Splint: Armor = armorConstructor(
  "Splint",
  costConstructor(200, gp),
  60,
  17,
  heavy,
  heavyArmorString,
);

export const Plate: Armor = armorConstructor(
  "Plate",
  costConstructor(1500, gp),
  65,
  18,
  heavy,
  heavyArmorString,
);

export const allHeavyArmor: Armor[] = [RingMail, ChainMail, Splint, Plate];
