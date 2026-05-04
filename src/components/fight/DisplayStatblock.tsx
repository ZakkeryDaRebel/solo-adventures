import type { Statblock } from "../../model/statblock/Statblock";
import type { DamageStatblock } from "../../model/statblock/DamageStatblock";
import type { SpellcasterStatblock } from "../../model/statblock/SpellcasterStatblock";

function isDamageStatblock(stat: Statblock): stat is DamageStatblock {
  return "damage" in stat;
}

function isSpellcasterStatblock(stat: Statblock): stat is SpellcasterStatblock {
  return "spellslots" in stat;
}

export function DisplayStatBlock({ statblock }: { statblock: Statblock }) {
  return (
    <div className="bg-slate-900 p-3 rounded text-sm space-y-2">
      {/* ===== BASIC INFO ===== */}
      <div>
        <b>{statblock.name}</b>
      </div>

      <div>
        <b>AC:</b> {statblock.armorClass}
      </div>
      <div>
        <b>Initiative:</b> {statblock.initiative}
      </div>
      <div>
        <b>Speed:</b> {statblock.speed}
      </div>
      <div>
        <b>CR:</b> {statblock.challengeRating}
      </div>

      {/* ⭐ DAMAGE SECTION (if exists) */}
      {isDamageStatblock(statblock) && (
        <div className="pt-2">
          <b>Defenses</b>
          <div>
            Resistances: {statblock.damage.resistances.join(", ") || "None"}
          </div>
          <div>
            Immunities: {statblock.damage.immunities.join(", ") || "None"}
          </div>
          <div>
            Vulnerabilities:{" "}
            {statblock.damage.vulnerabilities.join(", ") || "None"}
          </div>
        </div>
      )}

      {/* ===== ABILITY SCORES ===== */}
      <div className="pt-2">
        <b>Ability Scores</b>
        <div>STR {statblock.abilityScores.Strength}</div>
        <div>DEX {statblock.abilityScores.Dexterity}</div>
        <div>CON {statblock.abilityScores.Constitution}</div>
        <div>INT {statblock.abilityScores.Intelligence}</div>
        <div>WIS {statblock.abilityScores.Wisdom}</div>
        <div>CHA {statblock.abilityScores.Charisma}</div>
      </div>

      {/* ⭐ SPELLCASTER SECTION (if exists) */}
      {isSpellcasterStatblock(statblock) && (
        <div className="pt-2">
          <b>Spellcasting</b>

          <div className="pt-1">
            <b>Spell Slots</b>
            {Object.entries(statblock.spellslots).map(([lvl, slots]) => (
              <div key={lvl}>
                {lvl.toUpperCase()}: {slots.cur}/{slots.max}
              </div>
            ))}
          </div>

          <div className="pt-1">
            <b>Spells</b>
            {Object.entries(statblock.spells).map(([lvl, spells]) =>
              spells.length > 0 ? (
                <div key={lvl}>
                  <b>{lvl.toUpperCase()}:</b>{" "}
                  {spells.map((s) => s.name).join(", ")}
                </div>
              ) : null,
            )}
          </div>
        </div>
      )}

      {/* ===== ACTIONS ===== */}
      <div className="pt-2">
        <b>Actions</b>
        {statblock.actions.map((a, i) => (
          <div key={i}>
            • {a.title} (+{a.addToHit} to hit)
          </div>
        ))}
      </div>
    </div>
  );
}
