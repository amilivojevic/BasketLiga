import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar     from "./components/Navbar";
import HomePage   from "./pages/HomePage";
import TeamsPage  from "./pages/TeamsPage";
import TeamPage   from "./pages/TeamPage";
import PlayerPage from "./pages/PlayerPage";
import GamesPage  from "./pages/GamesPage";
import GamePage   from "./pages/GamePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<HomePage />}   />
        <Route path="/teams"       element={<TeamsPage />}  />
        <Route path="/teams/:id"   element={<TeamPage />}   />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/games"       element={<GamesPage />}  />
        <Route path="/games/:id"   element={<GamePage />}   />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <h2 style={{ fontSize: "2rem", color: "#1a2744" }}>
                404 — Page Not Found
              </h2>
              <a
                href="/"
                style={{
                  color: "#f7941d",
                  fontWeight: 700,
                  marginTop: 16,
                  display: "inline-block",
                }}
              >
                ← Back to Home
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
