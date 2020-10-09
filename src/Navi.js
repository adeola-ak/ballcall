import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Nav";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Navi = () => {
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

				{/* <Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">ballblog</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="mr-auto">
						<Nav.Link href="#home">about</Nav.Link>
						<Nav.Link href="#link">contact</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<Nav.Link href="#link">blog(soon)</Nav.Link>
						<Nav.Link href="#link">stats(soon)</Nav.Link>
					</Nav>
				</Navbar> */}

				<Link to="/">
					<h1 className="pagename">ballblog</h1>
				</Link>
				<nav className="nav">
					<ul className="navlink">
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

export default Navi;
