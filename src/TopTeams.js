import React from "react";
import { getTeamLogoURLs } from "nba-api-client";
// import nba from "nba-api-client";
import { Link } from "react-router-dom";

const TopTeams = (props) => {
	const teams = props.teamData;
	// console.log(props);

	const imgs = teams.map((team, index) => {
		const logoUrls = getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return (
			<Link to={`/TopPlayers/${team.Abbrev}`}>
				<img
					className="logos"
					key={index}
					src={logo}
					alt=""
					style={{ height: "6em" }}
				/>
			</Link>
		);
	});

	return (
		<>
			<div>
				<h1 className="section">top in the {props.side}</h1>
				{imgs}
				<Link to={`/conference/${props.side}/full`}>
					<button>full conference</button>
				</Link>
			</div>
		</>
	);
};

//handleclick

export default TopTeams;
