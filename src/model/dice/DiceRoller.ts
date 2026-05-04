import { diceConstructor, type Dice } from "./Dice";

export function roll(dice: Dice): number {
  let total = 0;
  for (let i = 0; i < dice.numOfDice; i++) {
    total += Math.floor(Math.random() * dice.diceNumber) + 1;
  }
  return total;
}

export function rollWithModifier(dice: Dice, modifier: number): number {
  return roll(dice) + modifier;
}

export function rollD20WithModifier(modifier: number): number {
  return roll(diceConstructor("1d20")) + modifier;
}
