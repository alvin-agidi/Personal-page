import React from "react";
import SocialArray from "../../common/socialArray";
import Button from "../../common/button";
import "./contact.css";
import ContactForm from "./contactForm";

export default function Contact() {
	return (
		<div className="contact">
			<h2>Contact</h2>
			<div id="contactBox">
				<div id="contactFormBox">
					<ContactForm />
				</div>
				<Button text="Download my CV" icon="far fa-file-download" />
			</div>
			<span>Want to get in touch? Contact me on any platform.</span>
			<SocialArray />
		</div>
	);
}
