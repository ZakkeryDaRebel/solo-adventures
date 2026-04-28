import { adventures } from "../model/adventure/AdventureLoader.ts";
import AdventureCard from "../components/AdventureCard";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl mb-8 text-center">Choose Your Adventure</h1>

      <div className="grid gap-6 max-w-xl mx-auto">
        {Object.values(adventures).map(({ meta }) => (
          <button
            type="button"
            key={meta.id}
            onClick={() => {
              console.log(`Go to /adventure/${meta.id}`);
              navigate(`/adventure/${meta.id}`);
            }}
            className="bg-purple-600 hover:bg-purple-700 p-6 rounded text-center"
          >
            <AdventureCard title={meta.title} description={meta.description} />
          </button>
        ))}
      </div>
    </div>
  );
}
