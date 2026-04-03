import { Link } from "react-router-dom";
import { getTeamById } from "../data/mockData";

export default function GameCard({ game }) {
  const home = getTeamById(game.homeTeamId);
  const away = getTeamById(game.awayTeamId);

  const dateStr = new Date(game.date + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/games/${game.id}`} className="card game-card-link">
      <div className="game-card">
        <div className="game-card-date">
          <span className={`badge ${game.played ? "badge-win" : "badge-upcoming"}`}>
            {game.played ? "Final" : "Upcoming"}
          </span>
          <span className="game-card-datestr">{dateStr}</span>
        </div>

        <div className="game-card-matchup">
          <div className="game-card-team">
            <div
              className="game-card-logo"
              style={{ background: home.color }}
            >
              {home.abbreviation}
            </div>
            <span className="game-card-name">{home.name}</span>
            {game.played && (
              <span
                className={`game-card-score ${
                  game.homeScore > game.awayScore ? "score-win" : "score-loss"
                }`}
              >
                {game.homeScore}
              </span>
            )}
          </div>

          <div className="game-card-sep">
            {game.played ? <span className="vs-label">FINAL</span> : <span className="vs-label">VS</span>}
          </div>

          <div className="game-card-team away">
            <div
              className="game-card-logo"
              style={{ background: away.color }}
            >
              {away.abbreviation}
            </div>
            <span className="game-card-name">{away.name}</span>
            {game.played && (
              <span
                className={`game-card-score ${
                  game.awayScore > game.homeScore ? "score-win" : "score-loss"
                }`}
              >
                {game.awayScore}
              </span>
            )}
          </div>
        </div>

        <div className="game-card-venue">{game.venue}</div>
      </div>
    </Link>
  );
}
