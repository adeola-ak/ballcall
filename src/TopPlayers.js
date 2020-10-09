import React from "react";
import nba, { getPlayerHeadshotURL, getTeamID } from "nba-api-client";

const TopPlayers = (props) => {
	const names = props.playerNames;
	console.log("this is props", props);
	// console.log(names);

	const filtered = names.filter((name) => {
		return name.Abbrev === props.match.params.abbrev;
	});

	const nameID = filtered.map((player, index) => {
		const pIDs = nba.getPlayerID(player.Name);
		const Abbre = player.Names;
		const headShotUrl = nba.getPlayerHeadshotURL(pIDs);

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
