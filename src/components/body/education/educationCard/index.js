import React from "react";
import "./educationCard.css";

export default function EducationCard({ education }) {
	return (
		<div className="educationCard">
			<div className="educationHeader">
				<div className="schoolLogo">
					<img src={education.schoolLogo} alt="schoolLogo" />
				</div>
				<div className="educationInfo">
					<h3>{education.school}</h3>
					<span>{education.title}</span>
					<span>{education.grade}</span>
					<span>
						{education.startDate} - {education.endDate} (
						{education.duration})
					</span>
				</div>
			</div>
			{education.desc.map((line) => (
				<span className="educationDesc">• {line}</span>
			))}
		</div>
	);
}
