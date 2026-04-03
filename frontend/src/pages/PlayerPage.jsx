import { useParams, Link } from "react-router-dom";
import {
  getPlayerById,
  getTeamById,
  games,
} from "../data/mockData";
import "../styles/player.css";

export default function PlayerPage() {
  const { id } = useParams();
  const player = getPlayerById(id);

  if (!player) {
    return (
      <div className="page-wrapper" style={{ textAlign: "center", paddingTop: 80 }}>
        <h2>Player not found</h2>
        <Link to="/" style={{ color: "var(--orange)", fontWeight: 700 }}>← Back to Home</Link>
      </div>
    );
  }

  const team = getTeamById(player.teamId);

  // Find games this player participated in (has a box score entry)
  const playerGames = games
    .filter((g) => {
      if (!g.played || !g.boxScore) return false;
      const allLines = [...g.boxScore.home, ...g.boxScore.away];
      return allLines.some((l) => l.playerId === player.id);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const getLineForGame = (game) => {
    const allLines = [...game.boxScore.home, ...game.boxScore.away];
    return allLines.find((l) => l.playerId === player.id);
  };

  const initials = player.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="page-wrapper">
      {/* ── Player header ── */}
      <div className="player-header">
        <div className="player-avatar">{initials}</div>
        <div className="player-header-info">
          <h1>
            {player.name}
            <span className="jersey-number">#{player.number}</span>
          </h1>
          <div className="player-meta">
            <span className="meta-item">
              <span className="meta-label">Pos</span>
              <span className="position-badge" style={{ marginLeft: 4 }}>
                {player.position}
              </span>
            </span>
            <span className="meta-dot" />
            <span className="meta-item">
              <span className="meta-label">Team</span>
            </span>
          </div>
          {team && (
            <Link to={`/teams/${team.id}`} className="team-link-pill">
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: team.color,
                  flexShrink: 0,
                }}
              />
              {team.city} {team.name}
            </Link>
          )}
        </div>
      </div>

      {/* ── Season Averages ── */}
      <section style={{ marginBottom: 40 }}>
        <h2 className="section-title">Season Averages</h2>
        <div className="stats-grid">
          <div className="stat-chip">
            <span className="chip-value">{player.ppg.toFixed(1)}</span>
            <span className="chip-label">PPG</span>
          </div>
          <div className="stat-chip">
            <span className="chip-value">{player.rpg.toFixed(1)}</span>
            <span className="chip-label">RPG</span>
          </div>
          <div className="stat-chip">
            <span className="chip-value">{player.apg.toFixed(1)}</span>
            <span className="chip-label">APG</span>
          </div>
          <div className="stat-chip">
            <span className="chip-value">{player.spg.toFixed(1)}</span>
            <span className="chip-label">SPG</span>
          </div>
        </div>
      </section>

      {/* ── Recent Game Log ── */}
      <section>
        <h2 className="section-title">Recent Game Log</h2>
        {playerGames.length === 0 ? (
          <p style={{ color: "var(--gray-400)" }}>No game data available.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Opponent</th>
                  <th>Result</th>
                  <th>MIN</th>
                  <th>PTS</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>STL</th>
                  <th>BLK</th>
                </tr>
              </thead>
              <tbody>
                {playerGames.map((g) => {
                  const line = getLineForGame(g);
                  const isHome = g.homeTeamId === player.teamId;
                  const opponentId = isHome ? g.awayTeamId : g.homeTeamId;
                  const opponent = getTeamById(opponentId);
                  const teamScore = isHome ? g.homeScore : g.awayScore;
                  const oppScore  = isHome ? g.awayScore  : g.homeScore;
                  const won = teamScore > oppScore;

                  const dateStr = new Date(g.date + "T12:00:00").toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <tr key={g.id}>
                      <td>
                        <Link
                          to={`/games/${g.id}`}
                          style={{ color: "var(--navy)", fontWeight: 600 }}
                        >
                          {dateStr}
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/teams/${opponent.id}`}
                          style={{ color: "var(--navy)", fontWeight: 600 }}
                        >
                          {isHome ? "" : "@ "}{opponent.name}
                        </Link>
                      </td>
                      <td>
                        <span className={won ? "outcome-w" : "outcome-l"}>
                          {won ? "W" : "L"} {teamScore}–{oppScore}
                        </span>
                      </td>
                      <td>{line.min}</td>
                      <td className="bold">{line.pts}</td>
                      <td>{line.reb}</td>
                      <td>{line.ast}</td>
                      <td>{line.stl}</td>
                      <td>{line.blk}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
