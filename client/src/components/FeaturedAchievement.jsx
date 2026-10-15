import { formatDate, getCategoryColor } from "../utils/formatters";
import "./FeaturedAchievement.css";

export default function FeaturedAchievement({ achievement }) {
  const category = achievement?.category || "project";
  const categoryColor = getCategoryColor(category);
  const isAward = category === "award";
  const isCert = category === "certification";
  
  const categoryIcons = {
    project: "💻",
    award: "🏆",
    certification: "📜"
  };

  return (
    <div className="featured-card" data-category={categoryColor}>
      <div className={`featured-ribbon ${isAward ? "gold" : isCert ? "emerald" : "violet"}`}>
        <span aria-hidden="true">{categoryIcons[category]}</span>
        <span className="ribbon-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        {achievement.verified && <span className="verified-badge" title="Verified">✓</span>}
      </div>
      
      <div className="featured-content">
        <h3 className="featured-title">{achievement.title}</h3>
        <p className="featured-description">{achievement.description}</p>
        
        <div className="featured-meta">
          <span className="featured-date">{formatDate(achievement.date)}</span>
          <span className="featured-divider" aria-hidden="true">•</span>
          <span className="featured-skills">
            {achievement.technologies?.slice(0, 3).join(", ")}
            {achievement.technologies?.length > 3 && ` +${achievement.technologies.length - 3}`}
          </span>
        </div>
        
        {achievement.highlights && achievement.highlights.length > 0 && (
          <div className="featured-highlights">
            {achievement.highlights.slice(0, 2).map((h, i) => (
              <span key={i} className="highlight-badge">{h}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { FeaturedAchievement };