import { useState } from "react";
import GameCard from "../components/GameCard";
import { games } from "../data/mockData";
import "../styles/cards.css";

export default function GamesPage() {
  const [filter, setFilter] = useState("all"); // "all" | "played" | "upcoming"

  const filtered = games
    .filter((g) => {
      if (filter === "played")   return g.played;
      if (filter === "upcoming") return !g.played;
      return true;
    })
    .sort((a, b) => {
      if (filter === "upcoming") return new Date(a.date) - new Date(b.date);
      return new Date(b.date) - new Date(a.date);
    });

  const btnStyle = (val) => ({
    padding: "8px 20px",
    borderRadius: "var(--radius-sm)",
    fontWeight: 700,
    fontSize: "0.85rem",
    cursor: "pointer",
    border: "none",
    background: filter === val ? "var(--orange)" : "var(--white)",
    color:      filter === val ? "var(--white)"  : "var(--navy)",
    boxShadow: "var(--shadow-sm)",
    transition: "background 0.2s, color 0.2s",
  });

  return (
    <div className="page-wrapper">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <h1 style={{ fontSize: "1.9rem", color: "var(--navy)" }}>All Games</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={btnStyle("all")}      onClick={() => setFilter("all")}>All</button>
          <button style={btnStyle("played")}   onClick={() => setFilter("played")}>Results</button>
          <button style={btnStyle("upcoming")} onClick={() => setFilter("upcoming")}>Upcoming</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
        {filtered.map((g) => <GameCard key={g.id} game={g} />)}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "var(--gray-400)", textAlign: "center", padding: "40px 0" }}>
          No games found.
        </p>
      )}
    </div>
  );
}
