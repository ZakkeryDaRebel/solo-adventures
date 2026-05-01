import { ArmorType, Armor } from "../../../../../src/model/item/armor/Armor";
import {
  armorConstructor,
  plusNumArmorConstructor,
  simplePlusNumArmorConstructor,
} from "../../../../../src/model/item/armor/ArmorConstructor";
import { Cost } from "../../../../../src/model/item/Cost";
import { Shield } from "../../../../../src/model/item/armor/Shield";

const chainName: string = "Chain Mail";
const chainPlusName: string = "Chain Mail, +1";
const chainCost: Cost = { amount: 75, type: "GP" };
const chainWeight: number = 55;
const chainAC: number = 16;
const chainPlusAC: number = 17;
const chainType: keyof typeof ArmorType = ArmorType.Heavy;
const chainOther: string =
  " (Minimum Strength Requirement of 13, Disadvantage on Stealth)";

function compare(
  armorToCompare: Armor,
  name: string,
  cost: Cost,
  weight: number,
  ac: number,
  type: keyof typeof ArmorType,
  other: string,
) {
  expect(armorToCompare.name).toBe(name);
  expect(armorToCompare.cost).toEqual(cost);
  expect(armorToCompare.weight).toBe(weight);
  expect(armorToCompare.baseAC).toBe(ac);
  expect(armorToCompare.type).toBe(type);
  expect(armorToCompare.other).toBe(other);
}

describe("Armor Constructor", () => {
  test("armorConstructor builds correct armor", () => {
    const defaultChain = armorConstructor(
      chainName,
      chainCost,
      chainWeight,
      chainAC,
      chainType,
      chainOther,
    );

    compare(
      defaultChain,
      chainName,
      chainCost,
      chainWeight,
      chainAC,
      chainType,
      chainOther,
    );
  });

  test("plusNumArmorConstructor increases AC and name", () => {
    const plusChain = plusNumArmorConstructor(
      1,
      chainName,
      chainCost,
      chainWeight,
      chainAC,
      chainType,
      chainOther,
    );

    compare(
      plusChain,
      chainPlusName,
      chainCost,
      chainWeight,
      chainPlusAC,
      chainType,
      chainOther,
    );
  });

  test("Simple Plus Num Armor Constructor increases AC and name by 10", () => {
    const plusTenShield = simplePlusNumArmorConstructor(Shield, 10);

    compare(
      plusTenShield,
      "Shield, +10",
      Shield.cost,
      Shield.weight,
      12,
      Shield.type,
      Shield.other,
    );
  });
});
