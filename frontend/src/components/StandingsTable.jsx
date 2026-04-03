import { Link } from "react-router-dom";
import { getStandings } from "../data/mockData";

export default function StandingsTable() {
  const standings = getStandings();

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>Pts For</th>
            <th>Pts Agst</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team, idx) => {
            const diff = team.diff;
            const diffClass =
              diff > 0 ? "diff-positive" : diff < 0 ? "diff-negative" : "diff-zero";

            return (
              <tr key={team.id}>
                <td>
                  <span className={`standings-rank${idx < 3 ? " top" : ""}`}>
                    {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : idx + 1}
                  </span>
                </td>
                <td>
                  <Link to={`/teams/${team.id}`} className="team-name-cell">
                    <div
                      className="team-avatar"
                      style={{ background: team.color }}
                    >
                      {team.abbreviation}
                    </div>
                    <span>{team.name}</span>
                  </Link>
                </td>
                <td className="bold">{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.ptsFor}</td>
                <td>{team.ptsAgainst}</td>
                <td className={diffClass}>
                  {diff > 0 ? `+${diff}` : diff}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
