import React from "react";
import socialData from "../../../data/social";
import "./socialArray.css";

export default function SocialArray() {
	return (
		<div className="socialArray">
			<div className="iconArray">
				{socialData.map((item) => {
					return (
						<a
							className="SocialIcon"
							href={item.link}
							key={item.platform}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className={item.icon} />
						</a>
					);
				})}
			</div>
			<span>alvin.agidi@gmail.com</span>
		</div>
	);
}
