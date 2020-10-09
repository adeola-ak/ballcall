import React from "react";
import { getTeamLogoURLs } from "nba-api-client";
// import nba from "nba-api-client";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const TopTeams = (props) => {
	const teams = props.teamData;

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
			<div className="container">
				<div className="teambackground">
					<h1 className="sectionnames">top in the {props.side}</h1>
					{imgs}
					<br></br>
					<Link to={`/conference/${props.side}/full`}>
						<Button variant="warning">full conference</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

//handleclick

export default TopTeams;
