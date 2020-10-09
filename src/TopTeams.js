import React from "react";
import { getTeamLogoURLs } from "nba-api-client";
import nba from "nba-api-client";
import { Link } from "react-router-dom";

const TopTeams = (props) => {
	const teams = props.teamData;
	// console.log(props);

	const imgs = teams.map((team, index) => {
		const logoUrls = getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return (
			<Link to={`/TopPlayers/${team.Abbrev}`}>
				<img key={index} src={logo} alt="" style={{ height: "6em" }} />
			</Link>
		);
	});

	return (
		<>
			<div>
				<h1>TOP {props.side} TEAMS</h1>
				{imgs}
				<Link to={`/conference/${props.side}`}>
					<button>click for full conference</button>
				</Link>
			</div>
		</>
	);
};

//handleclick

export default TopTeams;
