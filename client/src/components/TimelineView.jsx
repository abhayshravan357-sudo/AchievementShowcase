import { formatDate } from "../utils/formatters";
import "./TimelineView.css";

export default function TimelineView({ items }) {
  const sortedItems = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="timeline-view">
      {sortedItems.length > 0 ? (
        <div className="timeline-list">
          {sortedItems.map((item, index) => {
            const categoryIcons = {
              project: "💻",
              award: "🏆",
              certification: "📜",
              milestone: "✨",
              goal: "🎯"
            };

            return (
              <div key={item.id || index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-icon">{categoryIcons[item.category] || "•"}</span>
                  <div className="marker-line" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-title">{item.title}</div>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-date">{formatDate(item.date, { day: "numeric" })}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="timeline-empty">
          <p>No recent activity to show</p>
        </div>
      )}
    </div>
  );
}