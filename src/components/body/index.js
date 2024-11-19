import React from "react";
import "./body.css";
import Projects from "../body/projects/index";
import Work from "../body/work/index";
import Contact from "../body/contact/index";
import SocialArray from "../common/socialArray";

export default function Body() {
	return (
		<div className="body">
			<h1>Alvin Agidi</h1>
			<SocialArray />
			{/* <section id="education">
				<Education />
			</section> */}
			<section id="work">
				<Work />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}
