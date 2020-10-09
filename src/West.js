import React from "react";
import nba from "nba-api-client";

const West = (props) => {
	const westTeams = props.teamData;
	const westImgs = westTeams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} alt="" src={logo} style={{ height: "6em" }} />;
	});

	return (
		<>
			<div>{westImgs}</div>
		</>
	);
};

export default West;
