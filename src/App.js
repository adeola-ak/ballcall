import React from "react";
import { Switch, Route } from "react-router-dom";
import nba from "nba-api-client";
import teamData from "./teamData.js";
import TopTeams from "./TopTeams";
import Conference from "./Conference";
import TopPlayers from "./TopPlayers";
import Nav from "./Nav";
import Footer from "./Footer";
import playerNames from "./playerNames";

const App = () => {
	const data = nba;
	console.log(data);

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

	// useState will be set to nothing
	// handle click method will set state for current conference
	// after set state for conference pass it to conference route

	return (
		<>
			<Nav />

			<Switch>
				<Route
					path="/TopPlayers/"
					render={(routerProps) => (
						<TopPlayers
							playerNames={playerNames}
							{...routerProps}
						/>
					)}
				/>

				<Route
					path="/conference/:side"
					render={(routerProps) => (
						<Conference teamData={teamData} {...routerProps} />
					)}
				/>
				<Route path="/">
					<TopTeams teamData={topWest} west={west} side={"WEST"} />
					<TopTeams teamData={topEast} east={east} side={"EAST"} />
				</Route>
			</Switch>
			<Footer />
		</>
	);
};

export default App;
