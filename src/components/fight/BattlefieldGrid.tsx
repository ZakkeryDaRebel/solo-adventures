import type { Combatant } from "../../model/node/Combatant";

export function BattlefieldGrid({
  grid,
}: {
  grid: string[][];
  combatants: Combatant[];
}) {
  return (
    <div
      className="grid gap-2 justify-center"
      style={{ gridTemplateColumns: `repeat(${grid[0].length}, 60px)` }}
    >
      {grid.map((row, r) =>
        row.map((cell, c) => {
          return (
            <div
              key={`${r}-${c}`}
              className="w-14 h-14 bg-slate-700 flex items-center justify-center rounded relative group"
            >
              {cell}
            </div>
          );
        }),
      )}
    </div>
  );
}
