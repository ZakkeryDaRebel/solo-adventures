import { diceConstructor } from "../../dice/Dice";
import { Coin } from "../Cost";
import { WeaponMastery, WeaponProperties, type Weapon } from "./Weapon";
import { weaponConstructor } from "./WeaponConstructor";
import { Damage } from "../../statblock/info/Damage";
import { costConstructor } from "../CostConstructor";
import { attackDamageConstructor } from "./AttackDamageConstructor";

const gp = Coin.GP;

const fiftyGP = costConstructor(50, gp);

const pierce = Damage.Piercing;

const amm = WeaponProperties.Ammunition;
const range = WeaponProperties.Range;
const load = WeaponProperties.Loading;
const heavy = WeaponProperties.Heavy;
const twoHand = WeaponProperties.TwoHanded;

const vex = WeaponMastery.Vex;

export const Blowgun: Weapon = weaponConstructor(
  "Blowgun",
  costConstructor(10, gp),
  1,
  [attackDamageConstructor(diceConstructor("1d1"), pierce)],
  {
    [amm]: " (Needle)",
    [range]: " (Range 25/100)",
    [load]: "",
  },
  0,
  0,
  vex,
);

export const HandCrossbow: Weapon = weaponConstructor(
  "Hand Crossbow",
  costConstructor(75, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d6"), pierce)],
  {
    [amm]: " (Bolt)",
    [range]: " (Range 30/120)",
    [WeaponProperties.Light]: "",
    [load]: "",
  },
  0,
  0,
  vex,
);

export const HeavyCrossbow: Weapon = weaponConstructor(
  "Heavy Crossbow",
  fiftyGP,
  18,
  [attackDamageConstructor(diceConstructor("1d10"), pierce)],
  {
    [amm]: " (Bolt)",
    [range]: " (Range 100/400)",
    [heavy]: "",
    [load]: "",
    [twoHand]: "",
  },
  0,
  0,
  WeaponMastery.Push,
);

export const Longbow: Weapon = weaponConstructor(
  "Longbow",
  fiftyGP,
  2,
  [attackDamageConstructor(diceConstructor("1d8"), pierce)],
  {
    [amm]: " (Arrow)",
    [range]: " (Range 150/600)",
    [heavy]: "",
    [twoHand]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const allMartialRangedWeapons: Weapon[] = [
  Blowgun,
  HandCrossbow,
  HeavyCrossbow,
  Longbow,
];
