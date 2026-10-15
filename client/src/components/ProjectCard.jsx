import "./ProjectCard.css";

export default function ProjectCard({ project, onClick }) {
  const stageColors = {
    Production: "emerald",
    Published: "emerald",
    Merged: "cyan",
    Beta: "violet",
    Prototype: "rose",
    Ongoing: "amber"
  };

  const stageColor = stageColors[project.stage] || "violet";

  return (
    <article 
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="project-header">
        <div className={`stage-badge stage-${stageColor}`}>
          {project.stage}
        </div>
        <div className="project-meta">
          <span className="project-date">{new Date(project.date).getFullYear()}</span>
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>

        {project.highlights && (
          <div className="project-highlights">
            {project.highlights.map((h, idx) => (
              <span key={idx} className="highlight-badge">
                <span aria-hidden="true">✓</span>
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export { ProjectCard };