# Achievement Showcase Bot

An AI-powered student achievement showcase with an interactive AI assistant — a premium portfolio meets a conversational agent.

## ✨ Features

- **8 Interactive Pages** — Overview, AI Assistant, Achievements, Projects, Skills, Journey, Compare Lab, Public Profile
- **AI Chat Assistant** — Natural-language Q&A using the OpenAI API with profile grounding
- **Fallback Assistant** — Works without API key using deterministic local responses
- **Achievement Constellation** — (Coming soon) Interactive visualization of achievement relationships
- **Compare Lab** — Side-by-side achievement comparison for interviews, hackathons, and applications
- **Responsive Design** — Desktop sidebar + mobile navigation
- **Premium UI** — Midnight navy theme with violet/cyan accents and gold highlights

## 🚀 Quick Start

```bash
# Install all dependencies
npm run install:all

# Start both client and server
npm run dev
```

This starts:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3001

### Build for production

```bash
npm run build && npm start
```

## 🏗️ Project Structure

```
achievement-showcase-bot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context for state management
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route pages (8 destinations)
│   │   ├── services/       # API client services
│   │   ├── utils/          # Helper utilities
│   │   └── data/           # Sample profile dataset
│   └── vite.config.js
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── services/           # AI + fallback services
│   └── index.js
├── .env.example
└── package.json
```

## 🔧 Configuration

Create `.env` in the root:

```bash
cp .env.example .env
```

Add your OpenAI API key (optional):

```env
OPENAI_API_KEY=sk-your-key-here
PORT=3001
```

**Without an API key**, the assistant uses the built-in fallback mode.

## 📊 Sample Profile

**Aarav Sharma** — Computer Science student at IIT Delhi

- 5 Projects (SmartCampus Nav, MediAssist, Efficient Transformers, AgriSense, TensorFlow contribution)
- 3 Awards (IIT Delhi Hackathon 1st place, SIH Finalist, Dept Excellence)
- 3 Certifications (AWS, GCP, DeepLearning.AI)
- 12+ Skills spanning AI/ML, full-stack, cloud, DevOps
- Interactive timeline of 10+ milestones

## 🎯 Navigation

| Page | Description |
|------|-------------|
| Overview | Command center with stats, featured achievements, timeline, insights |
| AI Assistant | Conversational AI chat with suggested prompts |
| Achievements | Searchable grid/list with category filters |
| Projects | Detailed project showcase with tech stacks |
| Skills | Interactive skill explorer with proficiency levels |
| Journey | Chronological timeline of milestones |
| Compare Lab | Side-by-side achievement comparison |
| Public Profile | Exportable profile preview |

## 🛡️ Security

- API keys are stored in backend environment variables only
- Frontend never makes direct API calls — all requests go through Express
- Input validation on all endpoints
- No authentication or database required for MVP

## 📱 Responsive

- Collapsible sidebar on desktop
- Mobile-friendly navigation with overlay menu
- Responsive grids and typography

## License

MIT