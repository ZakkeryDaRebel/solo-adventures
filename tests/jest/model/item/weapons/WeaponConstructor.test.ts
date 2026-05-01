import {
  WeaponProperties,
  Weapon,
  AttackDamage,
  WeaponMastery,
} from "../../../../../src/model/item/weapons/Weapon";
import {
  weaponConstructor,
  PlusNumWeaponConstructor,
  simplePlusNumWeaponConstructor,
} from "../../../../../src/model/item/weapons/WeaponConstructor";
import type { Cost } from "../../../../../src/model/item/Cost";
import { Damage } from "../../../../../src/model/statblock/info/Damage";
import { diceConstructor } from "../../../../../src/model/dice/Dice";
import { Spear } from "../../../../../src/model/item/weapons/SimpleMeleeWeapons";

const spearName: string = "Spear";
const spearPlusName: string = "Spear, +1";
const spearCost: Cost = { amount: 1, type: "GP" };
const spearDamage: AttackDamage[] = [
  { die: diceConstructor("1d6"), damageType: Damage.Piercing },
];
const spearWeight: number = 3;
const spearProperties: Partial<Record<keyof typeof WeaponProperties, string>> =
  {
    [WeaponProperties.Thrown]: " (range 20/60)",
    [WeaponProperties.Versatile]: " (1d8)",
  };
const spearBonus: number = 0;
const spearPlusBonus: number = 1;
const spearMastery: keyof typeof WeaponMastery = WeaponMastery.None;

function compare(
  weaponToCompare: Weapon,
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
  mastery: keyof typeof WeaponMastery,
) {
  expect(weaponToCompare.name).toBe(name);
  expect(weaponToCompare.cost).toEqual(cost);
  expect(weaponToCompare.weight).toBe(weight);
  expect(weaponToCompare.damage).toEqual(damage);
  expect(weaponToCompare.properties[WeaponProperties.Thrown]).toBe(
    properties.Thrown,
  );
  expect(weaponToCompare.properties[WeaponProperties.Versatile]).toBe(
    properties.Versatile,
  );
  expect(weaponToCompare.addToHit).toBe(addToHit);
  expect(weaponToCompare.addToDamage).toBe(addToDamage);
  expect(weaponToCompare.mastery).toBe(mastery);
}

describe("Weapon Constructor - Spear", () => {
  test("weaponConstructor builds correct weapon", () => {
    const basicSpear = weaponConstructor(
      spearName,
      spearCost,
      spearWeight,
      spearDamage,
      spearProperties,
      spearBonus,
      spearBonus,
      spearMastery,
    );

    compare(
      basicSpear,
      spearName,
      spearCost,
      spearWeight,
      spearDamage,
      spearProperties,
      spearBonus,
      spearBonus,
      spearMastery,
    );
  });

  test("PlusNumWeaponConstructor adds bonuses correctly", () => {
    const plusOneSpear = PlusNumWeaponConstructor(
      1,
      spearName,
      spearCost,
      spearWeight,
      spearDamage,
      spearProperties,
      spearBonus,
      spearBonus,
      spearMastery,
    );

    compare(
      plusOneSpear,
      spearPlusName,
      spearCost,
      spearWeight,
      spearDamage,
      spearProperties,
      spearPlusBonus,
      spearPlusBonus,
      spearMastery,
    );
  });

  test("Simple Plus Num Weapon Constructor adds bonuses correctly", () => {
    const plusTenSpear = simplePlusNumWeaponConstructor(Spear, 10);

    compare(
      plusTenSpear,
      "Spear, +10",
      Spear.cost,
      Spear.weight,
      Spear.damage,
      Spear.properties,
      10,
      10,
      Spear.mastery,
    );
  });
});
