import { useNavigate } from "react-router-dom";
import "./QuickActions.css";

const actions = [
  { id: "explore", label: "Explore Achievements", icon: "🔍", path: "/achievements" },
  { id: "constellation", label: "View Constellation", icon: "✦", path: "/constellation" },
  { id: "projects", label: "View Projects", icon: "💻", path: "/projects" },
  { id: "skills", label: "Skill Analysis", icon: "🎯", path: "/skills" }
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <button
          key={action.id}
          className="quick-action-btn"
          onClick={() => navigate(action.path)}
        >
          <span className="action-icon">{action.icon}</span>
          <span className="action-label">{action.label}</span>
        </button>
      ))}
    </div>
  );
}

export { QuickActions };