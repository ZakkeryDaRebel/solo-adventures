import { diceConstructor } from "../../dice/Dice";
import { Coin } from "../Cost";
import { WeaponMastery, WeaponProperties, type Weapon } from "./Weapon";
import { weaponConstructor } from "./WeaponConstructor";
import { Damage } from "../../statblock/info/Damage";
import { costConstructor } from "../CostConstructor";
import { attackDamageConstructor } from "./AttackDamageConstructor";

const gp = Coin.GP;

const tenGP = costConstructor(10, gp);
const fifteenGP = costConstructor(15, gp);
const twentyGP = costConstructor(20, gp);
const twentyFiveGP = costConstructor(25, gp);
const fiveGP = costConstructor(5, gp);

const slash = Damage.Slashing;
const bludge = Damage.Bludgeoning;
const pierce = Damage.Piercing;

const oneD6 = diceConstructor("1d6");
const twoD6 = diceConstructor("2d6");
const d8 = diceConstructor("1d8");
const d10 = diceConstructor("1d10");

const d8Slash = attackDamageConstructor(d8, slash);
const d8Bludge = attackDamageConstructor(d8, bludge);
const d8Pierce = attackDamageConstructor(d8, pierce);
const d10Slash = attackDamageConstructor(d10, slash);
const d10Pierce = attackDamageConstructor(d10, pierce);

const verse = WeaponProperties.Versatile;
const heavy = WeaponProperties.Heavy;
const reach = WeaponProperties.Reach;
const twoHanded = WeaponProperties.TwoHanded;
const finesse = WeaponProperties.Finnese;
const light = WeaponProperties.Light;

const heavyTwo = {
  [heavy]: "",
  [twoHanded]: "",
};

function getHeavyReachTwo(description: string) {
  return {
    [heavy]: "",
    [reach]: "",
    [twoHanded]: description,
  };
}

const verseString = " (1d10)";

const versatile = {
  [verse]: verseString,
};

const finLight = {
  [finesse]: "",
  [light]: "",
};

const topple = WeaponMastery.Topple;
const sap = WeaponMastery.Sap;
const graze = WeaponMastery.Graze;
const cleave = WeaponMastery.Cleave;
const push = WeaponMastery.Push;
const vex = WeaponMastery.Vex;

export const Battleaxe: Weapon = weaponConstructor(
  "Battleaxe",
  tenGP,
  4,
  [d8Slash],
  versatile,
  0,
  0,
  topple,
);

export const Flail: Weapon = weaponConstructor(
  "Flail",
  tenGP,
  2,
  [d8Bludge],
  {},
  0,
  0,
  sap,
);

export const Glaive: Weapon = weaponConstructor(
  "Glaive",
  twentyGP,
  6,
  [d10Slash],
  getHeavyReachTwo(""),
  0,
  0,
  graze,
);

export const Greataxe: Weapon = weaponConstructor(
  "Greataxe",
  costConstructor(30, gp),
  7,
  [attackDamageConstructor(diceConstructor("1d12"), slash)],
  heavyTwo,
  0,
  0,
  cleave,
);

export const Greatsword: Weapon = weaponConstructor(
  "Greatsword",
  costConstructor(50, gp),
  6,
  [attackDamageConstructor(twoD6, slash)],
  heavyTwo,
  0,
  0,
  graze,
);

export const Halberd: Weapon = weaponConstructor(
  "Halberd",
  twentyGP,
  6,
  [d10Slash],
  getHeavyReachTwo(""),
  0,
  0,
  cleave,
);

export const Lance: Weapon = weaponConstructor(
  "Lance",
  tenGP,
  6,
  [d10Pierce],
  getHeavyReachTwo(" (unless mounted)"),
  0,
  0,
  topple,
);

export const Longsword: Weapon = weaponConstructor(
  "Longsword",
  fifteenGP,
  3,
  [d8Slash],
  versatile,
  0,
  0,
  sap,
);

export const Maul: Weapon = weaponConstructor(
  "Maul",
  tenGP,
  10,
  [attackDamageConstructor(twoD6, bludge)],
  heavyTwo,
  0,
  0,
  topple,
);

export const Morningstar: Weapon = weaponConstructor(
  "Morningstar",
  fifteenGP,
  4,
  [d8Pierce],
  {},
  0,
  0,
  sap,
);

export const Pike: Weapon = weaponConstructor(
  "Pike",
  fiveGP,
  18,
  [d10Pierce],
  getHeavyReachTwo(""),
  0,
  0,
  push,
);

export const Rapier: Weapon = weaponConstructor(
  "Rapier",
  twentyFiveGP,
  2,
  [d8Pierce],
  {
    [finesse]: "",
  },
  0,
  0,
  vex,
);

export const Scimitar: Weapon = weaponConstructor(
  "Scimitar",
  twentyFiveGP,
  3,
  [attackDamageConstructor(oneD6, slash)],
  finLight,
  0,
  0,
  WeaponMastery.Nick,
);

export const Shortsword: Weapon = weaponConstructor(
  "Shortsword",
  tenGP,
  2,
  [attackDamageConstructor(oneD6, pierce)],
  finLight,
  0,
  0,
  vex,
);

export const Trident: Weapon = weaponConstructor(
  "Trident",
  fiveGP,
  4,
  [d8Pierce],
  {
    [WeaponProperties.Thrown]: " (Range 20/60)",
    [verse]: verseString,
  },
  0,
  0,
  topple,
);

export const Warhammer: Weapon = weaponConstructor(
  "Warhammer",
  fifteenGP,
  5,
  [d8Bludge],
  versatile,
  0,
  0,
  push,
);

export const WarPick: Weapon = weaponConstructor(
  "War Pick",
  fiveGP,
  2,
  [d8Pierce],
  versatile,
  0,
  0,
  sap,
);

export const Whip: Weapon = weaponConstructor(
  "Whip",
  costConstructor(2, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d4"), slash)],
  {
    [finesse]: "",
    [reach]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const allMartialMeleeWeapons: Weapon[] = [
  Battleaxe,
  Flail,
  Glaive,
  Greataxe,
  Greatsword,
  Halberd,
  Lance,
  Longsword,
  Maul,
  Morningstar,
  Pike,
  Rapier,
  Scimitar,
  Shortsword,
  Trident,
  Warhammer,
  WarPick,
  Whip,
];
