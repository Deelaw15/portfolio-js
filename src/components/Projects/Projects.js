import React from "react";
import "./Projects.scss";
import { bigProjects } from "../../portfolio";
import Button from "../../components/button/Button";
// ...existing imports...

export default function Projects() {
  const more = bigProjects?.moreProjects;

  return (
    <div className="main" id="Featured projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="projects-subtitle">{bigProjects.subtitle}</p>
        <div className="projects-container">{/* ...existing project cards... */}</div>

        {more?.link && (
          <div className="more-projects-container">
            <Button
              text={bigProjects.moreProjects.buttonText}
              href={bigProjects.moreProjects.link}
              newTab={true}
              className="project-button"
            />
          </div>
        )}
      </div>
    </div>
  );
}
