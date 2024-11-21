import React from "react";
import "./workCard.css";

export default function WorkCard({ work }) {
	return (
		<div className="workCard">
			<div id="workHeader">
				<img
					id="workLogo"
					src={work.companyLogo}
					alt="companyLogo"
				></img>
				<div id="workInfo">
					<h3>{work.company}</h3>
					<span>
						{work.role} • {work.type}
					</span>
					<span>{work.location}</span>
					<span className="workDates">
						{work.startDate} - {work.endDate} ({work.duration})
					</span>
				</div>
			</div>
			{work.roleDesc.map((line) => (
				<span key={line}>• {line}</span>
			))}
		</div>
	);
}