import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";
import Button from "../../../common/button";

export default function ContactForm() {
	const [status, setStatus] = useState("");
	const [statusBg, setStatusBg] = useState("var(--green)");
	function sendEmail(e) {
		setStatus("");
		setStatusBg("var(--green)");
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hwg38dd",
				"template_a1qmoti",
				e.target,
				"PfPiNk0uM4DV-Dq-L"
			)
			.then(
				() => {
					setStatus("Email sent");
				},
				() => {
					setStatus("An error has occurred");
					setStatusBg("var(--red)");
				}
			);
	}

	return (
		<form onSubmit={sendEmail} id="contactForm">
			<h3>Email Me</h3>
			{status && (
				<div id="statusBox" style={{ backgroundColor: statusBg }}>
					{status}
				</div>
			)}
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
