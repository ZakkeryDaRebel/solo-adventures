import type { Coin, Cost } from "./Cost";

export function costConstructor(amount: number, type: keyof typeof Coin): Cost {
  return {
    amount: amount,
    type: type,
  };
}
