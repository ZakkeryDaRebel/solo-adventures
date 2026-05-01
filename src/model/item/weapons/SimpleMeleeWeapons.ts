import { diceConstructor, type Dice } from "../../dice/Dice";
import { Coin } from "../Cost";
import { WeaponMastery, WeaponProperties, type Weapon } from "./Weapon";
import { weaponConstructor } from "./WeaponConstructor";
import { Damage } from "../../statblock/info/Damage";
import { costConstructor } from "../CostConstructor";
import { attackDamageConstructor } from "./AttackDamageConstructor";

const d4: Dice = diceConstructor("1d4");
const d6: Dice = diceConstructor("1d6");

const bludge = Damage.Bludgeoning;
const pierce = Damage.Piercing;
const slash = Damage.Slashing;

const d4Bludge = attackDamageConstructor(d4, bludge);
const d6Bludge = attackDamageConstructor(d6, bludge);
const d6Pierce = attackDamageConstructor(d6, pierce);

const sp = Coin.SP;
const gp = Coin.GP;

const oneGP = costConstructor(1, gp);
const twoGP = costConstructor(2, gp);
const twoSP = costConstructor(2, sp);
const fiveGP = costConstructor(5, gp);

const light = WeaponProperties.Light;
const thrown = WeaponProperties.Thrown;
const verse = WeaponProperties.Versatile;

const baseRange = " (Range 20/60)";
const baseVerse = " (1d8)";

const slow = WeaponMastery.Slow;
const nick = WeaponMastery.Nick;
const sap = WeaponMastery.Sap;

export const Club: Weapon = weaponConstructor(
  "Club",
  costConstructor(1, sp),
  2,
  [d4Bludge],
  {
    [light]: "",
  },
  0,
  0,
  slow,
);

export const Dagger: Weapon = weaponConstructor(
  "Dagger",
  twoGP,
  1,
  [attackDamageConstructor(d4, pierce)],
  {
    [WeaponProperties.Finnese]: "",
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  nick,
);

export const Greatclub: Weapon = weaponConstructor(
  "Greatclub",
  twoSP,
  10,
  [attackDamageConstructor(diceConstructor("1d8"), bludge)],
  {
    [WeaponProperties.TwoHanded]: "",
  },
  0,
  0,
  WeaponMastery.Push,
);

export const Handaxe: Weapon = weaponConstructor(
  "Handaxe",
  fiveGP,
  2,
  [attackDamageConstructor(d6, slash)],
  {
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  WeaponMastery.Vex,
);

export const Javelin: Weapon = weaponConstructor(
  "Javelin",
  costConstructor(5, sp),
  2,
  [d6Pierce],
  {
    [thrown]: " (Range 30/120)",
  },
  0,
  0,
  slow,
);

export const LightHammer: Weapon = weaponConstructor(
  "Light Hammer",
  twoGP,
  2,
  [d4Bludge],
  {
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  nick,
);

export const Mace: Weapon = weaponConstructor(
  "Mace",
  fiveGP,
  4,
  [d6Bludge],
  {},
  0,
  0,
  sap,
);

export const Quarterstaff: Weapon = weaponConstructor(
  "Quarterstaff",
  twoSP,
  4,
  [d6Bludge],
  {
    [verse]: baseVerse,
  },
  0,
  0,
  WeaponMastery.Topple,
);

export const Sickle: Weapon = weaponConstructor(
  "Sickle",
  oneGP,
  2,
  [attackDamageConstructor(d4, slash)],
  {
    [light]: "",
  },
  0,
  0,
  nick,
);

export const Spear: Weapon = weaponConstructor(
  "Spear",
  oneGP,
  3,
  [d6Pierce],
  {
    [thrown]: baseRange,
    [verse]: baseVerse,
  },
  0,
  0,
  sap,
);

export const allSimpleMeleeWeapons: Weapon[] = [
  Club,
  Dagger,
  Greatclub,
  Handaxe,
  Javelin,
  LightHammer,
  Mace,
  Quarterstaff,
  Sickle,
  Spear,
];
