import { Coin } from "../Cost";
import { costConstructor } from "../CostConstructor";
import { ArmorType, type Armor } from "./Armor";
import { armorConstructor } from "./ArmorConstructor";

const gp = Coin.GP;

const light = ArmorType.Light;

export const Padded: Armor = armorConstructor(
  "Padded",
  costConstructor(5, gp),
  8,
  11,
  light,
  " (Add Dexterity modifier to AC, Disadvantage on Stealth)",
);

export const Leather: Armor = armorConstructor(
  "Leather",
  costConstructor(10, gp),
  10,
  11,
  light,
  " (Add Dexterity modifier to AC)",
);

export const StuddedLeather: Armor = armorConstructor(
  "Studded Leather",
  costConstructor(45, gp),
  13,
  12,
  light,
  " (Add Dexterity modifier to AC)",
);

export const allLightArmor: Armor[] = [Padded, Leather, StuddedLeather];
