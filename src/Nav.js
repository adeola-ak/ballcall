import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const hero =
		"https://res.cloudinary.com/dusr8fbuo/image/upload/v1601929382/nbahero_yamqhq.jpg";

	return (
		<>
			<header>
				<div>
					<img
						src={hero}
						alt=""
						style={{ width: "100%", height: "220px" }}
					/>
				</div>
				<Link to="/">
					<h1>ballblog</h1>
				</Link>
				<nav>
					<ul>
						<li>about</li>
						<li>contact</li>
						<li>blog(soon)</li>
						<li>stats(soon)</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Nav;
