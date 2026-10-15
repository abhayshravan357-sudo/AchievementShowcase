import "./InsightPanel.css";

export default function InsightPanel({ stats, categoryStats, skillCoverage, achievements }) {
  const insights = generateInsights(stats, categoryStats, skillCoverage, achievements);

  return (
    <div className="insight-panel">
      <h2 className="section-title-sm">Profile Insights</h2>
      <p className="insight-subtitle">Automated analysis of Aarav's achievements</p>
      
      <div className="insights-list">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
}

function InsightCard({ insight }) {
  const icons = {
    observation: "🔍",
    strength: "💪",
    gap: "⚠️",
    recommendation: "💡"
  };

  return (
    <div className={`insight-card ${insight.type}`}>
      <div className="insight-header">
        <span className="insight-icon">{icons[insight.type] || "🔍"}</span>
        <span className="insight-label">{insight.label}</span>
      </div>
      <p className="insight-text">{insight.text}</p>
      {insight.detail && <span className="insight-detail">{insight.detail}</span>}
    </div>
  );
}

function generateInsights(stats, categoryStats, skillCoverage, achievements) {
  const insights = [];

  // Observation: Category balance
  const categoriesWithData = Object.values(categoryStats).filter(v => v > 0).length;
  const balanceScore = categoriesWithData === 3 ? "excellent" : categoriesWithData === 2 ? "moderate" : "limited";
  insights.push({
    type: "observation",
    label: "Achievement Balance",
    text: `The profile shows good breadth across ${categoriesWithData} achievement categories.`,
    detail: `${categoryStats.projects} projects, ${categoryStats.awards} awards, ${categoryStats.certifications} certifications.`
  });

  // Strength: Most used skill
  if (skillCoverage.length > 0) {
    insights.push({
      type: "strength",
      label: "Core Strength",
      text: `${skillCoverage[0][0]} is the most demonstrated technology across projects.`,
      detail: `Appears in ${skillCoverage[0][1]} projects/achievements.`
    });
  }

  // Observation: Verification status
  const verifiedCount = achievements.filter(a => a.verified).length;
  insights.push({
    type: "observation",
    label: "Verification Status",
    text: `${verifiedCount} of ${achievements.length} achievements are marked as verified.`,
    detail: `${Math.round((verifiedCount / achievements.length) * 100)}% verification rate.`
  });

  // Recommendation: Skill diversity
  const uniqueTechs = new Set(skillCoverage.map(s => s[0])).size;
  const recommendation = uniqueTechs < 10
    ? {
        type: "recommendation",
        label: "Skill Development",
        text: "Consider expanding into cloud-native or mobile development technologies.",
        detail: `${uniqueTechs} distinct technologies currently demonstrated.`
      }
    : {
        type: "strength",
        label: "Technical Breadth",
        text: `Strong technical breadth with ${uniqueTechs} distinct technologies demonstrated.`,
        detail: "Covers frontend, backend, ML, and DevOps domains."
      };
  insights.push(recommendation);

  // Gap: Timeline distribution
  const thisYearCount = achievements.filter(a => 
    new Date(a.date).getFullYear() === new Date().getFullYear()
  ).length;
  if (thisYearCount === 0) {
    insights.push({
      type: "gap",
      label: "Recent Activity",
      text: "No achievements recorded this year. Consider adding recent accomplishments.",
      detail: "Last entry in " + Math.max(...achievements.map(a => new Date(a.date).getFullYear()))
    });
  } else {
    insights.push({
      type: "observation",
      label: "Recent Activity",
      text: `${thisYearCount} achievement${thisYearCount > 1 ? "s" : ""} added this year.`,
      detail: "Active profile maintenance."
    });
  }

  return insights;
}

export { InsightPanel };