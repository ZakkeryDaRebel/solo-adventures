import { useState, useEffect } from "react";
import { createCombatants } from "../model/node/CreateCombatants";
import type { FightNodeType } from "../model/node/FightNodeType";
import { Side, type Combatant } from "../model/node/Combatant";
import { rollD20WithModifier } from "../model/dice/DiceRoller";
import { CombatantCard } from "../components/fight/CombatantCard";
import { BattlefieldGrid } from "../components/fight/BattlefieldGrid";
import { useGame } from "../context/GameContext";
import PlayerInitiativeInput from "../components/fight/PlayerInitiativeInput";

interface Props {
  node: FightNodeType;
  goTo: (id: string) => void;
}

export default function FightPage({ node, goTo }: Props) {
  // ===== COMBAT STATE =====
  const [combatants, setCombatants] = useState<Combatant[]>(
    createCombatants(node),
  );
  const [roundPointer, setRoundPointer] = useState(100);
  //const [grid, setGrid] = useState<string[][]>(node.battlefield);
  const [grid] = useState<string[][]>(node.battlefield);

  const { playerInitiative, setPlayerInitiative } = useGame();
  const [preRun, setPreRun] = useState<boolean>(false);

  useEffect(() => {
    if (playerInitiative === null) {
      return;
    }
    if (!preRun) {
      runRoundUntilPlayer(); // start combat immediately
    }
  });

  if (playerInitiative === null) {
    return <PlayerInitiativeInput />;
  }

  function addLogToCombatant(index: number, message: string) {
    setCombatants((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, logs: [...c.logs, message] } : c,
      ),
    );
  }

  // ===== ROUND ENGINE =====
  function runRoundUntilPlayer() {
    setPreRun(true);
    if (playerInitiative === null) {
      return;
    }

    let pointer = roundPointer - 1; // start AFTER the player

    while (true) {
      // wrap initiative loop
      if (pointer < -20) pointer = 100;

      // 🎯 STOP when player turn reached again
      if (pointer === playerInitiative) {
        setRoundPointer(pointer);
        return;
      }

      for (const c of combatants) {
        if (c.removed) continue;
        if (c.stat.hp.cur <= 0) continue;

        // 🤖 Enemy turn
        if (pointer === c.initiative) {
          const action = c.stat.actions[0];
          const rollVal = rollD20WithModifier(action.addToHit);

          addLogToCombatant(
            combatants.indexOf(c),
            `${c.stat.name}: ${action.title}. Attacks with roll ${rollVal}.`,
          );
        }
      }

      pointer--;
    }
  }

  function endTurn() {
    setCombatants((prev) =>
      prev.map((changeHP) => ({ ...changeHP, logs: [] })),
    );
    runRoundUntilPlayer();
  }
  // Call endTurn right off the bat to autoload the enemy attacks

  // ===== MOVEMENT SYSTEM =====
  // function moveUnit(
  //   grid: string[][],
  //   letter: string,
  //   newRow: number,
  //   newCol: number
  // ) {
  //   const newGrid = grid.map(row => [...row]);

  //   for (let r = 0; r < newGrid.length; r++) {
  //     for (let c = 0; c < newGrid[0].length; c++) {
  //       if (newGrid[r][c] === letter) newGrid[r][c] = "_";
  //     }
  //   }

  //   newGrid[newRow][newCol] = letter;
  //   setGrid(newGrid);
  // }

  // ===== REMOVE COMBATANT =====
  function changeHP(index: number, delta: number) {
    setCombatants((prev) =>
      prev.map((c, i) =>
        i === index
          ? {
              ...c,
              stat: {
                ...c.stat,
                hp: {
                  ...c.stat.hp,
                  cur: c.stat.hp.cur + delta,
                },
              },
            }
          : c,
      ),
    );
  }

  function removeCombatant(index: number) {
    setCombatants((prev) =>
      prev.map((c, i) => (i === index ? { ...c, removed: true } : c)),
    );
  }

  const enemiesAlive = combatants.some(
    (c) => c.side === Side.Enemy && !c.removed && c.stat.hp.cur > 0,
  );

  // ===== RENDER =====
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-4xl text-center font-bold">Combat</h1>

      {/* ===== BATTLEFIELD ===== */}
      <BattlefieldGrid grid={grid} combatants={combatants} />

      {/* ===== COMBATANTS PANEL ===== */}
      <div className="grid grid-cols-2 gap-6">
        {combatants
          .map((c, originalIndex) => ({ c, originalIndex }))
          .filter((obj) => !obj.c.removed)
          .map(({ c, originalIndex }) => (
            <div key={originalIndex} className="space-y-2">
              <CombatantCard
                c={c}
                onDamage={() => changeHP(originalIndex, -1)}
                onHeal={() => changeHP(originalIndex, +1)}
                remove={() => removeCombatant(originalIndex)}
              />

              {/* ⭐ COMBATANT LOGS */}
              {c.logs.length > 0 && (
                <div className="bg-black/30 rounded p-2 text-sm max-h-32 overflow-y-auto">
                  {c.logs.map((log, i) => (
                    <div key={i}>• {log}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>

      {/* ===== CONTROLS ===== */}
      <div className="flex gap-4 justify-center">
        <button onClick={endTurn} className="bg-purple-600 px-6 py-3 rounded">
          End Turn
        </button>

        {!enemiesAlive && (
          <button
            onClick={() => {
              goTo(node.winNode);
              setPlayerInitiative(null);
            }}
            className="bg-green-600 px-6 py-3 rounded"
          >
            All enemies are dead
          </button>
        )}

        <button
          onClick={() => {
            goTo(node.loseNode);
            setPlayerInitiative(null);
          }}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Player is dead
        </button>
      </div>
    </div>
  );
}
