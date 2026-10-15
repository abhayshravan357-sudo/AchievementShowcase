#!/usr/bin/env node
import http from "http";

const BASE_URL = "http://localhost:3001";
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.log(`❌ FAIL: ${message}`);
    failed++;
  }
}

async function runTests() {
  console.log("\n🧪 Achievement Showcase Bot — Test Suite\n");
  console.log("=".repeat(60));

  // Test 1: Frontend build
  console.log("\n📦 Test 1: Frontend Build");
  const fs = await import("fs");
  assert(fs.existsSync("client/dist/index.html"), "Build outputs index.html");
  assert(fs.existsSync("client/dist/assets") && fs.readdirSync("client/dist/assets").some(f => f.endsWith(".css")), "Build outputs CSS bundle");
  assert(fs.readdirSync("client/dist/assets").some(f => f.endsWith(".js")), "Build outputs JS bundle");

  // Test 2: Health endpoint
  console.log("\n🏥 Test 2: Health Endpoint");
  const healthRes = await fetch(`${BASE_URL}/api/health`);
  assert(healthRes.ok, "Health returns 200");
  const healthData = await healthRes.json();
  assert(healthData.status === "ok", "Health returns status ok");

  // Test 3: Profile endpoint
  console.log("\n👤 Test 3: Profile Endpoint");
  const profileRes = await fetch(`${BASE_URL}/api/profile`);
  assert(profileRes.ok, "Profile returns 200");
  const profileData = await profileRes.json();
  assert(profileData.student.name === "Aarav Sharma", "Profile returns student name");
  assert(profileData.stats.totalAchievements > 0, "Profile returns achievement stats");

  // Test 4: Chat - fallback mode
  console.log("\n💬 Test 4: Chat API - Fallback Mode");
  const chatRes = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "What projects has Aarav built?", history: [] })
  });
  const chatData = await chatRes.json();
  assert(chatRes.ok, "Chat endpoint returns 200");
  assert(chatData.response.length > 0, "Returns response content");
  assert(chatData.source === "fallback", "Uses fallback without API key");

  // Test 5-12: Chat intent handling
  console.log("\n🧠 Test 5-12: Chat Intent Handling");
  
  const intents = [
    ["Hello", "greeting"],
    ["What skills does Aarav have?", "skills"],
    ["What awards has Aarav won?", "awards"],
    ["What certifications does Aarav hold?", "certifications"],
    ["What projects has Aarav built?", "projects"],
    ["Tell me about SmartCampus", "specific"],
    ["Tell me about Aarav's background", "profile"],
    ["What should I showcase for interview?", "career"]
  ];

  for (const [query, intent] of intents) {
    const res = await fetch(`${BASE_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: query, history: [] })
    });
    const data = await res.json();
    assert(res.ok && data.response.length > 0, `${intent} query returns response`);
  }

  // Test 13: Input validation
  console.log("\n🚫 Test 13: Input Validation");
  const emptyRes = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "", history: [] })
  });
  assert(emptyRes.status === 400, "Rejects empty message");

  const missingRes = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ history: [] })
  });
  assert(missingRes.status === 400, "Rejects missing message");

  const longRes = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "a".repeat(1001), history: [] })
  });
  assert(longRes.status === 400, "Rejects message > 1000 chars");

  // Test 14: No fabrication
  console.log("\n🤥 Test 14: No Fabrication");
  const unknownRes = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "What is Aarav's favorite color?", history: [] })
  });
  const unknownData = await unknownRes.json();
  assert(unknownData.response.length > 0, "Returns response for unknown query");
  assert(!unknownData.response.toLowerCase().includes("blue") && !unknownData.response.toLowerCase().includes("red"), "Doesn't fabricate answer");

  // Test 15: Security - No API key in frontend
  console.log("\n🔒 Test 15: Security Check");
  const { globSync } = await import("glob");
  const files = [...globSync("client/src/**/*.{js,jsx,css,html}")];
  let apiKeyExposed = false;
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    if (content.includes("OPENAI_API_KEY") || content.includes("sk-")) {
      apiKeyExposed = true;
      break;
    }
  }
  assert(!apiKeyExposed, "No API key in frontend code");

  console.log("\n" + "=".repeat(60));
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  console.log(failed === 0 ? "\n🎉 All tests passed!" : `\n⚠️  ${failed} test(s) failed`);
  console.log("=".repeat(60));
  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch(console.error);