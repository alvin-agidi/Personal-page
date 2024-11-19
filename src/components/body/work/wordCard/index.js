import React from "react";
import "./workCard.css";

export default function WorkCard({ item }) {
	return (
		<div className="workCard">
			<div id="workLogo">
				<img src={item.companyLogo} alt="companyLogo"></img>
			</div>
			<div id="workInfo">
				<h3>{item.companyName}</h3>
				<span>{item.role}</span>
				<span>{item.type}</span>
				<label className="workDates">
					{item.startDate} - {item.endDate} ({item.duration})
				</label>
				<p id="workDesc">{item.roleDesc}</p>
			</div>
		</div>
	);
}
