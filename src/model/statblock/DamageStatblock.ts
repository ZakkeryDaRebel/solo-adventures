import type { Statblock } from "./Statblock";
import type { Condition } from "./info/Condition";
import type { Damage } from "./info/Damage";

export interface DamageStatblock extends Statblock {
  damage: {
    resistances: (typeof Damage)[];
    immunities: (typeof Damage)[];
    vulnerabilities: (typeof Damage)[];
  };
  condition: {
    immunities: (typeof Condition)[];
  };
}
