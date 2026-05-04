import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GameProvider } from "./context/GameProvider";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <GameProvider>
      <App />
    </GameProvider>
  </HashRouter>,
);
