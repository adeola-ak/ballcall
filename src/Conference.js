import React from "react";
// import nba from "nba-api-client";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import West from "./West";
import East from "./East";
// import teamData from "./teamData";
import Appcss from "./App.css";

const Conference = (props) => {
	console.log(props);

	const teamConfs = props.teamData;
	const west = teamConfs.filter((team) => team.Conf === "West");
	const east = teamConfs.filter((team) => team.Conf === "East");

	return (
		<div className="bkgd">
			<West teamData={west} />
			<East teamData={east} />
		</div>
	);
};

export default Conference;
