import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import nba, { teamDetails } from "nba-api-client";
import teamData from "./teamData.js";
import TopTeams from "./TopTeams";
import Conference from "./Conference";
import TeamDetails from "./TeamDetails";
import Nav from "./Nav";

const App = () => {
	// const api = nba;
	// console.log(api);

	const west = teamData.filter((team) => team.Conf === "West");
	const topWest = west.filter(
		(team) =>
			team.Abbrev === "LAL" ||
			team.Abbrev === "LAC" ||
			team.Abbrev === "DEN" ||
			team.Abbrev === "HOU" ||
			team.Abbrev === "OKC" ||
			team.Abbrev === "UTA" ||
			team.Abbrev === "DAL" ||
			team.Abbrev === "POR"
	);

	const east = teamData.filter((team) => team.Conf === "East");
	const topEast = east.filter(
		(team) =>
			team.Abbrev === "MIL" ||
			team.Abbrev === "TOR" ||
			team.Abbrev === "BOS" ||
			team.Abbrev === "IND" ||
			team.Abbrev === "MIA" ||
			team.Abbrev === "PHI" ||
			team.Abbrev === "BKN" ||
			team.Abbrev === "ORL"
	);

	return (
		<Router>
			<Nav />

			<TopTeams teamData={topWest} />
			<TopTeams teamData={topEast} />
			<TeamDetails />
			{/* <Conference teamData={teamData} /> */}
		</Router>
	);
};

export default App;
