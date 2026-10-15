export const sampleProfile = {
  id: "aarav-sharma",
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
    { id: "python", name: "Python", category: "programming", proficiency: "expert", selfReported: true, evidence: ["project-1", "project-2", "project-4", "project-7"] },
    { id: "javascript", name: "JavaScript", category: "frontend", proficiency: "expert", selfReported: true, evidence: ["project-1", "project-5", "project-7"] },
    { id: "typescript", name: "TypeScript", category: "frontend", proficiency: "advanced", selfReported: true, evidence: ["project-1", "project-6"] },
    { id: "react", name: "React", category: "frontend", proficiency: "advanced", selfReported: true, evidence: ["project-1", "project-5"] },
    { id: "nodejs", name: "Node.js", category: "backend", proficiency: "advanced", selfReported: true, evidence: ["project-1", "project-5"] },
    { id: "pytorch", name: "PyTorch", category: "ml", proficiency: "expert", selfReported: true, evidence: ["project-4", "project-7", "project-8"] },
    { id: "tensorflow", name: "TensorFlow", category: "ml", proficiency: "advanced", selfReported: true, evidence: ["project-4", "project-8", "project-9"] },
    { id: "aws", name: "AWS", category: "cloud", proficiency: "intermediate", selfReported: true, evidence: ["project-5", "project-6"] },
    { id: "docker", name: "Docker", category: "devops", proficiency: "advanced", selfReported: true, evidence: ["project-1", "project-5", "project-6"] },
    { id: "postgresql", name: "PostgreSQL", category: "database", proficiency: "advanced", selfReported: true, evidence: ["project-1", "project-5"] },
    { id: "cpp", name: "C++", category: "programming", proficiency: "intermediate", selfReported: true, evidence: ["project-7"] },
    { id: "git", name: "Git", category: "tools", proficiency: "expert", selfReported: true, evidence: ["project-1", "project-2", "project-4", "project-5", "project-6", "project-7"] },
    { id: "graphql", name: "GraphQL", category: "backend", proficiency: "intermediate", selfReported: true, evidence: ["project-5", "project-6"] },
    { id: "flask", name: "Flask", category: "backend", proficiency: "advanced", selfReported: true, evidence: ["project-5", "project-8"] },
    { id: "opencv", name: "OpenCV", category: "ml", proficiency: "intermediate", selfReported: true, evidence: ["project-4", "project-8"] },
    { id: "kafka", name: "Apache Kafka", category: "backend", proficiency: "intermediate", selfReported: true, evidence: ["project-5", "project-6"] },
    { id: "kubernetes", name: "Kubernetes", category: "devops", proficiency: "beginner", selfReported: true, evidence: ["project-6"] },
    { id: "react-native", name: "React Native", category: "mobile", proficiency: "intermediate", selfReported: true, evidence: ["project-9"] },
    { id: "fastapi", name: "FastAPI", category: "backend", proficiency: "intermediate", selfReported: true, evidence: ["project-2", "project-8"] },
    { id: "numpy", name: "NumPy", category: "ml", proficiency: "expert", selfReported: true, evidence: ["project-4", "project-7", "project-8"] }
  ],

  skillCategories: [
    { id: "programming", label: "Programming", color: "violet" },
    { id: "frontend", label: "Frontend", color: "cyan" },
    { id: "backend", label: "Backend", color: "emerald" },
    { id: "ml", label: "Machine Learning", color: "rose" },
    { id: "cloud", label: "Cloud", color: "gold" },
    { id: "devops", label: "DevOps", color: "violet" },
    { id: "database", label: "Database", color: "cyan" },
    { id: "mobile", label: "Mobile", color: "emerald" },
    { id: "tools", label: "Tools", color: "rose" }
  ],

  projects: [
    {
      id: "project-1",
      title: "SmartCampus Navigation System",
      slug: "smartcampus-nav",
      description: "Built an AI-powered indoor navigation system for campus buildings using computer vision and graph algorithms. Deployed as a Progressive Web App serving 2,000+ daily active users.",
      problem: "Students and visitors struggle to navigate large campus buildings, leading to delays and frustration.",
      technologies: ["React", "TypeScript", "TensorFlow.js", "Node.js", "PostgreSQL", "Docker"],
      techStack: {
        frontend: ["React", "TypeScript", "TensorFlow.js"],
        backend: ["Node.js", "PostgreSQL", "Docker"],
        ml: ["TensorFlow.js", "Computer Vision"]
      },
      contribution: "Led full-stack development, architected the graph-based routing algorithm, and implemented the computer vision positioning system.",
      stage: "Production",
      outcome: "2,000+ daily active users, sub-second routing, deployed across 5 campus buildings.",
      highlights: ["2,000+ DAU", "Sub-second routing", "Offline-first PWA"],
      screenshots: ["/images/smartcampus-screenshot.png"],
      links: {
        github: "github.com/aaravsharma/smartcampus-nav",
        demo: "smartcampus-nav.example.com"
      },
      date: "2024-03-15",
      featured: true,
      verified: true,
      skills: ["project-1"],
    },
    {
      id: "project-2",
      title: "MediAssist - Medical Prescription Analyzer",
      slug: "mediassist",
      description: "AI-powered medical prescription analyzer that extracts drug names, dosages, and interactions from handwritten prescriptions using OCR and NLP.",
      problem: "Manual extraction of medication information from handwritten prescriptions is error-prone and time-consuming.",
      technologies: ["Python", "PyTorch", "Tesseract OCR", "FastAPI", "React"],
      techStack: {
        frontend: ["React"],
        backend: ["FastAPI"],
        ml: ["PyTorch", "Tesseract OCR", "NLP"]
      },
      contribution: "Co-developed the OCR pipeline and NLP extraction model. Integrated with FastAPI for a responsive backend.",
      stage: "Production",
      outcome: "Won 1st place at IIT Delhi Hackathon 2024. Deployed to college health center.",
      highlights: ["150+ teams", "₹2,00,000 prize", "Deployed to college health center"],
      links: {
        github: "github.com/aaravsharma/mediassist",
        presentation: "youtu.be/example-mediassist"
      },
      date: "2024-02-10",
      featured: true,
      verified: true,
      relatedAchievement: "award-1"
    },
    {
      id: "project-4",
      title: "Efficient Transformers for Edge Devices",
      slug: "efficient-transformers",
      description: "Co-authored research on a novel attention compression technique reducing model size by 40% with <1% accuracy drop on BERT-base. Accepted at ICML 2024 Workshop.",
      problem: "Large transformer models are too resource-intensive for edge devices like smartphones and IoT devices.",
      technologies: ["PyTorch", "Hugging Face", "ONNX", "TensorRT"],
      techStack: {
        ml: ["PyTorch", "ONNX", "TensorRT", "Hugging Face"]
      },
      contribution: "Developed the attention compression algorithm and conducted extensive evaluation across multiple benchmarks.",
      stage: "Published",
      outcome: "Accepted at ICML 2024 Workshop. 40% size reduction with minimal accuracy loss.",
      highlights: ["ICML 2024 Workshop", "40% size reduction", "Open-source implementation"],
      links: {
        arxiv: "arxiv.org/abs/2024.xxxxx",
        github: "github.com/aaravsharma/efficient-transformers"
      },
      date: "2024-01-28",
      featured: true,
      verified: true
    },
    {
      id: "project-5",
      title: "AgriSense - Crop Health Monitoring System",
      slug: "agrisense",
      description: "IoT-based crop health monitoring system using multispectral imaging and ML-based disease detection.",
      problem: "Farmers lack affordable tools to detect crop diseases early, leading to significant yield loss.",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite", "MQTT", "InfluxDB"],
      techStack: {
        hardware: ["Raspberry Pi", "Multispectral Camera"],
        ml: ["TensorFlow Lite", "OpenCV"],
        backend: ["MQTT", "InfluxDB"]
      },
      contribution: "Led the ML model development and hardware integration. Deployed the system on 5 farms for testing.",
      stage: "Production",
      outcome: "Top 50 out of 10,000+ teams at Smart India Hackathon 2023. Deployed on 5 farms.",
      highlights: ["Top 50/10,000+ teams", "Govt. recognition", "Deployed on 5 farms"],
      links: {
        github: "github.com/aaravsharma/agrisense"
      },
      date: "2023-08-15",
      featured: false,
      verified: true,
      relatedAchievement: "award-2"
    },
    {
      id: "project-6",
      title: "CampusConnect - Student Network Platform",
      slug: "campusconnect",
      description: "A full-stack social platform connecting students across departments with shared interest groups, event discovery, and peer mentoring.",
      problem: "Students struggle to find peers with similar interests and professional goals across large universities.",
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB", "AWS", "Docker"],
      techStack: {
        frontend: ["React", "TypeScript"],
        backend: ["Node.js", "GraphQL", "MongoDB"],
        devops: ["AWS", "Docker", "Kubernetes"]
      },
      contribution: "Full-stack lead developer. Architected GraphQL API and implemented real-time event notifications.",
      stage: "Beta",
      outcome: "500+ active users, deployed to AWS with auto-scaling.",
      highlights: ["500+ active users", "AWS deployment", "Real-time notifications"],
      links: {
        github: "github.com/aaravsharma/campusconnect"
      },
      date: "2023-11-20",
      featured: false,
      verified: false
    },
    {
      id: "project-7",
      title: "TensorFlow Data Pipeline Optimization",
      slug: "tf-data-optimization",
      description: "Contributed performance optimizations to TensorFlow's data pipeline (tf.data). Merged PR reduced memory overhead by 15% for large dataset shuffling operations.",
      problem: "TensorFlow's tf.data pipeline has high memory overhead when shuffling large datasets.",
      technologies: ["C++", "Python", "Bazel", "TensorFlow Internals"],
      techStack: {
        programming: ["C++", "Python"],
        tools: ["Bazel", "TensorFlow Internals"]
      },
      contribution: "Identified memory leak patterns in shuffling operations and contributed a streaming buffer implementation.",
      stage: "Merged",
      outcome: "Merged into TensorFlow 2.15. Used in production at Google for large-scale training.",
      highlights: ["Merged to TF 2.15", "15% memory reduction", "Used in production at Google"],
      links: {
        github: "github.com/tensorflow/tensorflow/pull/xxxxxx"
      },
      date: "2023-10-12",
      featured: true,
      verified: true
    },
    {
      id: "project-8",
      title: "Deep Learning Study Group",
      slug: "dl-study-group",
      description: "Founded and led a weekly study group exploring deep learning architectures with hands-on projects.",
      problem: "Complex ML concepts benefit from collaborative learning and practical application.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      techStack: {
        ml: ["TensorFlow", "Keras", "NumPy", "Pandas"]
      },
      contribution: "Founded the group, designed curriculum, and mentored 20+ participants.",
      stage: "Ongoing",
      outcome: "20+ members, 5 completed ML projects, monthly presentations to faculty.",
      highlights: ["20+ members", "5 ML projects", "Faculty presentations"],
      date: "2023-06-30",
      featured: false,
      verified: true
    },
    {
      id: "project-9",
      title: "EcoTrack – Sustainability Habit Tracker (Hackathon)",
      slug: "ecotrack",
      description: "Mobile app that gamifies eco-friendly habits using computer vision to verify actions (e.g., recycling sorting) and blockchain to store verified achievements.",
      problem: "People struggle to maintain sustainable habits without feedback and verification.",
      technologies: ["React Native", "Firebase", "Computer Vision", "Ethereum Smart Contracts"],
      techStack: {
        mobile: ["React Native"],
        backend: ["Firebase", "Ethereum Smart Contracts"],
        ml: ["Computer Vision"]
      },
      contribution: "Led mobile development and blockchain integration. Built the CV-based verification pipeline.",
      stage: "Prototype",
      outcome: "Won 'Best Use of Blockchain' award. 300+ downloads in first week.",
      highlights: ["Best Use of Blockchain award", "300+ downloads", "CV verification"],
      links: {},
      date: "2023-09-15",
      featured: false,
      verified: true
    }
  ],

  awards: [
    {
      id: "award-1",
      title: "1st Place - IIT Delhi Hackathon 2024",
      category: "award",
      date: "2024-02-10",
      description: "Won first place among 150+ teams for 'MediAssist' - an AI-powered medical prescription analyzer.",
      issuer: "IIT Delhi",
      technologies: ["Python", "PyTorch", "Tesseract OCR", "FastAPI", "React"],
      highlights: ["150+ teams", "₹2,00,000 prize", "Deployed to college health center"],
      links: {
        github: "github.com/aaravsharma/mediassist",
        certificate: "certificates.iitd.ac.in/hackathon2024/aarav-sharma"
      },
      verified: true,
      project: "project-2"
    },
    {
      id: "award-2",
      title: "Finalist - Smart India Hackathon 2023",
      category: "award",
      date: "2023-08-15",
      description: "Team finalist for 'AgriSense' - IoT-based crop health monitoring system. Top 50 out of 10,000+ teams nationally.",
      issuer: "Government of India",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite"],
      highlights: ["Top 50/10,000+ teams", "Govt. recognition", "Deployed on 5 farms"],
      links: {
        github: "github.com/aaravsharma/agrisense"
      },
      verified: true,
      project: "project-5"
    },
    {
      id: "award-3",
      title: "Best Use of Blockchain - Hack2Skill Hackathon",
      category: "award",
      date: "2023-09-15",
      description: "Won 'Best Use of Blockchain' for 'EcoTrack' - a sustainability habit tracker with computer vision and blockchain verification.",
      issuer: "Hack2Skill",
      technologies: ["React Native", "Firebase", "Ethereum", "Computer Vision"],
      highlights: ["300+ downloads", "CV verification", "Smart contract implementation"],
      verified: true,
      project: "project-9"
    },
    {
      id: "award-4",
      title: "Department Excellence Award",
      category: "award",
      date: "2023-04-20",
      description: "Recognized for outstanding academic performance and contributions to the Computer Science department.",
      issuer: "IIT Delhi CSE Dept",
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
      issuer: "Amazon Web Services",
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation", "IAM"],
      highlights: ["Score: 890/1000", "Valid until Nov 2026"],
      links: {
        credential: "aws.amazon.com/verification/aarav-sharma-saa"
      },
      verified: true,
      projects: ["project-5", "project-6"]
    },
    {
      id: "cert-2",
      title: "Google Cloud Certified - Professional Data Engineer",
      category: "certification",
      date: "2024-04-05",
      description: "Demonstrated ability to design, build, and operationalize data processing systems on GCP.",
      issuer: "Google Cloud",
      technologies: ["BigQuery", "Dataflow", "Pub/Sub", "Vertex AI", "Cloud Composer"],
      highlights: ["Score: 92%", "Valid until Apr 2026"],
      links: {
        credential: "cloud.google.com/certification/aarav-sharma"
      },
      verified: true,
      projects: ["project-5"]
    },
    {
      id: "cert-3",
      title: "Deep Learning Specialization - deeplearning.ai",
      category: "certification",
      date: "2023-06-30",
      description: "Five-course specialization covering neural networks, CNNs, RNNs, Transformers, and ML project structuring.",
      issuer: "Coursera / DeepLearning.AI",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      highlights: ["5 courses", "Distinction grade", "Capstone: Medical image segmentation"],
      links: {
        credential: "coursera.org/verify/aarav-sharma-dl-specialization"
      },
      verified: true,
      projects: ["project-4", "project-8"]
    }
  ],

  timeline: [
    {
      id: "milestone-1",
      date: "2023-06-30",
      title: "Deep Learning Specialization",
      description: "Completed 5-course specialization with distinction",
      category: "certification",
      item: "cert-3"
    },
    {
      id: "milestone-2",
      date: "2023-08-15",
      title: "Smart India Hackathon Finalist",
      description: "Top 50 out of 10,000+ teams nationally",
      category: "award",
      item: "award-2"
    },
    {
      id: "milestone-3",
      date: "2023-09-15",
      title: "EcoTrack Hackathon Win",
      description: "Won 'Best Use of Blockchain' award",
      category: "award",
      item: "award-3"
    },
    {
      id: "milestone-4",
      date: "2023-10-12",
      title: "TensorFlow Contribution",
      description: "PR merged into TensorFlow 2.15 for data pipeline optimization",
      category: "project",
      item: "project-7"
    },
    {
      id: "milestone-5",
      date: "2023-11-20",
      title: "AWS Certification",
      description: "Achieved AWS Solutions Architect Associate certification",
      category: "certification",
      item: "cert-1"
    },
    {
      id: "milestone-6",
      date: "2024-01-28",
      title: "ICML Workshop Paper",
      description: "Research on efficient transformers accepted at ICML 2024",
      category: "project",
      item: "project-4"
    },
    {
      id: "milestone-7",
      date: "2024-02-10",
      title: "IIT Delhi Hackathon Victory",
      description: "1st place among 150+ teams for MediAssist project",
      category: "award",
      item: "award-1"
    },
    {
      id: "milestone-8",
      date: "2024-03-15",
      title: "SmartCampus Navigation Launch",
      description: "Launched AI-powered campus navigation PWA with 2,000+ daily users",
      category: "project",
      item: "project-1"
    },
    {
      id: "milestone-9",
      date: "2024-04-05",
      title: "Google Cloud Data Engineer Cert",
      description: "Achieved GCP Professional Data Engineer certification",
      category: "certification",
      item: "cert-2"
    },
    {
      id: "milestone-10",
      date: "2025-05-15",
      title: "Expected Graduation",
      description: "Target graduation date",
      category: "goal",
      item: "goal-graduation"
    }
  ],

  goals: [
    {
      id: "goal-graduation",
      title: "Graduate with Distinction",
      description: "Complete B.Tech with CGPA above 9.0 and secure a full-time AI/ML role",
      date: "2025-05-15",
      category: "education",
      priority: "high"
    },
    {
      id: "goal-phd",
      title: "Pursue PhD in AI Research",
      description: "Join a top-tier research program focused on efficient ML systems",
      date: "2026-08-01",
      category: "career",
      priority: "medium"
    },
    {
      id: "goal-open-source",
      title: "Build Open Source ML Toolkit",
      description: "Release a comprehensive toolkit for edge-AI deployment used by 1000+ developers",
      date: "2025-12-31",
      category: "project",
      priority: "medium"
    }
  ],

  // Aggregate all achievements
  get achievements() {
    const projects = this.projects.map(a => ({ ...a, category: "project" }));
    const awards = this.awards.map(a => ({ ...a, category: "award" }));
    const certifications = this.certifications.map(a => ({ ...a, category: "certification" }));
    return [...projects, ...awards, ...certifications];
  },

  categories: [
    { id: "all", label: "All", color: "neutral" },
    { id: "project", label: "Projects", color: "violet" },
    { id: "award", label: "Awards", color: "gold" },
    { id: "certification", label: "Certifications", color: "emerald" }
  ]
};

export const getAchievementsByCategory = (category) => {
  if (category === "all") return sampleProfile.achievements;
  return sampleProfile.achievements.filter(a => a.category === category);
};

export const getFeaturedAchievements = (limit = 4) => {
  return sampleProfile.achievements
    .filter(a => a.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const searchAchievements = (query) => {
  const lower = query.toLowerCase();
  return sampleProfile.achievements.filter(a =>
    a.title.toLowerCase().includes(lower) ||
    a.description.toLowerCase().includes(lower) ||
    a.technologies?.some(t => t.toLowerCase().includes(lower)) ||
    a.highlights?.some(h => h.toLowerCase().includes(lower))
  );
};

export const getAchievementById = (id) => {
  return sampleProfile.achievements.find(a => a.id === id);
};

export const getStats = () => {
  const { projects, awards, certifications, skills } = sampleProfile;
  return {
    projects: projects.length,
    awards: awards.length,
    certifications: certifications.length,
    skills: skills.length,
    totalAchievements: projects.length + awards.length + certifications.length
  };
};