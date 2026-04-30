import type { Dice } from "../../dice/Dice";
import type { Item } from "../Item";
import type { Damage } from "../../statblock/info/Damage";
import type { Cost } from "../Cost";

export interface Weapon extends Item {
  damage: AttackDamage[];
  properties: Partial<Record<keyof typeof WeaponProperties, string>>;
  addToHit: number;
  addToDamage: number;
}

export function weaponConstructor(
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
): Weapon {
  return {
    name: name,
    cost: cost,
    weight: weight,
    damage: damage,
    properties: properties,
    addToHit: addToHit,
    addToDamage: addToDamage,
  };
}

export function PlusNumWeaponConstructor(
  numIncrease: number,
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
): Weapon {
  return weaponConstructor(
    name + "+" + numIncrease,
    cost,
    weight,
    damage,
    properties,
    addToHit + numIncrease,
    addToDamage + numIncrease,
  );
}

export interface AttackDamage {
  die: Dice;
  damageType: keyof typeof Damage;
}

export const WeaponProperties = {
  Ammunition: "Ammunition",
  Finnese: "Finnese",
  Heavy: "Heavy",
  Light: "Light",
  Loading: "Loading",
  Range: "Range", // (short / long)
  Reach: "Reach",
  Special: "Special", // description
  Thrown: "Thrown", // (short / long)
  TwoHanded: "Two-Handed",
  ["Two Handed"]: "TwoHanded",
  Versatile: "Versatile", // (bigger die)
} as const;
