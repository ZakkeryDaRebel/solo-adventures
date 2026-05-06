import { type Dice, diceConstructor } from "../../../../src/model/dice/Dice";
import { roll } from "../../../../src/model/dice/DiceRoller";

test("reject invalid diceConstructor formats", () => {
  const failList: string[] = ["abc", "2d", "d6", "-1d6", "2d0"];

  failList.forEach((failInput) => {
    const failDie = diceConstructor(failInput);
    expect(failDie.printable).toBe("Bad dice (1d1)");
  });
});

test("roll 1d1 = 1", () => {
  const die: Dice = diceConstructor("1d1");

  const val = roll(die);
  expect(val).toBe(1);
});

test("roll 1d20 20 times = (1-20)", () => {
  const die: Dice = diceConstructor("1d20");
  expect(die.numOfDice).toBe(1);
  expect(die.diceNumber).toBe(20);

  for (let i = 0; i < 20; i++) {
    const val = roll(die);
    expect(val).toBeGreaterThanOrEqual(1);
    expect(val).toBeLessThanOrEqual(20);
  }
});

test("roll 4d6 10 times = 4-24", () => {
  const die: Dice = diceConstructor("4d6");
  expect(die.numOfDice).toBe(4);
  expect(die.diceNumber).toBe(6);

  for (let i = 0; i < 10; i++) {
    const val = roll(die);
    expect(val).toBeGreaterThanOrEqual(4);
    expect(val).toBeLessThanOrEqual(24);
  }
});
