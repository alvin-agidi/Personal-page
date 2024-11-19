import React from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";
import Button from "../../../common/button";

export default function ContactForm() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hwg38dd",
				"template_a1qmoti",
				e.target,
				"PfPiNk0uM4DV-Dq-L"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form onSubmit={sendEmail} id="contactForm">
			<h3>Email Me</h3>
			<input type="text" placeholder="Name" name="senderName" required />
			<input
				type="email"
				placeholder="Your email address"
				name="email"
				required
			/>
			<input type="text" placeholder="Subject" name="subject" required />
			<textarea
				rows={5}
				cols={50}
				type="text"
				placeholder="Your message"
				name="message"
				required
			></textarea>
			<Button
				type="submit"
				text="Send message"
				icon="far fa-paper-plane"
			/>
		</form>
	);
}
