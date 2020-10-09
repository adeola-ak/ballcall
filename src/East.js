import React from "react";
import nba from "nba-api-client";
import { Link } from "react-router-dom";

const East = (props) => {
	const eastTeams = props.teamData;
	const eastImgs = eastTeams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return (
			<Link to={`/TopPlayers/${team.Abbrev}`}>
				<img key={index} alt="" src={logo} style={{ height: "6em" }} />
			</Link>
		);
	});

	return (
		<>
			<div>{eastImgs}</div>
		</>
	);
};

export default East;
