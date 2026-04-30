import { diceConstructor } from "../../dice/Dice";
import { Coin } from "../Cost";
import { weaponConstructor, WeaponProperties, type Weapon } from "./Weapon";
import { Damage } from "../../statblock/info/Damage";

export const Spear: Weapon = weaponConstructor(
  "Spear",
  { amount: 1, type: Coin.GP },
  3,
  [{ die: diceConstructor("1d6"), damageType: Damage.Piercing }],
  {
    [WeaponProperties.Thrown]: " (range 20/60)",
    [WeaponProperties.Versatile]: " (1d8)",
  },
  0,
  0,
);
