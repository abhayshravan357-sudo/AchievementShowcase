import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import { sampleProfile } from "../data/sampleProfile";
import { getFeaturedAchievements } from "../data/sampleProfile";
import { motion } from "framer-motion";
import "./PublicProfile.css";

export default function PublicProfile() {
  const { profile } = useProfile();
  const { student } = sampleProfile;
  const [copied, setCopied] = useState(false);

  const featured = getFeaturedAchievements(3);

  const handleCopyLink = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(sampleProfile, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "aarav-sharma-profile.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div className="public-profile" id="public-profile-root" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
      <motion.div className="profile-print-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.button className="print-btn" onClick={handlePrint} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Print Profile
        </motion.button>
        <motion.button className="copy-btn" onClick={handleCopyLink} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {copied ? "Copied!" : "Copy Link"}
        </motion.button>
        <motion.button className="export-btn" onClick={handleExport} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Export Data
        </motion.button>
      </motion.div>

      <motion.div className="profile-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <motion.div className="profile-identity" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <motion.div className="profile-avatar-large" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span>{student.name.split(" ").map(n => n[0]).join("")}</span>
</motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <motion.h1 className="profile-name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
              {student.name}
            </motion.h1>
            <motion.p className="profile-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
              {student.tagline}
            </motion.p>
            <motion.p className="profile-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
              {student.location}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="profile-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          About
        </motion.h2>
        <motion.p className="profile-bio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
          {student.bio}
        </motion.p>
      </motion.div>

      <motion.div className="profile-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Contact
        </motion.h2>
        <motion.div className="contact-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <motion.a href={`mailto:${student.email}`} className="contact-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <motion.span className="contact-icon">📧</motion.span>
            {student.email}
          </motion.a>
          <motion.a href={`https://${student.github}`} target="_blank" rel="noopener noreferrer" className="contact-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <motion.span className="contact-icon">⌘</motion.span>
            {student.github}
          </motion.a>
          <motion.a href={`https://${student.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <motion.span className="contact-icon">💼</motion.span>
            {student.linkedin}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div className="profile-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Featured Achievements
        </motion.h2>
        <motion.div className="featured-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          {featured.map(a => (
            <motion.div key={a.id} className="featured-item" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: a.id * 0.005 }}>
              <motion.span className="featured-category" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {a.category}
              </motion.span>
              <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                {a.title}
              </motion.h3>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                {a.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { PublicProfile };