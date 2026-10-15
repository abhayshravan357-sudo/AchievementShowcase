const API_BASE = "/api";

export async function sendMessage(message, history = []) {
  try {
    const response = await fetch(`${API_BASE}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message.trim(),
        history
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to send message");
    }

    const data = await response.json();
    return {
      response: data.response,
      source: data.source,
      timestamp: data.timestamp
    };
  } catch (error) {
    console.error("Chat API error:", error);
    
    const fallbackResponse = generateFallbackResponse(message);
    return {
      response: fallbackResponse,
      source: "fallback",
      timestamp: new Date().toISOString()
    };
  }
}

function generateFallbackResponse(message) {
  const lower = message.toLowerCase();
  
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! I'm your achievement assistant. I can help you explore projects, awards, and certifications. Please try again in a moment, or ask about any specific achievement!";
  }
  
  if (lower.includes("project")) {
    return "I can see several impressive projects in the portfolio. Try asking about a specific project like SmartCampus Navigation or MediAssist for more details.";
  }
  
  if (lower.includes("award") || lower.includes("hackathon")) {
    return "Aarav has won several hackathon awards including 1st place at IIT Delhi Hackathon and finalist at Smart India Hackathon.";
  }
  
  if (lower.includes("cert")) {
    return "The profile includes certifications from AWS, Google Cloud, and deeplearning.ai.";
  }
  
  if (lower.includes("skill")) {
    return "Key skills include Python, React, PyTorch, TensorFlow, AWS, and Docker. View the Skills page for the full list.";
  }
  
  return "I'm currently in fallback mode. Try asking about projects, awards, certifications, or skills!";
}

export async function fetchProfile() {
  try {
    const response = await fetch(`${API_BASE}/profile`);
    if (!response.ok) throw new Error("Failed to fetch profile");
    return response.json();
  } catch (error) {
    console.error("Profile fetch error:", error);
    return null;
  }
}

export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`);
    if (!response.ok) throw new Error("Health check failed");
    return await response.json();
  } catch (error) {
    console.error("Health check error:", error);
    return null;
  }
}