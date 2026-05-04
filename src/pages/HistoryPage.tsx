import { VERSION_HISTORY } from "../version/VersionHistory";

export default function HistoryPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Project History</h1>
      <p>
        For clarification, a new Version is anytime I push my code from my local
        device to the website
      </p>
      <h2>Semantic Version Explanation: v#1.#2.#3</h2>
      <p>
        For my project, a #1 update will be big release, such as a huge revamp
        to a system or a whole new adventure coming out.
      </p>
      <p>
        A #2 update will be some big information, such as new base information
        or an update to something big.
      </p>
      <p>
        And finally, a #3 update will be for small updates, such as bug fixes or
        project structure updates.
      </p>

      {VERSION_HISTORY.map((entry, i) => (
        <div
          key={i}
          className="bg-slate-800 p-6 rounded-xl space-y-3 shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Version {entry.version}</h2>
            <span className="text-sm text-slate-400">{entry.date}</span>
            <span className="text-sm text-slate-400">{entry.commit}</span>
          </div>

          {/* Description */}
          <p className="italic text-slate-300">{entry.description}</p>

          {/* Additions */}
          {entry.additions.length > 0 && (
            <div>
              <h3 className="text-green-400 font-semibold">Additions</h3>
              <ul className="list-disc list-inside">
                {entry.additions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Reworks */}
          {entry.reworks.length > 0 && (
            <div>
              <h3 className="text-green-400 font-semibold">Reworks</h3>
              <ul className="list-disc list-inside">
                {entry.reworks.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Removals */}
          {entry.removals.length > 0 && (
            <div>
              <h3 className="text-red-400 font-semibold">Removals</h3>
              <ul className="list-disc list-inside">
                {entry.removals.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
