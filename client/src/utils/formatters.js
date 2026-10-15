export function formatDate(dateString, options = {}) {
  const date = new Date(dateString);
  const { year = "numeric", month = "short", day } = options;
  return date.toLocaleDateString("en-US", day ? { year, month, day } : { year, month });
}

export function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const startStr = start.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const endStr = end ? end.toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present";
  
  return `${startStr} — ${endStr}`;
}

export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) return `${diffYears}y ago`;
  if (diffMonths > 0) return `${diffMonths}mo ago`;
  if (diffDays > 1) return `${diffDays}d ago`;
  if (diffDays === 1) return "yesterday";
  return "today";
}

export function truncate(text, maxLength = 100) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function getInitials(name) {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\w-]+/g, word => word)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim("-");
}

export function getCategoryColor(category) {
  const colors = {
    project: "violet",
    award: "gold",
    certification: "emerald",
    milestone: "rose",
    goal: "cyan"
  };
  return colors[category] || "violet";
}

export function getSkillProficiencyColor(proficiency) {
  const colors = {
    beginner: "rose",
    intermediate: "cyan",
    advanced: "violet",
    expert: "gold"
  };
  return colors[proficiency] || "violet";
}

export function getSkillProficiencyLabel(proficiency) {
  const labels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert"
  };
  return labels[proficiency] || "Unknown";
}

export function countByCategory(items, categoryKey = "category") {
  return items.reduce((acc, item) => {
    const cat = item[categoryKey];
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
}