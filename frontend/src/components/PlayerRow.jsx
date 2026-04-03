import { Link } from "react-router-dom";

export default function PlayerRow({ player }) {
  return (
    <tr>
      <td>
        <Link to={`/players/${player.id}`} className="player-link">
          {player.name}
        </Link>
      </td>
      <td className="number-cell">#{player.number}</td>
      <td>
        <span className="position-badge">{player.position}</span>
      </td>
      <td className="bold">{player.ppg.toFixed(1)}</td>
      <td>{player.rpg.toFixed(1)}</td>
      <td>{player.apg.toFixed(1)}</td>
      <td>{player.spg.toFixed(1)}</td>
    </tr>
  );
}
