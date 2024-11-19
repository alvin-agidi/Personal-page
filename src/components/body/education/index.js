import React from "react";
import education from "../../../data/education";
import EducationCard from "./educationCard";
import "./education.css";

export default function Education() {
	return (
		<section id="education">
			<h2>Education</h2>
			{education.map((education) => (
				<EducationCard education={education} key={education.school} />
			))}
		</section>
	);
}
