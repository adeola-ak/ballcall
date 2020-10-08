import React from "react";
import { getTeamLogoURLs } from "nba-api-client";
import nba from "nba-api-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TopTeams = (props) => {
	const teams = props.teamData;

	const imgs = teams.map((team, index) => {
		const logoUrls = getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} src={logo} style={{ height: "6em" }} />;
	});

	return (
		<>
			<Router>
				<div>
					<h1>TOP TEAMS</h1>
					{imgs}
					<Link>
						<button>click for full conference</button>
					</Link>
				</div>
			</Router>
		</>
	);
};

export default TopTeams;

//
