import React from "react";
import nba from "nba-api-client";
import teamData from "./teamData.js";
import TopTeams from "./TopTeams";

const App = () => {
	const logo = nba.getTeamLogoURLs("HOU");
	console.log(logo);

	return <TopTeams teamData={teamData} />;
};

export default App;
