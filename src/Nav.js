import React from "react";
import nba, { teamDetails } from "nba-api-client";

const Nav = () => {
	const hero =
		"https://res.cloudinary.com/dusr8fbuo/image/upload/v1601929382/nbahero_yamqhq.jpg";
	return (
		<>
			<header>
				<h1>BALLCALL</h1>
				<ul>
					<li>about</li>
					<li>conferences</li>
					<li>contact</li>
				</ul>
				<div>
					<img
						src={hero}
						style={{ width: "100%", height: "220px" }}
					/>
				</div>
			</header>
		</>
	);
};

export default Nav;
