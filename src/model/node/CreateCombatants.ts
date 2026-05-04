import { Side, type Combatant } from "./Combatant";
import type { FightNodeType } from "./FightNodeType";
import { rollD20WithModifier } from "../dice/DiceRoller";

export function createCombatants(node: FightNodeType): Combatant[] {
  const enemies: Combatant[] = node.enemies.map((statblock, i) => ({
    id: "enemy-" + i,
    stat: structuredClone(statblock),
    side: Side.Enemy,
    initiative: rollD20WithModifier(statblock.initiative),
    removed: false,
    logs: [],
  }));

  const allies: Combatant[] = node.allies.map((statblock, i) => ({
    id: "ally-" + i,
    stat: structuredClone(statblock),
    side: Side.Ally,
    initiative: rollD20WithModifier(statblock.initiative),
    removed: false,
    logs: [],
  }));

  return [...allies, ...enemies].sort((a, b) => {
    if (a.initiative === b.initiative) {
      if (a.side === Side.Enemy) return 1;
      if (b.side === Side.Enemy) return -1;
    }
    return b.initiative - a.initiative;
  });
}
