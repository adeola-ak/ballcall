import React from "react";
import { getTeamLogoURLs } from "nba-api-client";
import nba from "nba-api-client";

const TopTeams = (props) => {
	console.log(props.teamData);
	const teams = props.teamData;

	const buttonImg = teams.map((team, index) => {
		const logoUrls = getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} src={logo} style={{ height: "6em" }} />;
	});

	return (
		<>
			<div>
				<h1>TOP TEAMS</h1>
				{buttonImg}
				<h3>Click for full conference</h3>
			</div>
		</>
	);
};

export default TopTeams;
