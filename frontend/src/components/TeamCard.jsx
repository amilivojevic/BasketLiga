import { Link } from "react-router-dom";

export default function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`} className="card team-card-link">
      <div className="team-card">
        <div className="team-card-logo" style={{ background: team.color }}>
          {team.abbreviation}
        </div>
        <div className="team-card-body">
          <div className="team-card-city">{team.city}</div>
          <div className="team-card-name">{team.name}</div>
          <div className="team-card-record">
            <span className="tc-wins">{team.wins}W</span>
            <span className="tc-sep">–</span>
            <span className="tc-losses">{team.losses}L</span>
          </div>
        </div>
        <div className="team-card-arrow">›</div>
      </div>
    </Link>
  );
}
