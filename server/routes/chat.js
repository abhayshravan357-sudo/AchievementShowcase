import express from "express";
import { handleChat } from "../services/aiService.js";
import { handleFallbackChat } from "../services/fallbackService.js";
import { sampleProfile } from "../../client/src/data/sampleProfile.js";

const router = express.Router();

router.get("/profile", (req, res) => {
  try {
    const { student, ...profileData } = sampleProfile;
    res.json({
      student: {
        name: student.name,
        tagline: student.tagline,
        university: student.university,
        year: student.year,
        email: student.email,
        location: student.location,
        bio: student.bio,
        skills: student.skills,
        profileCompletion: student.profileCompletion,
        graduationDate: student.graduationDate
      },
      stats: {
        projects: sampleProfile.projects.length,
        awards: sampleProfile.awards.length,
        certifications: sampleProfile.certifications.length,
        skills: sampleProfile.skills.length,
        totalAchievements: sampleProfile.projects.length + 
                          sampleProfile.awards.length + 
                          sampleProfile.certifications.length
      }
    });
  } catch (error) {
    console.error("Profile endpoint error:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

router.post("/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    if (trimmedMessage.length > 1000) {
      return res.status(400).json({ error: "Message too long (max 1000 characters)" });
    }

    let response;
    let source = "fallback";
    
    try {
      response = await handleChat(trimmedMessage, history);
      source = "ai";
    } catch (aiError) {
      console.warn("AI service failed, using fallback:", aiError.message);
      response = await handleFallbackChat(trimmedMessage, history);
      source = "fallback";
    }

    res.json({
      response,
      source,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
});

export default router;