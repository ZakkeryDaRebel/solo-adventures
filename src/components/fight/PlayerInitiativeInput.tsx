import { useState } from "react";
import { useGame } from "../../context/GameContext";

export default function PlayerInitiativeInput() {
  const { playerInitiative, setPlayerInitiative } = useGame();
  const [initiativeInput, setInitiativeInput] = useState<string>("");

  if (playerInitiative === null) {
    function submitInitiative() {
      const parsed = Number(initiativeInput);

      if (isNaN(parsed)) {
        alert("Please enter a valid number.");
        return;
      }

      if (parsed < -20 || parsed > 100) {
        alert("Initiative must be between -20 and 100.");
        return;
      }

      setPlayerInitiative(parsed);
    }

    return (
      <div className="text-center space-y-6">
        <h2 className="text-3xl">Roll Initiative</h2>

        <p>Enter your initiative result:</p>

        <input
          type="number"
          value={initiativeInput}
          className="text-black px-3 py-2 rounded"
          placeholder="ex: 14"
          onChange={(e) => setInitiativeInput(e.target.value)}
        />

        <div className="space-x-4">
          <button
            className="bg-blue-600 px-6 py-3 rounded"
            onClick={submitInitiative}
          >
            Start Fight
          </button>
        </div>
      </div>
    );
  }
}
