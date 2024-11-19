import React from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";
import Button from "../../../common/button";

export default function ContactForm() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_3ivb4f4",
				"template_j2igdjo",
				e.target,
				"user_mVikwZpqH6OxKLJAC1QHV"
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
		<div className="contactFormBox">
			<h3>Email Me</h3>
			<form onSubmit={sendEmail} className="contactForm">
				<input type="text" placeholder="Name" name="senderName" />
				<input
					type="email"
					placeholder="Your email address"
					name="email"
				/>
				<input type="text" placeholder="Subject" name="subject" />
				<textarea
					cols="40"
					rows="5"
					type="text"
					placeholder="Your message"
					name="message"
				></textarea>
				<Button
					type="submit"
					text="Send message"
					icon="far fa-paper-plane"
				/>
			</form>
		</div>
	);
}
