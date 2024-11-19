import React from "react";
import Menu from "./menu";
import "./header.css";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="header">
			<i
				className="far fa-bars"
				id="openSidebarIcon"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && <Menu />}
			{/* {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />} */}
		</div>
	);
}
