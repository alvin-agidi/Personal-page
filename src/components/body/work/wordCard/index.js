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
					<h3>{work.companyName}</h3>
					<span>
						{work.role} • {work.type}
					</span>
					<label className="workDates">
						{work.startDate} - {work.endDate} ({work.duration})
					</label>
				</div>
			</div>
			{work.roleDesc.map((line) => (
				<span id="workDesc">• {line}</span>
			))}
		</div>
	);
}
