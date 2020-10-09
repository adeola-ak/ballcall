import React from "react";
import nba, { getPlayerHeadshotURL, getTeamID } from "nba-api-client";

const TopPlayers = (props) => {
	const names = props.playerNames;
	console.log("this is props", props);
	// console.log(names);

	const filtered = names.filter((name) => {
		return name.Abbrev == props.match.params.abbrev;
	});

	const nameID = filtered.map((player, index) => {
		const pIDs = nba.getPlayerID(player.Name);
		const Abbre = player.Names;
		console.log(Abbre);
		console.log(pIDs);
		const headShotUrl = nba.getPlayerHeadshotURL(pIDs);
		console.log(headShotUrl);

		return (
			// <Link to={`/TeamDetails/${team.Abbrev}`}>
			<img
				key={index}
				src={headShotUrl}
				alt=""
				style={{ height: "10em" }}
			/>
			// </Link>
		);
	});

	return <div>{nameID}</div>;
};

export default TopPlayers;

//mavs luka PORZIN
//NUG J MURR JOKIC
//HOU JAMES HARDEN RUSS
//clippers kawhi PG
//lakers lebron ad
//okc chris paul steven adams
//portland dame cj mc
//jazz doov gobert

//celts jay t jaylen br
//nets KD lavert
//indiana pacers oladipo brogden
//heat j but bam adebao
//bux giannis middleton
//magic  aaron gorden johnathon isaac
//76ers  embiid ben simmons
//tnt kyle lowry van vleet
