import React from "react";
import "./Projects.scss";
import { bigProjects } from "../../portfolio";
// import Button from "../../components/button/Button";
// ...existing imports...

export default function Projects() {
  const more = bigProjects?.moreProjects;

  console.log("MORE PROJECTS CONFIG:", more);

  return (
    <div className="main" id="Featured projects">
      <div>
        {bigProjects?.title && <h1 className="skills-heading">{bigProjects.title}</h1>}
        {bigProjects?.subtitle && <p className="projects-subtitle">{bigProjects.subtitle}</p>}
        
        <div className="projects-container">
          {/* ...existing project cards... */}
        </div>

        {more?.link && (
          <div className="more-projects-container">
            <a
              text={bigProjects.moreProjects.buttonText}
              href={bigProjects.moreProjects.link}
              newTab={true}
              className="project-button"
            >
              {more.buttonText || "View More Projects"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
