import React from "react";
import nba from "nba-api-client";

const East = (props) => {
	const eastTeams = props.teamData;
	const eastImgs = eastTeams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} alt="" src={logo} style={{ height: "6em" }} />;
	});

	return (
		<>
			<div>{eastImgs}</div>
		</>
	);
};

export default East;
