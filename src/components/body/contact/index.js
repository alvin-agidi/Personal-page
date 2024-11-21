import React from "react";
import Button from "../../common/button";
import "./contact.css";
import ContactForm from "./contactForm";

export default function Contact() {
	return (
		<section id="contact">
			<h2>Contact</h2>
			<div id="contactBox">
				<ContactForm />
				<Button text="Download my CV" icon="far fa-file-download" />
			</div>
		</section>
	);
}
