import React from "react";
import "./footer.css";
import SocialArray from "../common/socialArray";

export default function Footer() {
	return (
		<section id="footer">
			<span>Want to get in touch? Contact me on any platform.</span>
			<SocialArray />
		</section>
	);
}
