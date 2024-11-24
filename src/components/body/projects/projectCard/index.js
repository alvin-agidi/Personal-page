import React from "react";
import "./projectCard.css";
import Button from "../../../common/button";

function ProjectCard({ project }) {
	return (
		<div
			className="projectCard"
			style={{
				backgroundImage: project.image
					? `url(${project.image})`
					: "none",
			}}
		>
			<div
				className={
					"projectInfo" + (project.image ? " hoverEffect" : "")
				}
			>
				<h3>{project.title}</h3>
				<div className="projectLinkBox">
					{project.demo && (
						<a href={project.demo}>
							<div className="projectLink">
								<i className="far fa-globe"></i>Demo
							</div>
						</a>
					)}
				</div>
				<p>{project.desc}</p>
				<div className="projectTagBox">
					{project.tags.map((tag) => (
						<label className="projectTag" key={tag}>
							{tag}
						</label>
					))}
				</div>
			</div>
			{project.github && (
				<Button
					onClick={() => window.open(project.github, "_blank")}
					text="View on GitHub"
					icon="fab fa-github"
				/>
			)}
		</div>
	);
}

export default ProjectCard;
