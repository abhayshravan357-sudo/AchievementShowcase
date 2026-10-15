import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import AIAssistant from "./pages/AIAssistant";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import Compare from "./pages/Compare";
import PublicProfile from "./pages/PublicProfile";
import AchievementConstellation from "./pages/AchievementConstellation";
import "./App.css";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app">
      <Topbar 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        onMobileMenuToggle={openMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />
      
      <Sidebar 
        collapsed={sidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        onToggle={toggleSidebar}
        onMobileClose={closeMobileMenu}
      />
      
      <main className={`main-content ${sidebarCollapsed ? "collapsed" : ""} ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/assistant" element={<AIAssistant />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/profile" element={<PublicProfile />} />
            <Route path="/constellation" element={<AchievementConstellation />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProfileProvider>
      </main>
    </div>
  );
}

export default App;