import React from "react";
import socialData from "../../../data/social";
import "./socialArray.css";

export default function SocialArray() {
	return (
		<div className="socialArray">
			{socialData.map((item) => {
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
