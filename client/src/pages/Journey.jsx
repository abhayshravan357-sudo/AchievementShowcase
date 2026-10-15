import { sampleProfile } from "../data/sampleProfile";
import { formatDate } from "../utils/formatters";
import { motion } from "framer-motion";
import "./Journey.css";

export default function Journey() {
  const { timeline, goals, achievements } = sampleProfile;
  const sortedTimeline = [...timeline].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const achievementById = {};
  achievements.forEach(a => {
    achievementById[a.id] = a;
  });

  return (
    <motion.div className="journey-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
      <motion.div className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Achievement Journey
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          Timeline of accomplishments, milestones, and future goals
        </motion.p>
      </motion.div>

      <motion.div className="journey-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <motion.div className="timeline-axis" aria-hidden="true" />
        
        <motion.div className="timeline-events" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {sortedTimeline.map((item, idx) => {
            const relatedItem = item.category === "goal" ? null : achievementById[item.item];
            const isGoal = item.category === "goal";
            const isUpcoming = isGoal && new Date(item.date) > new Date();
            
            return (
              <motion.div 
                key={item.id || idx} 
                className={`timeline-node ${isGoal ? "goal" : ""} ${isUpcoming ? "upcoming" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <motion.div className="node-marker" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }}>
                  <motion.span className="node-icon">
                    {item.category === "certification" ? "📜" :
                     item.category === "award" ? "🏆" :
                     item.category === "project" ? "💻" :
                     item.category === "goal" ? "🎯" : "📅"}
                  </motion.span>
                </motion.div>
                
                <motion.div className="node-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <motion.div className="node-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <motion.h3 className="node-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {item.title}
                    </motion.h3>
                    <motion.span className="node-date" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {formatDate(item.date, { day: "numeric" })}
                    </motion.span>
                  </motion.div>
                  <motion.p className="node-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                    {item.description}
                  </motion.p>
                  
                  {relatedItem && (
                    <motion.div className="node-link" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                      <motion.span>Related: {relatedItem.title}</motion.span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { Journey };