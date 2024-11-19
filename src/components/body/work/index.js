import React from "react";
import work from "../../../data/work";
import WorkCard from "./wordCard";
import "./work.css";

export default function Work() {
	return (
		<section id="work">
			<h2>Work Experience</h2>
			{work.map((work) => (
				<WorkCard work={work} key={work.companyName} />
			))}
		</section>
	);
}
