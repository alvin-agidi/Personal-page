import React from "react";
import "./menu.css";

export default function Menu() {
	return (
		<div id="menu">
			<div className="menuOption" id="educationOption">
				<a href="#education">
					<i className="far fa-graduation-cap menuIcon"></i>Education
				</a>
			</div>
			<div className="menuOption" id="workOption">
				<a href="#work">
					<i className="far fa-briefcase menuIcon"></i>Work Experience
				</a>
			</div>
			<div className="menuOption" id="projectsOption">
				<a href="#projects">
					<i className="far fa-code menuIcon"></i>Projects
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
