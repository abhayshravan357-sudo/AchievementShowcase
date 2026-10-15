const sampleProfile = {
  student: {
    name: "Aarav Sharma",
    tagline: "Computer Science Undergraduate | AI & Full-Stack Developer",
    university: "Indian Institute of Technology, Delhi",
    year: "3rd Year B.Tech",
    skills: [
      "Python", "JavaScript", "TypeScript", "React", "Node.js",
      "Machine Learning", "TensorFlow", "PyTorch", "PostgreSQL", "Docker",
      "AWS", "Git", "GraphQL", "REST APIs", "CI/CD"
    ]
  },
  achievements: [
    {
      id: 1,
      title: "SmartCampus Navigation System",
      category: "project",
      date: "2024-03-15",
      description: "Built an AI-powered indoor navigation system for campus buildings using computer vision and graph algorithms. Deployed as a Progressive Web App serving 2,000+ daily active users.",
      technologies: ["React", "TypeScript", "TensorFlow.js", "Node.js", "PostgreSQL", "Docker"],
      highlights: ["2,000+ DAU", "Sub-second routing", "Offline-first PWA"],
      verified: true
    },
    {
      id: 2,
      title: "1st Place - IIT Delhi Hackathon 2024",
      category: "award",
      date: "2024-02-10",
      description: "Won first place among 150+ teams for 'MediAssist' - an AI-powered medical prescription analyzer that extracts drug names, dosages, and interactions from handwritten prescriptions using OCR and NLP.",
      technologies: ["Python", "PyTorch", "Tesseract OCR", "FastAPI", "React"],
      highlights: ["150+ teams", "₹2,00,000 prize", "Deployed to college health center"],
      verified: true
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect - Associate",
      category: "certification",
      date: "2023-11-20",
      description: "Validated expertise in designing distributed systems on AWS. Covers compute, storage, networking, security, and cost optimization.",
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation", "IAM"],
      highlights: ["Score: 890/1000", "Valid until Nov 2026"],
      verified: true
    },
    {
      id: 4,
      title: "Research Paper: Efficient Transformers for Edge Devices",
      category: "project",
      date: "2024-01-28",
      description: "Co-authored a paper accepted at ICML 2024 Workshop on Efficient ML. Proposed a novel attention compression technique reducing model size by 40% with <1% accuracy drop on BERT-base.",
      technologies: ["PyTorch", "Hugging Face", "ONNX", "TensorRT"],
      highlights: ["ICML 2024 Workshop", "40% size reduction", "Open-source implementation"],
      verified: true
    },
    {
      id: 5,
      title: "Google Cloud Certified - Professional Data Engineer",
      category: "certification",
      date: "2024-04-05",
      description: "Demonstrated ability to design, build, and operationalize data processing systems on Google Cloud Platform.",
      technologies: ["BigQuery", "Dataflow", "Pub/Sub", "Vertex AI", "Cloud Composer"],
      highlights: ["Score: 92%", "Valid until Apr 2026"],
      verified: true
    },
    {
      id: 6,
      title: "Finalist - Smart India Hackathon 2023",
      category: "award",
      date: "2023-08-15",
      description: "Team finalist for 'AgriSense' - IoT-based crop health monitoring system using multispectral imaging and ML-based disease detection. Top 50 out of 10,000+ teams nationally.",
      technologies: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow Lite", "MQTT", "InfluxDB"],
      highlights: ["Top 50/10,000+ teams", "Govt. recognition", "Deployed on 5 farms"],
      verified: true
    },
    {
      id: 7,
      title: "Open Source Contributor - TensorFlow",
      category: "project",
      date: "2023-10-12",
      description: "Contributed performance optimizations to TensorFlow's data pipeline (tf.data). Merged PR reduced memory overhead by 15% for large dataset shuffling operations.",
      technologies: ["C++", "Python", "Bazel", "TensorFlow Internals"],
      highlights: ["Merged to TF 2.15", "15% memory reduction", "Used in production at Google"],
      verified: true
    },
    {
      id: 8,
      title: "Deep Learning Specialization - deeplearning.ai",
      category: "certification",
      date: "2023-06-30",
      description: "Five-course specialization covering neural networks, CNNs, RNNs, Transformers, and ML project structuring. Completed with distinction.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      highlights: ["5 courses", "Distinction grade", "Capstone: Medical image segmentation"],
      verified: true
    }
  ]
};

function buildSystemPrompt() {
  const context = {
    student: sampleProfile.student,
    projects: sampleProfile.achievements.filter(a => a.category === "project"),
    awards: sampleProfile.achievements.filter(a => a.category === "award"),
    certifications: sampleProfile.achievements.filter(a => a.category === "certification")
  };

  return `You are an AI Achievement Assistant for ${context.student.name}. Your role is to answer questions about their achievements, projects, awards, certifications, and skills using ONLY the information provided below.

STUDENT PROFILE:
- Name: ${context.student.name}
- Tagline: ${context.student.tagline}
- University: ${context.student.university}
- Year: ${context.student.year}
- Skills: ${context.student.skills.join(", ")}

PROJECTS:
${context.projects.map(p => `- ${p.title} (${new Date(p.date).getFullYear()}): ${p.description} | Technologies: ${p.technologies.join(", ")} | Highlights: ${p.highlights.join("; ")} | Verified: ${p.verified}`).join("\n")}

AWARDS:
${context.awards.map(a => `- ${a.title} (${new Date(a.date).getFullYear()}): ${a.description} | Technologies: ${a.technologies.join(", ")} | Highlights: ${a.highlights.join("; ")} | Verified: ${a.verified}`).join("\n")}

CERTIFICATIONS:
${context.certifications.map(c => `- ${c.title} (${new Date(c.date).getFullYear()}): ${c.description} | Technologies: ${c.technologies.join(", ")} | Highlights: ${c.highlights.join("; ")} | Verified: ${c.verified}`).join("\n")}

RULES:
1. Answer ONLY using the information above. Do NOT invent achievements, scores, or certificates.
2. If asked about something not in the profile, say you don't have that information and suggest what you CAN help with.
3. Be conversational, helpful, and concise.
4. Format responses with markdown for readability.
5. When relevant, mention verification status.
6. Suggest follow-up questions when appropriate.`;
}

export async function handleChat(message, history) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error("OpenAI API key not configured");
  }

  const systemPrompt = buildSystemPrompt();
  
  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-6).map(h => ({ role: h.role, content: h.content })),
    { role: "user", content: message }
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 800
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}