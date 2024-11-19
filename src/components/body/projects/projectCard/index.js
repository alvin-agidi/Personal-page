import React from "react";
import "./projectCard.css";
import Button from "../../../common/button";

function ProjectCard({ project }) {
	return (
		<div className="projectCard">
			<div className="projectInfo">
				<h3>{project.title}</h3>
				<div className="projectLinkBox">
					{project.demo && (
						<a href={project.demo}>
							<div className="projectLink">
								<i className="far fa-globe"></i>Demo
							</div>
						</a>
					)}
					{project.github && (
						<Button
							href={project.github}
							text="Github"
							icon="fab fa-github"
						/>
					)}
				</div>
				<span>{project.about}</span>
				<div className="projectTagBox">
					{project.tags.map((tag) => (
						<label className="projectTag" key={tag}>
							{tag}
						</label>
					))}
				</div>
			</div>
			<div className="imgZoomBox">
				<img
					src={project.image}
					className="projectImg"
					alt="projectImg"
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
