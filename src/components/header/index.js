import React from "react";
import Menu from "./menu";
import "./header.css";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<div id="fullMenu">
				<Menu />
			</div>
			<div id="mobileMenu">{isOpen && <Menu />}</div>
			<i
				className="far fa-bars"
				id="openMenuIcon"
				onClick={() => setIsOpen(!isOpen)}
			/>
		</div>
	);
}
