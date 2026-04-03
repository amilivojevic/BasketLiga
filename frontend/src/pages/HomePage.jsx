import { Link } from "react-router-dom";
import StandingsTable from "../components/StandingsTable";
import GameCard from "../components/GameCard";
import TeamCard from "../components/TeamCard";
import { games, teams } from "../data/mockData";
import "../styles/home.css";
import "../styles/cards.css";

export default function HomePage() {
  const sortedPlayed = [...games]
    .filter((g) => g.played)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const upcoming = [...games]
    .filter((g) => !g.played)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <div className="home-hero">
        <div className="hero-text">
          <h1>
            Welcome to <span>BasketLiga</span>
          </h1>
          <p>
            Track standings, scores, and stats for your local basketball
            league — all in one place.
          </p>
        </div>
        <div className="hero-badge">
          <span className="badge-num">{teams.length}</span>
          <span className="badge-label">Teams</span>
        </div>
        <div className="hero-badge">
          <span className="badge-num">{games.filter((g) => g.played).length}</span>
          <span className="badge-label">Games Played</span>
        </div>
        <div className="hero-badge">
          <span className="badge-num">{games.filter((g) => !g.played).length}</span>
          <span className="badge-label">Upcoming</span>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="home-grid">
        {/* Left column */}
        <div>
          <section className="home-section">
            <h2 className="section-title">Standings</h2>
            <StandingsTable />
          </section>

          <section className="home-section">
            <h2 className="section-title">Teams</h2>
            <div className="teams-grid">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <div>
          <section className="home-section">
            <h2 className="section-title">Upcoming Games</h2>
            <div className="games-sidebar">
              {upcoming.length ? (
                upcoming.map((g) => <GameCard key={g.id} game={g} />)
              ) : (
                <p style={{ color: "var(--gray-400)" }}>No upcoming games.</p>
              )}
            </div>
          </section>

          <section className="home-section">
            <h2 className="section-title">Recent Results</h2>
            <div className="games-sidebar">
              {sortedPlayed.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          </section>

          <Link
            to="/games"
            style={{
              display: "block",
              textAlign: "center",
              padding: "13px",
              background: "var(--navy)",
              color: "var(--orange)",
              borderRadius: "var(--radius-md)",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              marginTop: "8px",
            }}
          >
            View All Games →
          </Link>
        </div>
      </div>
    </div>
  );
}
