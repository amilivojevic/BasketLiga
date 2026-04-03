import TeamCard from "../components/TeamCard";
import { teams } from "../data/mockData";
import "../styles/cards.css";

export default function TeamsPage() {
  return (
    <div className="page-wrapper">
      <h1 style={{ fontSize: "1.9rem", color: "var(--navy)", marginBottom: 28 }}>Teams</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
