import React from "react";
import "./sidebar.css";

export default function Sidebar({ isOpen, setIsOpen }) {
	return (
		<div className="sidebar">
			{/* <div id="sidebarOptions"> */}
			<div className="sidebarOption">
				<a href="#projects">
					<i className="far fa-pen-square sidebarIcon"></i>
					Projects
				</a>
			</div>
			<div className="sidebarOption">
				<a href="#skills">
					<i className="far fa-code sidebarIcon"></i>Skills
				</a>
			</div>
			<div className="sidebarOption">
				<a href="#work">
					<i className="far fa-briefcase sidebarIcon"></i>Work
				</a>
			</div>
			<div className="sidebarOption">
				<a href="#contact">
					<i className="far fa-user sidebarIcon"></i>Contact
				</a>
			</div>
			{/* </div> */}
		</div>
	);
}
