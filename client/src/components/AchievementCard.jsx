import { formatDate, getCategoryColor } from "../utils/formatters";
import "./AchievementCard.css";

export default function AchievementCard({ achievement }) {
  const categoryColor = getCategoryColor(achievement.category);
  const formattedDate = formatDate(achievement.date);
  
  const categoryConfig = {
    project: { icon: "💻", label: "Project" },
    award: { icon: "🏆", label: "Award" },
    certification: { icon: "📜", label: "Certification" }
  };

  const config = categoryConfig[achievement.category] || categoryConfig.project;

  return (
    <article className={`achievement-card data-category-${categoryColor}`}>
      <div className="card-badge">
        <span className="badge-icon">{config.icon}</span>
        <span className="badge-text">{config.label}</span>
        {achievement.verified && <span className="verified-icon" title="Verified">✓</span>}
      </div>

      <div className="card-body">
        <h3 className="card-title">{achievement.title}</h3>
        <p className="card-description">
          {achievement.description}
        </p>

        {achievement.technologies && (
          <div className="card-tech">
            {achievement.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
            {achievement.technologies.length > 4 && (
              <span className="tech-more">+{achievement.technologies.length - 4}</span>
            )}
          </div>
        )}

        {achievement.highlights && achievement.highlights.length > 0 && (
          <div className="card-highlights">
            {achievement.highlights.slice(0, 2).map((h, idx) => (
              <span key={idx} className="highlight-tag">{h}</span>
            ))}
          </div>
        )}
      </div>

      <div className="card-footer">
        <span className="card-date">{formattedDate}</span>
      </div>
    </article>
  );
}