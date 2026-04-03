import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="brand-icon">🏀</div>
          <span className="brand-text">
            Basket<span>Liga</span>
          </span>
        </NavLink>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links${open ? "" : " closed"}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon">🏠</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon">👕</span> Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon">📅</span> Games
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
