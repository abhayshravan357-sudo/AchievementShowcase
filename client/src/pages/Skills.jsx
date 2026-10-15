import { sampleProfile } from "../data/sampleProfile";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const { skills, skillCategories } = sampleProfile;

  const skillsByCategory = skillCategories.map(cat => ({
    ...cat,
    skills: skills.filter(s => s.category === cat.id)
  }));

  return (
    <motion.div className="skills-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
      <motion.div className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Skill Intelligence
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          Technical expertise organized by domain
        </motion.p>
      </motion.div>

      <motion.div className="skills-layout" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        {skillsByCategory.map(category => (
          category.skills.length > 0 && (
            <motion.div key={category.id} className="skill-category" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: category.id * 0.01 }}>
              <motion.h2 className="category-title" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {category.label}
              </motion.h2>
              <motion.div className="skills-grid" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {category.skills.map(skill => (
                  <motion.div key={skill.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: skill.id * 0.005 }}>
                    <SkillCard key={skill.id} skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        ))}
      </motion.div>
    </motion.div>
  );
}

function SkillCard({ skill }) {
  const proficiencyLabels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert"
  };

  return (
    <div className="skill-card">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className={`proficiency-badge proficiency-${skill.proficiency}`}>
          {proficiencyLabels[skill.proficiency]}
        </span>
      </div>
      
      {skill.evidence && (
        <div className="skill-evidence">
          {skill.evidence.length} related {skill.evidence.length === 1 ? "project" : "projects"}
        </div>
      )}
      
      {skill.selfReported && (
        <span className="self-reported-badge" title="Self-reported proficiency">
          Self-reported
        </span>
      )}
    </div>
  );
}

export { Skills };