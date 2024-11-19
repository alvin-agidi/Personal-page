import React from "react";
import "./educationCard.css";

export default function EducationCard({ education }) {
	return (
		<div className="educationCard">
			<div id="educationHeader">
				<img
					id="schoolLogo"
					src={education.schoolLogo}
					alt="schoolLogo"
				></img>
				<div id="educationInfo">
					<h3>{education.school}</h3>
					<span>{education.title}</span>
					<span>{education.grade}</span>
					<label className="educationDates">
						{education.startDate} - {education.endDate} (
						{education.duration})
					</label>
				</div>
			</div>
			{education.desc.map((line) => (
				<span id="educationDesc">• {line}</span>
			))}
		</div>
	);
}
