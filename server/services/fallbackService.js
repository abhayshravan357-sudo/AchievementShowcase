const sampleProfile = {
  student: {
    name: "Aarav Sharma",
    tagline: "Computer Science Undergraduate | AI & Full-Stack Developer",
    university: "Indian Institute of Technology, Delhi",
    degree: "B.Tech Computer Science & Engineering",
    year: "3rd Year",
    graduationDate: "2025-05-15",
    email: "aarav.sharma@iitd.ac.in",
    location: "Delhi, India",
    github: "github.com/aaravsharma",
    linkedin: "linkedin.com/in/aaravsharma",
    portfolio: "aaravsharma.dev",
    bio: "Passionate about building intelligent systems that solve real-world problems. Currently exploring the intersection of AI and human-computer interaction.",
    profileCompletion: 92,
    avatar: "AS",
    joinDate: "2022-08-01"
  },
  
  skills: [
    { id: "python", name: "Python", category: "programming", proficiency: "expert", selfReported: true },
    { id: "javascript", name: "JavaScript", category: "frontend", proficiency: "expert", selfReported: true },
    { id: "typescript", name: "TypeScript", category: "frontend", proficiency: "advanced", selfReported: true },
    { id: "react", name: "React", category: "frontend", proficiency: "advanced", selfReported: true },
    { id: "nodejs", name: "Node.js", category: "backend", proficiency: "advanced", selfReported: true },
    { id: "pytorch", name: "PyTorch", category: "ml", proficiency: "expert", selfReported: true },
    { id: "tensorflow", name: "TensorFlow", category: "ml", proficiency: "advanced", selfReported: true },
    { id: "aws", name: "AWS", category: "cloud", proficiency: "intermediate", selfReported: true },
    { id: "docker", name: "Docker", category: "devops", proficiency: "advanced", selfReported: true },
    { id: "postgresql", name: "PostgreSQL", category: "database", proficiency: "advanced", selfReported: true },
    { id: "cpp", name: "C++", category: "programming", proficiency: "intermediate", selfReported: true },
    { id: "git", name: "Git", category: "tools", proficiency: "expert", selfReported: true }
  ],

  projects: [
    {
      id: "project-1",
      title: "SmartCampus Navigation System",
      category: "project",
      date: "2024-03-15",
      description: "Built an AI-powered indoor navigation system for campus buildings using computer vision and graph algorithms. Deployed as a Progressive Web App serving 2,000+ daily active users.",
      technologies: ["React", "TypeScript", "TensorFlow.js", "Node.js", "PostgreSQL", "Docker"],
      highlights: ["2,000+ DAU", "Sub-second routing", "Offline-first PWA"],
      verified: true,
      featured: true
    },
    {
      id: "project-2",
      title: "MediAssist - Medical Prescription Analyzer",
      category: "project",
      date: "2024-02-10",
      description: "AI-powered medical prescription analyzer that extracts drug names, dosages, and interactions from handwritten prescriptions using OCR and NLP.",
      technologies: ["Python", "PyTorch", "Tesseract OCR", "FastAPI", "React"],
      highlights: ["1st place IIT Delhi Hackathon", "₹2,00,000 prize", "Deployed to college health center"],
      verified: true,
      featured: true
    },
    {
      id: "project-4",
      title: "Efficient Transformers for Edge Devices",
      category: "project",
      date: "2024-01-28",
      description: "Co-authored research on attention compression technique reducing model size by 40% with <1% accuracy drop. Accepted at ICML 2024 Workshop.",
      technologies: ["PyTorch", "Hugging Face", "ONNX", "TensorRT"],
      highlights: ["ICML 2024 Workshop", "40% size reduction", "Open-source implementation"],
      verified: true,
      featured: true
    },
    {
      id: "project-5",
      title: "AgriSense - Crop Health Monitoring System",
      category: "project",
      date: "2023-08-15",
      description: "IoT-based crop health monitoring system using multispectral imaging and ML-based disease detection. Finalist at Smart India Hackathon.",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite", "MQTT", "InfluxDB"],
      highlights: ["Top 50/10,000+ teams", "Govt. recognition", "Deployed on 5 farms"],
      verified: true
    },
    {
      id: "project-7",
      title: "TensorFlow Data Pipeline Optimization",
      category: "project",
      date: "2023-10-12",
      description: "Contributed performance optimizations to TensorFlow's tf.data pipeline. Merged PR reduced memory overhead by 15% for large dataset shuffling.",
      technologies: ["C++", "Python", "Bazel", "TensorFlow Internals"],
      highlights: ["Merged to TF 2.15", "15% memory reduction", "Used in production at Google"],
      verified: true,
      featured: true
    }
  ],

  awards: [
    {
      id: "award-1",
      title: "1st Place - IIT Delhi Hackathon 2024",
      category: "award",
      date: "2024-02-10",
      description: "Won first place among 150+ teams for 'MediAssist' - an AI-powered medical prescription analyzer.",
      technologies: ["Python", "PyTorch", "Tesseract OCR", "FastAPI", "React"],
      highlights: ["150+ teams", "₹2,00,000 prize", "Deployed to college health center"],
      verified: true
    },
    {
      id: "award-2",
      title: "Finalist - Smart India Hackathon 2023",
      category: "award",
      date: "2023-08-15",
      description: "Team finalist for 'AgriSense' - IoT-based crop health monitoring system. Top 50 out of 10,000+ teams nationally.",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite"],
      highlights: ["Top 50/10,000+ teams", "Govt. recognition", "Deployed on 5 farms"],
      verified: true
    },
    {
      id: "award-4",
      title: "Department Excellence Award",
      category: "award",
      date: "2023-04-20",
      description: "Recognized for outstanding academic performance and contributions to the Computer Science department.",
      technologies: [],
      highlights: ["GPA: 9.2/10", "Top 5% of cohort"],
      verified: true
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect - Associate",
      category: "certification",
      date: "2023-11-20",
      description: "Validated expertise in designing distributed systems on AWS.",
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation", "IAM"],
      highlights: ["Score: 890/1000", "Valid until Nov 2026"],
      verified: true
    },
    {
      id: "cert-2",
      title: "Google Cloud Certified - Professional Data Engineer",
      category: "certification",
      date: "2024-04-05",
      description: "Demonstrated ability to design, build, and operationalize data processing systems on GCP.",
      technologies: ["BigQuery", "Dataflow", "Pub/Sub", "Vertex AI", "Cloud Composer"],
      highlights: ["Score: 92%", "Valid until Apr 2026"],
      verified: true
    },
    {
      id: "cert-3",
      title: "Deep Learning Specialization - deeplearning.ai",
      category: "certification",
      date: "2023-06-30",
      description: "Five-course specialization covering neural networks, CNNs, RNNs, Transformers, and ML project structuring.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      highlights: ["5 courses", "Distinction grade", "Capstone: Medical image segmentation"],
      verified: true
    }
  ],

  get achievements() {
    return [...this.projects, ...this.awards, ...this.certifications];
  },

  categories: [
    { id: "all", label: "All", color: "neutral" },
    { id: "project", label: "Projects", color: "violet" },
    { id: "award", label: "Awards", color: "gold" },
    { id: "certification", label: "Certifications", color: "emerald" }
  ]
};

