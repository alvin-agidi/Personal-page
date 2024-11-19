import React from "react";
import "./menu.css";

function Menu() {
	return (
		<div id="menu">
			<div className="menuOption" id="projectsOption">
				<a href="#projects">
					<i className="far fa-pen-square menuIcon"></i>Projects
				</a>
			</div>
			<div className="menuOption" id="skillsOption">
				<a href="#skills">
					<i className="far fa-code menuIcon"></i>Skills
				</a>
			</div>
			<div className="menuOption" id="workOption">
				<a href="#work">
					<i className="far fa-briefcase menuIcon"></i>Work
				</a>
			</div>
			<div className="menuOption" id="contactOption">
				<a href="#contact">
					<i className="far fa-user menuIcon"></i>Contact
				</a>
			</div>
		</div>
	);
}

export default Menu;
