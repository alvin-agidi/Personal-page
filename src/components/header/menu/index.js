import React from "react";
import "./menu.css";

export default function Menu() {
	return (
		<div id="menu">
			<a href="#education" id="educationOption" className="menuOption">
				<i className="far fa-graduation-cap menuIcon" />
				Education
			</a>
			<a href="#work" id="workOption" className="menuOption">
				<i className="far fa-briefcase menuIcon" />
				Work Experience
			</a>
			<a href="#projects" id="projectsOption" className="menuOption">
				<i className="far fa-code menuIcon" />
				Projects
			</a>
			<a href="#contact" id="contactOption" className="menuOption">
				<i className="far fa-user menuIcon" />
				Contact
			</a>
		</div>
	);
}
