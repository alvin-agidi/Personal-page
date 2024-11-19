import React from "react";
import Menu from "./menu";
import "./header.css";
import { useState } from "react";
import Sidebar from "../sidebar/index";

export default function Header() {
	const [isOpen, setIsOpen] = useState();
	return (
		<div className="header">
			<Menu />
			<i
				className="far fa-bars"
				id="openSidebarIcon"
				onClick={() => setIsOpen(!isOpen)}
			></i>
			{isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
		</div>
	);
}
