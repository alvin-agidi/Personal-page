import React from "react";
import "./body.css";
import Projects from "../body/projects/index";
import Work from "../body/work/index";
import Contact from "../body/contact/index";
import Education from "../body/education/index";
import SocialArray from "../common/socialArray";

export default function Body() {
	return (
		<div id="body">
			<h1>Alvin Agidi</h1>
			<h2>Software Engineer</h2>
			<SocialArray />
			<Education />
			<Work />
			<Projects />
			<Contact />
		</div>
	);
}
