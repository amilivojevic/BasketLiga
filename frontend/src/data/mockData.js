// ─── TEAMS ────────────────────────────────────────────────────────────────────
export const teams = [
  { id: 1, name: "Lakers",   city: "Los Angeles", abbreviation: "LAL", wins: 12, losses: 3,  color: "#552583" },
  { id: 2, name: "Bulls",    city: "Chicago",     abbreviation: "CHI", wins: 10, losses: 5,  color: "#CE1141" },
  { id: 3, name: "Celtics",  city: "Boston",      abbreviation: "BOS", wins: 11, losses: 4,  color: "#007A33" },
  { id: 4, name: "Limanski Park",  city: "Miami",       abbreviation: "LMP", wins: 8,  losses: 7,  color: "#98002E" },
  { id: 5, name: "Štrand sharks", city: "Golden State",abbreviation: "ŠTS", wins: 9,  losses: 6,  color: "#1D428A" },
  { id: 6, name: "Nets",     city: "Brooklyn",    abbreviation: "BKN", wins: 5,  losses: 10, color: "#000000" },
];

// ─── PLAYERS ──────────────────────────────────────────────────────────────────
export const players = [
  // Lakers (teamId: 1)
  { id: 1,  teamId: 1, name: "Marcus Rivera",   number: 23, position: "SF", ppg: 28.4, rpg: 7.2, apg: 5.1, spg: 1.4 },
  { id: 2,  teamId: 1, name: "Devon Hollis",    number: 3,  position: "PG", ppg: 19.7, rpg: 4.1, apg: 9.3, spg: 1.8 },
  { id: 3,  teamId: 1, name: "Tyler Brooks",    number: 14, position: "C",  ppg: 14.2, rpg: 11.5,apg: 2.0, spg: 0.6 },
  { id: 4,  teamId: 1, name: "Jordan West",     number: 7,  position: "SG", ppg: 16.8, rpg: 3.7, apg: 3.2, spg: 1.1 },
  { id: 5,  teamId: 1, name: "Kwame Asante",    number: 32, position: "PF", ppg: 10.5, rpg: 6.8, apg: 1.4, spg: 0.9 },

  // Bulls (teamId: 2)
  { id: 6,  teamId: 2, name: "Elijah Morgan",   number: 1,  position: "PG", ppg: 22.1, rpg: 3.9, apg: 8.6, spg: 2.1 },
  { id: 7,  teamId: 2, name: "Dante Price",     number: 91, position: "C",  ppg: 17.3, rpg: 12.4,apg: 1.8, spg: 0.5 },
  { id: 8,  teamId: 2, name: "Rashad Green",    number: 6,  position: "SF", ppg: 14.9, rpg: 5.3, apg: 2.7, spg: 1.3 },
  { id: 9,  teamId: 2, name: "Cole Hanson",     number: 44, position: "PF", ppg: 11.6, rpg: 7.1, apg: 1.2, spg: 0.7 },
  { id: 10, teamId: 2, name: "Tyrell Simms",    number: 22, position: "SG", ppg: 18.4, rpg: 3.5, apg: 4.1, spg: 1.6 },

  // Celtics (teamId: 3)
  { id: 11, teamId: 3, name: "Aaron Beckett",   number: 11, position: "SF", ppg: 26.2, rpg: 6.4, apg: 4.8, spg: 1.5 },
  { id: 12, teamId: 3, name: "Miles Okonkwo",   number: 8,  position: "C",  ppg: 15.7, rpg: 10.9,apg: 2.3, spg: 0.8 },
  { id: 13, teamId: 3, name: "Sam Pierce",      number: 34, position: "PG", ppg: 13.4, rpg: 3.2, apg: 10.1,spg: 1.9 },
  { id: 14, teamId: 3, name: "Devin Chase",     number: 5,  position: "SG", ppg: 20.1, rpg: 4.6, apg: 3.5, spg: 1.2 },
  { id: 15, teamId: 3, name: "Nate Fowler",     number: 25, position: "PF", ppg: 9.8,  rpg: 8.0, apg: 1.6, spg: 0.4 },

  // Limanski Park (teamId: 4)
  { id: 16, teamId: 4, name: "Carlos Vega",     number: 10, position: "PG", ppg: 18.9, rpg: 4.5, apg: 7.7, spg: 2.0 },
  { id: 17, teamId: 4, name: "Isaiah Turner",   number: 30, position: "PF", ppg: 13.3, rpg: 9.2, apg: 1.5, spg: 0.6 },
  { id: 18, teamId: 4, name: "Jaylen Ross",     number: 21, position: "SG", ppg: 21.5, rpg: 4.0, apg: 3.8, spg: 1.7 },
  { id: 19, teamId: 4, name: "Omar Khalil",     number: 55, position: "C",  ppg: 11.2, rpg: 10.6,apg: 2.1, spg: 0.3 },
  { id: 20, teamId: 4, name: "Brendan Cole",    number: 4,  position: "SF", ppg: 15.6, rpg: 5.8, apg: 2.9, spg: 1.0 },

  // Štrand sharks (teamId: 5)
  { id: 21, teamId: 5, name: "Finn Nakamura",   number: 30, position: "SG", ppg: 30.1, rpg: 5.5, apg: 6.3, spg: 1.6 },
  { id: 22, teamId: 5, name: "Darius Lang",     number: 12, position: "PG", ppg: 16.4, rpg: 4.3, apg: 8.2, spg: 1.4 },
  { id: 23, teamId: 5, name: "Kobe Reyes",      number: 41, position: "C",  ppg: 12.8, rpg: 9.7, apg: 2.4, spg: 0.7 },
  { id: 24, teamId: 5, name: "Luca Martinelli", number: 19, position: "SF", ppg: 17.2, rpg: 5.9, apg: 3.1, spg: 1.1 },
  { id: 25, teamId: 5, name: "Chris Adeyemi",   number: 9,  position: "PF", ppg: 10.4, rpg: 7.5, apg: 1.7, spg: 0.5 },

  // Nets (teamId: 6)
  { id: 26, teamId: 6, name: "Zion Holt",       number: 2,  position: "PF", ppg: 16.7, rpg: 7.8, apg: 2.3, spg: 0.9 },
  { id: 27, teamId: 6, name: "Andre Bell",      number: 0,  position: "PG", ppg: 14.3, rpg: 3.6, apg: 7.9, spg: 1.7 },
  { id: 28, teamId: 6, name: "Terrence Fox",    number: 15, position: "SG", ppg: 19.8, rpg: 4.2, apg: 3.0, spg: 1.3 },
  { id: 29, teamId: 6, name: "Malik Stone",     number: 50, position: "C",  ppg: 9.6,  rpg: 8.9, apg: 1.1, spg: 0.4 },
  { id: 30, teamId: 6, name: "Ray Durham",      number: 27, position: "SF", ppg: 13.1, rpg: 5.0, apg: 2.6, spg: 1.0 },
];

