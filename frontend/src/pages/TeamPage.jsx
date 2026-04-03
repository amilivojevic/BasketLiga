import { useParams, Link } from "react-router-dom";
import { getTeamById, getPlayersByTeam, getGamesByTeam, getTeamById as teamById } from "../data/mockData";
import PlayerRow from "../components/PlayerRow";
import GameCard from "../components/GameCard";
import "../styles/team.css";
import "../styles/cards.css";

export default function TeamPage() {
  const { id } = useParams();
  const team = getTeamById(id);

  if (!team) {
    return (
      <div className="page-wrapper" style={{ textAlign: "center", paddingTop: 80 }}>
        <h2>Team not found</h2>
        <Link to="/" style={{ color: "var(--orange)", fontWeight: 700 }}>← Back to Home</Link>
      </div>
    );
  }

  const players = getPlayersByTeam(id);
  const teamGames = getGamesByTeam(id);

  const played   = teamGames.filter((g) => g.played);
  const upcoming = teamGames.filter((g) => !g.played);
  const allSorted = [
    ...upcoming.sort((a, b) => new Date(a.date) - new Date(b.date)),
    ...played.sort((a, b)   => new Date(b.date) - new Date(a.date)),
  ];

  return (
    <div className="page-wrapper">
      {/* ── Team header ── */}
      <div className="team-header">
        <div className="team-logo-large" style={{ background: team.color }}>
          {team.abbreviation}
        </div>
        <div className="team-header-info">
          <div className="city">{team.city}</div>
          <h1>{team.name}</h1>
          <div className="team-record">
            <span className="record-pill win">{team.wins} W</span>
            <span style={{ color: "var(--gray-400)", fontWeight: 700 }}>–</span>
            <span className="record-pill loss">{team.losses} L</span>
          </div>
        </div>
      </div>

      {/* ── Roster ── */}
      <section style={{ marginBottom: 40 }}>
        <h2 className="section-title">Roster</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>#</th>
                <th>Pos</th>
                <th>PPG</th>
                <th>RPG</th>
                <th>APG</th>
                <th>SPG</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <PlayerRow key={p.id} player={p} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Games ── */}
      <section>
        <h2 className="section-title">Schedule & Results</h2>
        <div className="team-games-list">
          {allSorted.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </div>
  );
}
