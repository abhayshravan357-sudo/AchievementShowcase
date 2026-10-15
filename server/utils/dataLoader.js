import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const profilePath = path.join(__dirname, "..", "..", "client", "src", "data", "sampleProfile.js");

let cachedProfile = null;

function loadProfile() {
  if (cachedProfile) return cachedProfile;
  
  const content = fs.readFileSync(profilePath, "utf-8");
  const match = content.match(/export const sampleProfile = ({[\s\S]*?});/);
  if (match) {
    cachedProfile = eval("(" + match[1] + ")");
  }
  return cachedProfile;
}

export function getProfile() {
  return loadProfile();
}

export function getAchievementById(id) {
  const profile = loadProfile();
  return [...profile.projects, ...profile.awards, ...profile.certifications]
    .find(a => a.id === id);
}

export function searchProfile(query) {
  const profile = loadProfile();
  const lower = query.toLowerCase();
  
  return [...profile.projects, ...profile.awards, ...profile.certifications]
    .filter(a =>
      a.title.toLowerCase().includes(lower) ||
      a.description.toLowerCase().includes(lower) ||
      a.technologies?.some(t => t.toLowerCase().includes(lower)) ||
      a.highlights?.some(h => h.toLowerCase().includes(lower))
    );
}

export function getStats() {
  const profile = loadProfile();
  return {
    projects: profile.projects.length,
    awards: profile.awards.length,
    certifications: profile.certifications.length,
    skills: profile.skills.length,
    totalAchievements: profile.projects.length + profile.awards.length + profile.certifications.length
  };
}