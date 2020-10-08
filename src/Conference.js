import React from "react";
import nba from "nba-api-client";
import teamData from "./teamData";

const Conference = (props) => {
	console.log(props.teamData);
	const teams = props.teamData;

	const imgs = teams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} src={logo} style={{ height: "6em" }} />;
	});
	return (
		<div>
			<h1>TOP TEAMS</h1>
			{imgs}
		</div>
	);
};

export default Conference;