// ─── GAMES ────────────────────────────────────────────────────────────────────
export const games = [
  {
    id: 1,
    homeTeamId: 1, awayTeamId: 2,
    date: "2026-03-01", venue: "Staples Arena",
    played: true,
    homeScore: 112, awayScore: 98,
    boxScore: {
      home: [
        { playerId: 1,  min: 36, pts: 32, reb: 8,  ast: 6,  stl: 2, blk: 0 },
        { playerId: 2,  min: 34, pts: 18, reb: 4,  ast: 10, stl: 2, blk: 0 },
        { playerId: 3,  min: 28, pts: 12, reb: 10, ast: 2,  stl: 0, blk: 2 },
        { playerId: 4,  min: 30, pts: 22, reb: 3,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 5,  min: 24, pts: 8,  reb: 6,  ast: 1,  stl: 1, blk: 1 },
      ],
      away: [
        { playerId: 6,  min: 38, pts: 25, reb: 4,  ast: 9,  stl: 3, blk: 0 },
        { playerId: 7,  min: 32, pts: 18, reb: 11, ast: 2,  stl: 0, blk: 3 },
        { playerId: 8,  min: 28, pts: 14, reb: 5,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 9,  min: 22, pts: 10, reb: 7,  ast: 1,  stl: 0, blk: 1 },
        { playerId: 10, min: 30, pts: 21, reb: 3,  ast: 4,  stl: 2, blk: 0 },
      ],
    },
  },
  {
    id: 2,
    homeTeamId: 3, awayTeamId: 5,
    date: "2026-03-03", venue: "TD Garden",
    played: true,
    homeScore: 105, awayScore: 119,
    boxScore: {
      home: [
        { playerId: 11, min: 36, pts: 28, reb: 7,  ast: 5,  stl: 2, blk: 0 },
        { playerId: 12, min: 30, pts: 14, reb: 12, ast: 2,  stl: 0, blk: 3 },
        { playerId: 13, min: 34, pts: 11, reb: 3,  ast: 11, stl: 2, blk: 0 },
        { playerId: 14, min: 32, pts: 22, reb: 4,  ast: 4,  stl: 1, blk: 0 },
        { playerId: 15, min: 20, pts: 10, reb: 8,  ast: 1,  stl: 0, blk: 1 },
      ],
      away: [
        { playerId: 21, min: 38, pts: 38, reb: 6,  ast: 7,  stl: 2, blk: 0 },
        { playerId: 22, min: 35, pts: 15, reb: 5,  ast: 9,  stl: 1, blk: 0 },
        { playerId: 23, min: 28, pts: 11, reb: 10, ast: 2,  stl: 0, blk: 2 },
        { playerId: 24, min: 30, pts: 20, reb: 6,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 25, min: 22, pts: 9,  reb: 7,  ast: 2,  stl: 0, blk: 1 },
      ],
    },
  },
  {
    id: 3,
    homeTeamId: 4, awayTeamId: 6,
    date: "2026-03-05", venue: "FTX Arena",
    played: true,
    homeScore: 99, awayScore: 87,
    boxScore: {
      home: [
        { playerId: 16, min: 35, pts: 20, reb: 4,  ast: 8,  stl: 3, blk: 0 },
        { playerId: 17, min: 28, pts: 12, reb: 10, ast: 2,  stl: 0, blk: 2 },
        { playerId: 18, min: 36, pts: 26, reb: 4,  ast: 4,  stl: 2, blk: 0 },
        { playerId: 19, min: 26, pts: 10, reb: 9,  ast: 2,  stl: 0, blk: 1 },
        { playerId: 20, min: 32, pts: 16, reb: 6,  ast: 3,  stl: 1, blk: 0 },
      ],
      away: [
        { playerId: 26, min: 34, pts: 18, reb: 8,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 27, min: 36, pts: 16, reb: 4,  ast: 8,  stl: 2, blk: 0 },
        { playerId: 28, min: 38, pts: 22, reb: 4,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 29, min: 24, pts: 8,  reb: 9,  ast: 1,  stl: 0, blk: 1 },
        { playerId: 30, min: 28, pts: 11, reb: 5,  ast: 2,  stl: 1, blk: 0 },
      ],
    },
  },
  {
    id: 4,
    homeTeamId: 2, awayTeamId: 3,
    date: "2026-03-08", venue: "United Center",
    played: true,
    homeScore: 108, awayScore: 102,
    boxScore: {
      home: [
        { playerId: 6,  min: 37, pts: 24, reb: 4,  ast: 10, stl: 2, blk: 0 },
        { playerId: 7,  min: 30, pts: 20, reb: 13, ast: 2,  stl: 0, blk: 2 },
        { playerId: 8,  min: 28, pts: 15, reb: 5,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 9,  min: 24, pts: 12, reb: 8,  ast: 1,  stl: 1, blk: 1 },
        { playerId: 10, min: 32, pts: 22, reb: 3,  ast: 4,  stl: 2, blk: 0 },
      ],
      away: [
        { playerId: 11, min: 36, pts: 27, reb: 6,  ast: 5,  stl: 1, blk: 0 },
        { playerId: 12, min: 30, pts: 14, reb: 11, ast: 2,  stl: 0, blk: 2 },
        { playerId: 13, min: 34, pts: 12, reb: 3,  ast: 10, stl: 2, blk: 0 },
        { playerId: 14, min: 30, pts: 19, reb: 4,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 15, min: 18, pts: 8,  reb: 7,  ast: 1,  stl: 0, blk: 1 },
      ],
    },
  },
  {
    id: 5,
    homeTeamId: 5, awayTeamId: 1,
    date: "2026-03-10", venue: "Chase Center",
    played: true,
    homeScore: 101, awayScore: 115,
    boxScore: {
      home: [
        { playerId: 21, min: 36, pts: 29, reb: 6,  ast: 7,  stl: 1, blk: 0 },
        { playerId: 22, min: 34, pts: 14, reb: 4,  ast: 8,  stl: 2, blk: 0 },
        { playerId: 23, min: 28, pts: 12, reb: 9,  ast: 2,  stl: 0, blk: 2 },
        { playerId: 24, min: 30, pts: 16, reb: 6,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 25, min: 20, pts: 9,  reb: 7,  ast: 1,  stl: 0, blk: 1 },
      ],
      away: [
        { playerId: 1,  min: 38, pts: 34, reb: 8,  ast: 6,  stl: 2, blk: 0 },
        { playerId: 2,  min: 34, pts: 20, reb: 4,  ast: 11, stl: 3, blk: 0 },
        { playerId: 3,  min: 26, pts: 14, reb: 10, ast: 2,  stl: 0, blk: 3 },
        { playerId: 4,  min: 30, pts: 18, reb: 3,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 5,  min: 22, pts: 10, reb: 6,  ast: 2,  stl: 1, blk: 1 },
      ],
    },
  },
  {
    id: 6,
    homeTeamId: 6, awayTeamId: 4,
    date: "2026-03-12", venue: "Barclays Center",
    played: true,
    homeScore: 88, awayScore: 94,
    boxScore: {
      home: [
        { playerId: 26, min: 36, pts: 20, reb: 8,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 27, min: 35, pts: 15, reb: 4,  ast: 9,  stl: 2, blk: 0 },
        { playerId: 28, min: 38, pts: 22, reb: 4,  ast: 3,  stl: 1, blk: 0 },
        { playerId: 29, min: 26, pts: 9,  reb: 9,  ast: 1,  stl: 0, blk: 1 },
        { playerId: 30, min: 28, pts: 12, reb: 5,  ast: 2,  stl: 1, blk: 0 },
      ],
      away: [
        { playerId: 16, min: 36, pts: 22, reb: 5,  ast: 8,  stl: 2, blk: 0 },
        { playerId: 17, min: 28, pts: 14, reb: 10, ast: 1,  stl: 0, blk: 2 },
        { playerId: 18, min: 37, pts: 25, reb: 4,  ast: 4,  stl: 2, blk: 0 },
        { playerId: 19, min: 25, pts: 11, reb: 9,  ast: 2,  stl: 0, blk: 1 },
        { playerId: 20, min: 30, pts: 16, reb: 6,  ast: 3,  stl: 1, blk: 0 },
      ],
    },
  },
  {
    id: 7,
    homeTeamId: 1, awayTeamId: 3,
    date: "2026-04-06", venue: "Staples Arena",
    played: false,
    homeScore: null, awayScore: null,
    boxScore: null,
  },
  {
    id: 8,
    homeTeamId: 2, awayTeamId: 5,
    date: "2026-04-08", venue: "United Center",
    played: false,
    homeScore: null, awayScore: null,
    boxScore: null,
  },
  {
    id: 9,
    homeTeamId: 4, awayTeamId: 1,
    date: "2026-04-10", venue: "FTX Arena",
    played: false,
    homeScore: null, awayScore: null,
    boxScore: null,
  },
  {
    id: 10,
    homeTeamId: 6, awayTeamId: 3,
    date: "2026-04-12", venue: "Barclays Center",
    played: false,
    homeScore: null, awayScore: null,
    boxScore: null,
  },
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────
export const getTeamById = (id) => teams.find((t) => t.id === Number(id));
export const getPlayerById = (id) => players.find((p) => p.id === Number(id));
export const getGameById = (id) => games.find((g) => g.id === Number(id));
export const getPlayersByTeam = (teamId) => players.filter((p) => p.teamId === Number(teamId));
export const getGamesByTeam = (teamId) =>
  games.filter((g) => g.homeTeamId === Number(teamId) || g.awayTeamId === Number(teamId));

export const getStandings = () => {
  return teams
    .map((team) => {
      const teamGames = games.filter(
        (g) => g.played && (g.homeTeamId === team.id || g.awayTeamId === team.id)
      );
      const ptsFor = teamGames.reduce((sum, g) => {
        return sum + (g.homeTeamId === team.id ? g.homeScore : g.awayScore);
      }, 0);
      const ptsAgainst = teamGames.reduce((sum, g) => {
        return sum + (g.homeTeamId === team.id ? g.awayScore : g.homeScore);
      }, 0);
      return { ...team, ptsFor, ptsAgainst, diff: ptsFor - ptsAgainst };
    })
    .sort((a, b) => b.wins - a.wins || b.diff - a.diff);
};
