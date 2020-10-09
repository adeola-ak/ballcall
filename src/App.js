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
import Appcss from "./App.css";
import West from "./West";
import East from "./East";
import Twitter from "./Twitter";

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

	return (
		<div className="Appjs">
			<Nav />
			<Switch>
				{/* <Route
					path="/TopPlayers/"
					render={(routerProps) => (
						<TopPlayers
							playerNames={playerNames}
							{...routerProps}
						/>
					)}
				/> */}

				<Route
					exact
					path="/conference/west/full"
					render={(routerProps) => (
						<West teamData={west} {...routerProps} />
					)}
				/>

				<Route
					exact
					path="/conference/east/full"
					render={(routerProps) => (
						<East teamData={east} {...routerProps} />
					)}
				/>

				<Route
					path="/conference/:side"
					render={(routerProps) => (
						<Conference teamData={teamData} {...routerProps} />
					)}
				/>
				<Route path="/">
					<TopTeams teamData={topWest} side={"WEST".toLowerCase()} />
					<TopTeams teamData={topEast} side={"EAST".toLowerCase()} />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
