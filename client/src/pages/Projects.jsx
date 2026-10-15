import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import { sampleProfile } from "../data/sampleProfile";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const { searchQuery, setSearchQuery } = useProfile();
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = sampleProfile;

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.div className="projects-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1.25] }}>
      <motion.div className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Project Showcase
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          Selected projects demonstrating technical depth and problem-solving
        </motion.p>
      </motion.div>

      <motion.div className="search-bar" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <motion.input
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>

      <motion.div className="projects-grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        {filteredProjects.map(project => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: project.id * 0.01 }}>
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <motion.div className="modal-overlay" onClick={() => setSelectedProject(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <motion.div className="modal-content" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, type: "spring" }}>
            <motion.button className="modal-close" onClick={() => setSelectedProject(null)} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.2, type: "spring" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              ✕
            </motion.button>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              {selectedProject.title}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              {selectedProject.description}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <strong>Technologies:</strong> {selectedProject.technologies.join(", ")}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
              <strong>Outcome:</strong> {selectedProject.outcome}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export { Projects };