import React from "react";
import "./button.css";

export default function Button(props) {
	return (
		<button {...props}>
			<i className={props.icon}></i>
			{props.text}
		</button>
	);
}
