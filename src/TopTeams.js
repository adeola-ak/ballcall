import React from "react";
// import nba from "nba-api-client";

const TopTeams = (props) => {
	console.log(props.teamData);
	const teams = props.teamData;
	const westTop = teams.map((team) => {
		return (
			<ul>
				<li>{team.name}</li>
				<li>{team.Abbrev}</li>
			</ul>
		);
	});

	return (
		<div>{westTop}</div>

		//  logo = nba.getTeamLogoURLs(abbrev);
	);
};

export default TopTeams;
