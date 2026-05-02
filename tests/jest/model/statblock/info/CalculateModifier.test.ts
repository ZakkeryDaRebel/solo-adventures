import { calculateModifier } from "../../../../../src/model/statblock/info/AbilityScores";

describe("Ability Score Number to Modifier", () => {
  test("7 to be -2", () => {
    const mod = calculateModifier(7);
    expect(mod).toBe(-2);
  });

  test("8 to be -1", () => {
    const mod = calculateModifier(8);
    expect(mod).toBe(-1);
  });

  test("9 to be -1", () => {
    const mod = calculateModifier(9);
    expect(mod).toBe(-1);
  });

  test("10 to be 0", () => {
    const mod = calculateModifier(10);
    expect(mod).toBe(0);
  });

  test("11 to be 0", () => {
    const mod = calculateModifier(11);
    expect(mod).toBe(0);
  });

  test("12 to be 1", () => {
    const mod = calculateModifier(12);
    expect(mod).toBe(1);
  });

  test("13 to be 1", () => {
    const mod = calculateModifier(13);
    expect(mod).toBe(1);
  });

  test("14 to be 2", () => {
    const mod = calculateModifier(14);
    expect(mod).toBe(2);
  });
});
