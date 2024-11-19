import React from "react";
import { work } from "../../../data/work";
import WorkCard from "./wordCard";
import "./work.css";

export default function Work() {
	return (
		<div>
			<h2>Work Experience</h2>
			{work.map((work) => (
				<WorkCard item={work} key={work.companyName} />
			))}
		</div>
	);
}
