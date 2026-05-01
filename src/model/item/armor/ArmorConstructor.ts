import type { Cost } from "../Cost";
import type { ArmorType, Armor } from "./Armor";

export function armorConstructor(
  name: string,
  cost: Cost,
  weight: number,
  baseAC: number,
  type: keyof typeof ArmorType,
  other: string,
): Armor {
  return {
    name: name,
    cost: cost,
    weight: weight,
    baseAC: baseAC,
    type: type,
    other: other,
  };
}

export function plusNumArmorConstructor(
  numIncrease: number,
  name: string,
  cost: Cost,
  weight: number,
  baseAC: number,
  type: keyof typeof ArmorType,
  other: string,
): Armor {
  return armorConstructor(
    name + ", +" + numIncrease,
    cost,
    weight,
    baseAC + numIncrease,
    type,
    other,
  );
}

export function simplePlusNumArmorConstructor(
  armor: Armor,
  numIncrease: number,
): Armor {
  armor.baseAC += numIncrease;
  armor.name += ", +" + numIncrease;
  return armor;
}
