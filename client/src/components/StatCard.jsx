import "./StatCard.css";

export default function StatCard({ icon, label, value, subtitle, trend, trendValue }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {subtitle && <div className="stat-subtitle">{subtitle}</div>}
        {trend && trendValue && (
          <div className={`stat-trend ${trend === "up" ? "up" : "down"}`}>
            <span className="trend-icon">{trend === "up" ? "↗" : "↘"}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export { StatCard };