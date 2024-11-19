import React from "react";
import "./workCard.css";

export default function WorkCard({ item }) {
	return (
		<div className="workCard">
			<div id="workHeader">
				<img
					id="workLogo"
					src={item.companyLogo}
					alt="companyLogo"
				></img>
				<div id="workInfo">
					<h3>{item.companyName}</h3>
					<span>
						{item.role} • {item.type}
					</span>
					<label className="workDates">
						{item.startDate} - {item.endDate} ({item.duration})
					</label>
				</div>
			</div>
			<span id="workDesc">{item.roleDesc}</span>
		</div>
	);
}
