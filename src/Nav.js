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
				<ul>
					<li>about</li>
					<li>conferences</li>
					<li>contact</li>
				</ul>
			</header>
		</>
	);
};

export default Nav;
