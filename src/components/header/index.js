import React from "react";
import Menu from "./menu";
import "./header.css";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div id="header">
			<div id="menuBox">
				<h2>Alvin Agidi</h2>
				<div id="fullMenu">
					<Menu />
				</div>
				{isOpen && (
					<div id="mobileMenu">
						<Menu />
					</div>
				)}
			</div>
			<i
				className="far fa-bars"
				id="openMenuIcon"
				onClick={() => setIsOpen(!isOpen)}
			/>
		</div>
	);
}
