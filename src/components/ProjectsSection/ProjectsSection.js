{bigProjects.moreProjects && (
  <div className="more-projects-btn">
    <a
      href={bigProjects.moreProjects.link}
      className="project-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {bigProjects.moreProjects.buttonText}
    </a>
  </div>
)}