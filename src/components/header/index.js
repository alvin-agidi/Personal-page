import React, { useState } from "react";
import Menu from "./menu";
import "./header.css";
import { Squash as Hamburger } from "hamburger-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div id="headerBox">
			<div id="header">
				<h2>Alvin Agidi</h2>
				<div id="fullMenu">
					<Menu />
				</div>
				<div id="toggleMenuIcon">
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						size={24}
						rounded
					/>
				</div>
			</div>
			<div id="mobileMenu" className={isOpen ? "open" : "closed"}>
				<Menu />
			</div>
		</div>
	);
}
