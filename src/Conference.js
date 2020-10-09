import React from "react";
import nba from "nba-api-client";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Conference = (props) => {
	console.log(props);
	const teams = props.teamData;

	const imgs = teams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return <img key={index} src={logo} style={{ height: "6em" }} />;
	});
	return <div></div>;
};

export default Conference;
