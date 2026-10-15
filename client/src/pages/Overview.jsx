import { useMemo } from "react";
import { useProfile } from "../context/ProfileContext";
import { formatDate } from "../utils/formatters";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import FeaturedAchievement from "../components/FeaturedAchievement";
import TimelineView from "../components/TimelineView";
import InsightPanel from "../components/InsightPanel";
import QuickActions from "../components/QuickActions";
import "./Overview.css";

export default function Overview() {
  const { profile, stats } = useProfile();
  const { student, achievements, timeline } = profile;

  const featuredAchievements = useMemo(() => {
    return achievements
      .filter(a => a.featured)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [achievements]);

  const recentActivity = useMemo(() => {
    return timeline
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6)
      .map(item => ({
        ...item,
        achievement: item.item ? achievements.find(a => a.id === item.item) : null
      }));
  }, [timeline, achievements]);

  const skillCoverage = useMemo(() => {
    const skillCounts = {};
    achievements.forEach(a => {
      a.technologies?.forEach(t => {
        skillCounts[t] = (skillCounts[t] || 0) + 1;
      });
    });
    return Object.entries(skillCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
  }, [achievements]);

  const categoryStats = {
    projects: achievements.filter(a => a.category === "project").length,
    awards: achievements.filter(a => a.category === "award").length,
    certifications: achievements.filter(a => a.category === "certification").length
  };

  // Page entrance animation
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1.25],
        delayChildren: 0.2,
        staggerChildren: 0.1,
      }
    }
  };

  // Element stagger variants
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1.25]
      }
    }
  };

  return (
    <motion.div className="overview-page" variants={pageVariants} initial="hidden" animate="visible">
      {/* Hero Section */}
      <section className="overview-hero">
        <motion.div className="hero-content" variants={elementVariants}>
          <motion.div className="hero-text" variants={elementVariants}>
            <motion.h1 className="hero-name" variants={elementVariants}>
              {student.name}
            </motion.h1>
            <motion.p className="hero-title" variants={elementVariants}>
              {student.tagline}
            </motion.p>
            <motion.p className="hero-bio" variants={elementVariants}>
              {student.bio}
            </motion.p>
            <motion.div className="hero-meta" variants={elementVariants}>
              <motion.span className="meta-item" variants={elementVariants}>
                <motion.span className="meta-icon" variants={elementVariants}>🎓</motion.span>
                {student.university}
              </motion.span>
              <motion.span className="meta-item" variants={elementVariants}>
                <motion.span className="meta-icon" variants={elementVariants}>📅</motion.span>
                {student.year}
              </motion.span>
              <motion.span className="meta-item" variants={elementVariants}>
                <motion.span className="meta-icon" variants={elementVariants}>📧</motion.span>
                {student.email}
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div className="hero-avatar" variants={elementVariants}>
            <motion.div className="avatar-xl hero-avatar-inner" variants={elementVariants}>
              <span>{student.name.split(" ").map(n => n[0]).join("")}</span>
            </motion.div>
            <motion.div className="avatar-glow" aria-hidden="true" variants={elementVariants} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Cards */}
      <section className="stats-section">
        <motion.h2 className="section-title-sm" variants={elementVariants}>
          At a Glance
        </motion.h2>
        <motion.div className="stats-grid" variants={elementVariants}>
          <motion.div variants={elementVariants}>
            <StatCard 
              icon="🏆" 
              label="Total Achievements" 
              value={stats.totalAchievements} 
              trend="up" 
              trendValue="+8 this year"
            />
          </motion.div>
          <motion.div variants={elementVariants}>
            <StatCard 
              icon="💻" 
              label="Projects" 
              value={categoryStats.projects} 
              subtitle="Live & Published"
            />
          </motion.div>
          <motion.div variants={elementVariants}>
            <StatCard 
              icon="🥇" 
              label="Awards" 
              value={categoryStats.awards} 
              subtitle="Hackathons & Competitions"
            />
          </motion.div>
          <motion.div variants={elementVariants}>
            <StatCard 
              icon="📜" 
              label="Certifications" 
              value={categoryStats.certifications} 
              subtitle="Professional Verified"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <motion.h2 className="section-title-sm" variants={elementVariants}>
          Quick Actions
        </motion.h2>
        <motion.div variants={elementVariants}>
          <QuickActions />
        </motion.div>
      </section>

      {/* Featured Achievements */}
      <section className="featured-section">
        <motion.div className="section-header" variants={elementVariants}>
          <motion.h2 className="section-title" variants={elementVariants}>
            Featured Achievements
          </motion.h2>
          <motion.p className="section-subtitle" variants={elementVariants}>
            Highlight projects and awards that define this profile
          </motion.p>
        </motion.div>
        <motion.div className="featured-grid" variants={elementVariants}>
          {featuredAchievements.map((achievement) => (
            <motion.div key={achievement.id} variants={elementVariants}>
              <FeaturedAchievement key={achievement.id} achievement={achievement} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <motion.div className="main-grid" variants={elementVariants}>
        {/* Timeline */}
        <motion.div className="timeline-section" variants={elementVariants}>
          <motion.h2 className="section-title-sm" variants={elementVariants}>
            Recent Activity
          </motion.h2>
          <TimelineView items={recentActivity} />
        </motion.div>

        {/* Insights */}
        <motion.div className="insights-section" variants={elementVariants}>
          <InsightPanel 
            stats={stats} 
            categoryStats={categoryStats}
            skillCoverage={skillCoverage}
            achievements={achievements}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}