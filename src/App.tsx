import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdventurePage from "./pages/AdventurePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adventure/:adventureId" element={<AdventurePage />} />
      <Route
        path="/adventure/:adventureId/:nodeId"
        element={<AdventurePage />}
      />
    </Routes>
  );
}
