import React from "react";
import projects from "../../../data/projects";
import ProjectCard from "./projectCard";
import "./projects.css";

export default function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			{projects.map((project) => (
				<ProjectCard project={project} key={project.title} />
			))}
		</section>
	);
}
