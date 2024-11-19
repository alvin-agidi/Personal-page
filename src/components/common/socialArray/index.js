import React from "react";
import { SocialData } from "../../../data/social";
import "./socialArray.css";

export default function SocialArray() {
	const data = SocialData;
	return (
		<div className="socialArray">
			{data.map((item) => {
				return (
					<a href={item.link} key={item.platform}>
						<div className="SocialIcon">
							<i className={item.icon}></i>
						</div>
					</a>
				);
			})}
		</div>
	);
}
