import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdventurePage from "./pages/AdventurePage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adventure/:adventureId" element={<AdventurePage />} />
      <Route
        path="/adventure/:adventureId/:nodeId"
        element={<AdventurePage />}
      />
      <Route path="/history" element={<HistoryPage />}></Route>
    </Routes>
  );
}
