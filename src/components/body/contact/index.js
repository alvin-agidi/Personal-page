import React from "react";
import Button from "../../common/button";
import "./contact.css";
import ContactForm from "./contactForm";

export default function Contact() {
	return (
		<section id="contact">
			<h2>Contact & CV</h2>
			<div id="contactBox">
				<ContactForm />
				<div
					id="CVBox"
					style={{ backgroundImage: `url("assets/cv/cv.png")` }}
				>
					<a
						href="assets/cv/cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: "none" }}
					>
						<Button text="View my CV" icon="far fa-file" />
					</a>
				</div>
			</div>
		</section>
	);
}
