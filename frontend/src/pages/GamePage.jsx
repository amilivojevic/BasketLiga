import { useParams, Link } from "react-router-dom";
import { getGameById, getTeamById, getPlayerById } from "../data/mockData";
import "../styles/game.css";

function BoxScoreHalf({ lines, team, teamScore, isWinner }) {
  return (
    <div className="boxscore-section">
      <div className="boxscore-team-header">
        <div
          className="boxscore-team-logo"
          style={{ background: team.color }}
        >
          {team.abbreviation}
        </div>
        <Link to={`/teams/${team.id}`} className="boxscore-team-name">
          {team.city} {team.name}
        </Link>
        {teamScore != null && (
          <span className="boxscore-team-score">{teamScore}</span>
        )}
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>MIN</th>
              <th>PTS</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => {
              const player = getPlayerById(line.playerId);
              const topScorer = lines.reduce((m, l) => (l.pts > m.pts ? l : m), lines[0]);
              return (
                <tr key={line.playerId}>
                  <td>
                    <Link
                      to={`/players/${player.id}`}
                      style={{ fontWeight: 700, color: "var(--navy)" }}
                    >
                      {player.name}
                    </Link>
                    <span
                      className="position-badge"
                      style={{ marginLeft: 8 }}
                    >
                      {player.position}
                    </span>
                  </td>
                  <td>{line.min}</td>
                  <td className={line.playerId === topScorer.playerId ? "pts-leader bold" : "bold"}>
                    {line.pts}
                  </td>
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
    </div>
  );
}

export default function GamePage() {
  const { id } = useParams();
  const game = getGameById(id);

  if (!game) {
    return (
      <div className="page-wrapper" style={{ textAlign: "center", paddingTop: 80 }}>
        <h2>Game not found</h2>
        <Link to="/" style={{ color: "var(--orange)", fontWeight: 700 }}>← Back to Home</Link>
      </div>
    );
  }

  const home = getTeamById(game.homeTeamId);
  const away = getTeamById(game.awayTeamId);

  const homeWon = game.played && game.homeScore > game.awayScore;
  const awayWon = game.played && game.awayScore > game.homeScore;

  const dateStr = new Date(game.date + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page-wrapper">
      {/* ── Game header ── */}
      <div className="game-header">
        <div className="game-status-bar">
          <span className={`status-chip ${game.played ? "final" : "scheduled"}`}>
            <span className="status-dot" />
            {game.played ? "Final" : "Scheduled"}
          </span>
        </div>

        <div className="matchup">
          {/* Home team */}
          <div className="matchup-team">
            <div className="matchup-logo" style={{ background: home.color }}>
              {home.abbreviation}
            </div>
            <Link to={`/teams/${home.id}`} className="matchup-team-name">
              {home.city} {home.name}
            </Link>
            {game.played && (
              <span className={`matchup-score ${homeWon ? "winner" : "loser"}`}>
                {game.homeScore}
              </span>
            )}
          </div>

          {/* VS / dash */}
          <div className="matchup-vs">
            {game.played ? (
              <span className="score-dash">–</span>
            ) : (
              <span className="vs-text">VS</span>
            )}
          </div>

          {/* Away team */}
          <div className="matchup-team">
            <div className="matchup-logo" style={{ background: away.color }}>
              {away.abbreviation}
            </div>
            <Link to={`/teams/${away.id}`} className="matchup-team-name">
              {away.city} {away.name}
            </Link>
            {game.played && (
              <span className={`matchup-score ${awayWon ? "winner" : "loser"}`}>
                {game.awayScore}
              </span>
            )}
          </div>
        </div>

        <div className="game-meta-row">
          <div className="game-meta-item">
            <span>📅</span>
            <strong>{dateStr}</strong>
          </div>
          <span className="game-meta-sep" />
          <div className="game-meta-item">
            <span>📍</span>
            <strong>{game.venue}</strong>
          </div>
        </div>
      </div>

      {/* ── Box score ── */}
      {game.played && game.boxScore ? (
        <section>
          <h2 className="section-title">Box Score</h2>
          <BoxScoreHalf
            lines={game.boxScore.home}
            team={home}
            teamScore={game.homeScore}
            isWinner={homeWon}
          />
          <BoxScoreHalf
            lines={game.boxScore.away}
            team={away}
            teamScore={game.awayScore}
            isWinner={awayWon}
          />
        </section>
      ) : (
        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-sm)",
            padding: "48px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>🗓️</div>
          <h3 style={{ color: "var(--navy)", marginBottom: 8 }}>Game Not Yet Played</h3>
          <p style={{ color: "var(--gray-400)" }}>
            Box score will be available after the game on {dateStr}.
          </p>
        </div>
      )}
    </div>
  );
}