function findRelevant(query) {
  const lower = query.toLowerCase();
  const results = [];
  
  sampleProfile.achievements.forEach(a => {
    let score = 0;
    if (a.title.toLowerCase().includes(lower)) score += 10;
    if (a.description.toLowerCase().includes(lower)) score += 5;
    a.technologies?.forEach(t => { if (t.toLowerCase().includes(lower)) score += 3; });
    a.highlights?.forEach(h => { if (h.toLowerCase().includes(lower)) score += 2; });
    if (score > 0) results.push({ ...a, score });
  });
  
  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}

export async function handleFallbackChat(message, history) {
  const lower = message.toLowerCase();
  const { student, achievements } = sampleProfile;
  
  const projects = achievements.filter(a => a.category === "project");
  const awards = achievements.filter(a => a.category === "award");
  const certifications = achievements.filter(a => a.category === "certification");

  // Greetings
  if (lower.match(/^(hi|hello|hey|greetings)/)) {
    return `Hello! I'm the fallback assistant for ${student.name}'s achievement showcase. I can help you explore projects, awards, certifications, and skills. What would you like to know?`;
  }

  // Skills queries
  if (lower.includes("skill") || lower.includes("technology") || lower.includes("tech stack") || lower.includes("know")) {
    const skillNames = sampleProfile.skills.map(s => s.name).join(", ");
    return `**${student.name}'s Core Skills:**\n\n${skillNames}\n\nThese span AI/ML (TensorFlow, PyTorch), full-stack development (React, Node.js), cloud platforms (AWS), and DevOps tools.`;
  }

  // Awards queries
  if (lower.includes("award") || lower.includes("hackathon") || lower.includes("competition") || lower.includes("win") || lower.includes("prize")) {
    if (awards.length === 0) {
      return "No awards found in the profile.";
    }
    const list = awards.map(a => `• **${a.title}** (${new Date(a.date).getFullYear()}): ${a.description}`).join("\n\n");
    return `**Awards & Competitions:**\n\n${list}\n\nWould you like more details about any specific award?`;
  }

  // Certifications queries
  if (lower.includes("certif") || lower.includes("certificate") || lower.includes("credential")) {
    if (certifications.length === 0) {
      return "No certifications found in the profile.";
    }
    const list = certifications.map(c => `• **${c.title}** (${new Date(c.date).getFullYear()}): ${c.description}`).join("\n\n");
    return `**Certifications:**\n\n${list}\n\nAll certifications are verified and current.`;
  }

  // Projects queries
  if (lower.includes("project") || lower.includes("built") || lower.includes("developed") || lower.includes("portfolio")) {
    if (projects.length === 0) {
      return "No projects found in the profile.";
    }
    const list = projects.map(p => `• **${p.title}** (${new Date(p.date).getFullYear()}): ${p.description}\n  Technologies: ${p.technologies.join(", ")}`).join("\n\n");
    return `**Projects:**\n\n${list}\n\nWhich project would you like to explore further?`;
  }

  // Specific achievement search
  const relevant = findRelevant(message);
  if (relevant.length > 0) {
    const top = relevant[0];
    const details = [
      `**${top.title}**`,
      top.description,
      "",
      `**Category:** ${top.category.charAt(0).toUpperCase() + top.category.slice(1)}`,
      `**Date:** ${new Date(top.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}`,
      `**Technologies:** ${top.technologies.join(", ")}`,
      `**Highlights:** ${top.highlights.join("; ")}`,
      top.verified ? "**Status:** Verified" : "**Status:** Self-reported"
    ].join("\n");
    
    if (relevant.length > 1) {
      const others = relevant.slice(1).map(r => `• ${r.title}`).join("\n");
      return `${details}\n\n**Related achievements:**\n${others}`;
    }
    return details;
  }

  // Profile/about queries
  if (lower.includes("profile") || lower.includes("about") || lower.includes("who is") || lower.includes("background")) {
    const skillNames = sampleProfile.skills.map(s => s.name);
    return `**${student.name}** — ${student.tagline}\n\n${student.bio}\n\n**Education:** ${student.university} (${student.year})\n\n**Core Skills:** ${skillNames.slice(0, 8).join(", ")}... and ${skillNames.length - 8} more.\n\n**Achievements Summary:** ${projects.length} projects, ${awards.length} awards, ${certifications.length} certifications.`;
  }

  // Interview/career queries
  if (lower.includes("interview") || lower.includes("career") || lower.includes("job") || lower.includes("resume")) {
    return `**Career Recommendations for ${student.name}:**\n\n**Top achievements to showcase:**\n1. MediAssist (Hackathon win - demonstrates full-stack AI development)\n2. Efficient Transformers research (ICML - shows research ability)\n3. TensorFlow contribution (open source - demonstrates collaboration)\n\n**Skills to highlight:** Python, PyTorch, React, AWS, Docker\n\n**Suggested narrative:** AI/ML developer with full-stack experience, research background, and open-source contributions.`;
  }

  // Fallback
  return `I'm the fallback assistant (AI API unavailable). I can help with:\n• **Projects** — "What projects has Aarav built?"\n• **Awards** — "Tell me about the hackathon wins"\n• **Certifications** — "What certifications does Aarav hold?"\n• **Skills** — "What technologies does Aarav know?"\n• **Specific achievements** — "Tell me about SmartCampus Navigation System"\n\nOr ask me anything specific about the profile!`;
}

export { sampleProfile };