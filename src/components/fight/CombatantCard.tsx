import { useState } from "react";
import type { Combatant } from "../../model/node/Combatant";
import { DisplayStatBlock } from "./DisplayStatblock";

export function CombatantCard({
  c,
  onDamage,
  onHeal,
  remove,
}: {
  c: Combatant;
  onDamage: () => void;
  onHeal: () => void;
  remove: () => void;
}) {
  const [showStatblock, setShowStatblock] = useState(false);

  return (
    <div className="text-left bg-slate-800 p-3 rounded space-y-2">
      <b className="text-lg">{c.stat.name}</b>

      {/* HP CONTROLS */}
      <div className="space-x-2">
        <button onClick={onHeal}>+</button>
        <span> HP {c.stat.hp.cur} </span>
        <button onClick={onDamage}>-</button>
        {c.stat.hp.cur <= 0 && (
          <button onClick={remove} className="text-red-400">
            Remove from combat
          </button>
        )}
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setShowStatblock(!showStatblock)}
        className="text-blue-400 underline"
      >
        {showStatblock ? "Hide Statblock" : "Reveal Statblock"}
      </button>

      {/* STATBLOCK PANEL */}
      {showStatblock && DisplayStatBlock({ statblock: c.stat })}
    </div>
  );
}
