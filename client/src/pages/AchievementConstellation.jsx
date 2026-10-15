import { useState, useEffect, useRef, useMemo } from "react";
import { useProfile } from "../context/ProfileContext";
import { sampleProfile } from "../data/sampleProfile";
import { motion } from "framer-motion";
import "./AchievementConstellation.css";

export default function AchievementConstellation() {
  const { profile } = useProfile();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const svgRef = useRef(null);

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

  // Build node graph from profile data
  const { nodes, edges } = useMemo(() => {
    const profileNodes = [];
    const profileEdges = [];

    // Add achievement nodes
    profile.achievements.forEach((a) => {
      profileNodes.push({
        id: a.id,
        title: a.title,
        category: a.category,
        type: "achievement",
        description: a.description,
        technologies: a.technologies,
        highlights: a.highlights,
        date: a.date,
        verified: a.verified
      });
    });

    // Add skill nodes
    profile.skills.forEach((s) => {
      profileNodes.push({
        id: `skill-${s.id}`,
        title: s.name,
        category: s.category,
        type: "skill",
        proficiency: s.proficiency,
        description: `Skill proficiency: ${s.proficiency}`,
        date: null,
        verified: s.selfReported
      });
    });

    // Create edges: achievement -> skills
    profile.achievements.forEach((a) => {
      if (a.technologies) {
        a.technologies.forEach((tech) => {
          const skillNode = profileNodes.find(n => n.type === "skill" && n.title === tech);
          if (skillNode) {
            profileEdges.push({
              source: a.id,
              target: skillNode.id,
              type: "uses"
            });
          }
        });
      }
    });

    return { nodes: profileNodes, edges: profileEdges };
  }, [profile]);

  // Calculate positions in a circle layout
  const nodePositions = useMemo(() => {
    const positions = {};
    const centerX = 300;
    const centerY = 300;
    const radius = 220;

    // Position achievement nodes on outer circle
    const achievements = nodes.filter(n => n.type === "achievement");
    const skills = nodes.filter(n => n.type === "skill");

    achievements.forEach((node, i) => {
      const angle = (i / achievements.length) * 2 * Math.PI;
      positions[node.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        type: "achievement"
      };
    });

    // Position skill nodes in inner circle, clustered around achievements
    const innerRadius = 100;
    const skillAngleStep = (2 * Math.PI) / Math.max(skills.length, 1);
    
    skills.forEach((node, i) => {
      // Find connected achievement to position near
      const connectedAchievement = nodeEdges.get(node.id);
      const angle = i * skillAngleStep;
      positions[node.id] = {
        x: centerX + innerRadius * Math.cos(angle),
        y: centerY + innerRadius * Math.sin(angle),
        type: "skill"
      };
    });

    return positions;
  }, [nodes]);

  const nodeEdges = useMemo(() => {
    const map = new Map();
    edges.forEach(e => {
      if (!map.has(e.target)) map.set(e.target, []);
      map.get(e.target).push(e.source);
    });
    return map;
  }, [edges]);

  // Filter nodes for display
  const visibleNodes = useMemo(() => {
    let filtered = nodes;
    
    if (filterType !== "all") {
      filtered = filtered.filter(n => 
        n.type === filterType || 
        (filterType === "achievement" && n.category === filterType)
      );
    }
    
    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(lower) ||
        (n.description?.toLowerCase().includes(lower))
      );
    }
    
    return filtered;
  }, [nodes, filterType, searchQuery]);

  // Highlight connected nodes
  const getConnectedNodes = (nodeId) => {
    const connected = new Set();
    edges.forEach(e => {
      if (e.source === nodeId || e.target === nodeId) {
        connected.add(e.source);
        connected.add(e.target);
      }
    });
    return connected;
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleSvgClick = (e) => {
    if (e.target === svgRef.current) {
      setSelectedNode(null);
      setHoveredNode(null);
    }
  };

  const getNodeColor = (node) => {
    if (node.type === "skill") return "var(--color-accent-cyan)";
    switch (node.category) {
      case "award": return "var(--color-accent-gold)";
      case "certification": return "var(--color-accent-emerald)";
      case "project": return "var(--color-accent-violet)";
      default: return "var(--color-accent-violet)";
    }
  };

  const getNodeIcon = (node) => {
    if (node.type === "skill") return "🎯";
    switch (node.category) {
      case "award": return "🏆";
      case "certification": return "📜";
      case "project": return "💻";
      default: return "✦";
    }
  };

  return (
    <motion.div className="constellation-page" variants={pageVariants} initial="hidden" animate="visible">
      <motion.div className="page-header" variants={elementVariants}>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Achievement Constellation
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          Interactive visualization of achievements, skills, and their connections
        </motion.p>
      </motion.div>

      <motion.div className="constellation-controls" variants={elementVariants} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.div className="filter-controls" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <motion.button
            className={`filter-btn ${filterType === "all" ? "active" : ""}`}
            onClick={() => setFilterType("all")}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Nodes
          </motion.button>
          <motion.button
            className={`filter-btn ${filterType === "achievement" ? "active" : ""}`}
            onClick={() => setFilterType("achievement")}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Achievements
          </motion.button>
          <motion.button
            className={`filter-btn ${filterType === "skill" ? "active" : ""}`}
            onClick={() => setFilterType("skill")}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>
        </motion.div>
        
        <motion.div className="search-control" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
          <motion.input
            type="search"
            placeholder="Search nodes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.div>
      </motion.div>

      <motion.div className="constellation-view" variants={elementVariants} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.svg 
          ref={svgRef}
          className="constellation-svg"
          viewBox="0 0 600 600"
          onClick={handleSvgClick}
          role="img"
          aria-label="Achievement constellation graph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background gradient circles */}
          <defs>
            <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.03)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="260" fill="url(#bg-gradient)" />
          
          {/* Draw edges */}
          {edges.map((edge, idx) => {
            const sourcePos = nodePositions[edge.source];
            const targetPos = nodePositions[edge.target];
            const sourceVisible = visibleNodes.some(n => n.id === edge.source);
            const targetVisible = visibleNodes.some(n => n.id === edge.target);
            
            if (!sourcePos || !targetPos || !sourceVisible || !targetVisible) return null;
            
            const isSelected = selectedNode && (edge.source === selectedNode.id || edge.target === selectedNode.id);
            const isDimmed = selectedNode && !isSelected;
            
            return (
              <motion.line
                key={`edge-${idx}`}
                x1={sourcePos.x}
                y1={sourcePos.y}
                x2={targetPos.x}
                y2={targetPos.y}
                className={`edge ${isSelected ? "connected" : ""} ${isDimmed ? "dimmed" : ""}`}
                strokeWidth={isSelected ? 2 : 1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.01 }}
              />
            );
          })}
          
          {/* Draw nodes */}
          {visibleNodes.map((node) => {
            const pos = nodePositions[node.id];
            if (!pos) return null;
            
            const isConnected = !selectedNode || 
              (selectedNode && getConnectedNodes(selectedNode.id).has(node.id));
            const isDimmed = selectedNode && !isConnected;
            const isHovered = hoveredNode?.id === node.id;
            const isSelected = selectedNode?.id === node.id;
            
            const size = node.type === "achievement" 
              ? (isSelected ? 18 : isHovered ? 14 : 12)
              : (isSelected ? 14 : isHovered ? 12 : 10);
            
            return (
              <motion.g
                key={node.id}
                className={`node-group ${isDimmed ? "dimmed" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: node.id * 0.005 }}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                aria-label={node.title}
              >
                {/* Glow for connected/hovered nodes */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={size + 10}
                  className="node-glow"
                  fill={getNodeColor(node)}
                  opacity={isSelected || isHovered ? 0.3 : 0.1}
                />
                
                {/* Main node circle */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={size}
                  fill={getNodeColor(node)}
                  stroke={isSelected ? "white" : "rgba(139, 92, 246, 0.3)"}
                  strokeWidth={isSelected ? 2 : 1}
                  className="node-circle"
                />
                
                {/* Node icon */}
                <motion.text
                  x={pos.x}
                  y={pos.y + 4}
                  textAnchor="middle"
                  fontSize={size * 0.9}
                  fill="white"
                  className="node-icon"
                >
                  {getNodeIcon(node)}
                </motion.text>
                
                {/* Node label */}
                {!isDimmed && (
                  <motion.text
                    x={pos.x}
                    y={pos.y + size + 18}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--color-text-muted)"
                    className="node-label"
                  >
                    {node.title.length > 20 ? node.title.substring(0, 18) + "..." : node.title}
                  </motion.text>
                )}
              </motion.g>
            );
          })}
          
          {/* Center hub */}
          <motion.circle
            cx="300"
            cy="300"
            r={selectedNode ? 24 : 16}
            fill="rgba(255, 255, 255, 0.15)"
            stroke="var(--color-accent-cyan)"
            strokeWidth="1"
            className="center-hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.text
            x="300"
            y="300"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="12"
            fill="var(--color-accent-cyan)"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {profile.student.name.split(" ").map(n => n[0]).join("")}
          </motion.text>
        </motion.svg>

        {/* Node detail panel */}
        {selectedNode && (
          <motion.div className="node-detail-panel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <motion.button 
              className="detail-close"
              onClick={() => setSelectedNode(null)}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close details"
            >
              ✕
            </motion.button>
            
            <motion.div className="detail-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <motion.span className="detail-icon">{getNodeIcon(selectedNode)}</motion.span>
              <motion.h2 className="detail-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {selectedNode.title}
              </motion.h2>
            </motion.div>
            
            <motion.p className="detail-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
              {selectedNode.description}
            </motion.p>
            
            {selectedNode.date && (
              <motion.div className="detail-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <motion.span className="meta-item">
                  Date: {new Date(selectedNode.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </motion.span>
                {selectedNode.verified && (
                  <motion.span className="meta-item verified">✓ Verified</motion.span>
                )}
              </motion.div>
            )}
            
            {selectedNode.proficiency && (
              <motion.div className="detail-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <motion.span className="meta-item">
                  Proficiency: {selectedNode.proficiency}
                </motion.span>
              </motion.div>
            )}
            
            {selectedNode.technologies && (
              <motion.div className="detail-tech" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                {selectedNode.technologies.map((tech, idx) => (
                  <motion.span key={idx} className="tech-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: idx * 0.01 }}>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            )}
            
            {selectedNode.highlights && (
              <motion.div className="detail-highlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  Key Highlights
                </motion.h3>
                {selectedNode.highlights.map((h, idx) => (
                  <motion.span key={idx} className="highlight-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: idx * 0.01 }}>
                    {h}
                  </motion.span>
                ))}
              </motion.div>
            )}
            
            {selectedNode.type === "skill" && (
              <motion.div className="detail-connected" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  Connected Achievements
                </motion.h3>
                <motion.p>
                  {edges.filter(e => e.target === selectedNode.id).length} achievements use this skill
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Legend */}
      <motion.div className="legend" variants={elementVariants} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <motion.div className="legend-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
          <motion.span className="legend-color" style={{ background: "var(--color-accent-violet)" }}></motion.span>
          <motion.span>Projects</motion.span>
        </motion.div>
        <motion.div className="legend-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
          <motion.span className="legend-color" style={{ background: "var(--color-accent-gold)" }}></motion.span>
          <motion.span>Awards</motion.span>
        </motion.div>
        <motion.div className="legend-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
          <motion.span className="legend-color" style={{ background: "var(--color-accent-emerald)" }}></motion.span>
          <motion.span>Certifications</motion.span>
        </motion.div>
        <motion.div className="legend-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }}>
          <motion.span className="legend-color" style={{ background: "var(--color-accent-cyan)" }}></motion.span>
          <motion.span>Skills</motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { AchievementConstellation };