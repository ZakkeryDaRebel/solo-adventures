import type { Cost } from "../Cost";
import type { Item } from "../Item";

export const ArmorType = {
  Light: "Light",
  Medium: "Medium",
  Heavy: "Heavy",
  Shield: "Shield",
} as const;

export interface Armor extends Item {
  baseAC: number;
  type: keyof typeof ArmorType;
  other: string; // Disadvantage on Stealth, STR requirement, etc
}

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
    name + "+" + numIncrease,
    cost,
    weight,
    baseAC + numIncrease,
    type,
    other,
  );
}
