import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Bot,
  Trophy,
  FolderKanban,
  Code2,
  Clock,
  BarChart3,
  User,
  Share2
} from "lucide-react";

import "./Sidebar.css";

const navItems = [
  { id: "overview", label: "Overview", icon: Home, path: "/" },
  { id: "assistant", label: "AI Assistant", icon: Bot, path: "/assistant" },
  { id: "achievements", label: "Achievements", icon: Trophy, path: "/achievements" },
  { id: "constellation", label: "Constellation", icon: Share2, path: "/constellation" },
  { id: "projects", label: "Projects", icon: FolderKanban, path: "/projects" },
  { id: "skills", label: "Skill Intelligence", icon: Code2, path: "/skills" },
  { id: "journey", label: "Journey", icon: Clock, path: "/journey" },
  { id: "compare", label: "Compare Lab", icon: BarChart3, path: "/compare" },
  { id: "profile", label: "Public Profile", icon: User, path: "/profile" }
];

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  const location = useLocation();

  return (
    <>
      <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-glow" aria-hidden="true">✦</span>
            {!collapsed && <span className="brand-name">Achievement AI</span>}
          </div>
          <button
            className="sidebar-toggle"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "▸" : "◂"}
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <div className="nav-section">
            <span className="nav-section-title">Navigation</span>
            {navItems.slice(0, 4).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""} ${collapsed ? "collapsed" : ""}`
                }
                onClick={onMobileClose}
              >
                <item.icon className="nav-icon" size={collapsed ? 20 : 18} />
                {!collapsed && <span className="nav-label">{item.label}</span>}
                {!collapsed && (
                  <span
                    className="nav-indicator"
                    style={{
                      opacity: location.pathname === item.path ? 1 : 0,
                      transform:
                        location.pathname === item.path
                          ? "scaleX(1)"
                          : "scaleX(0)"
                    }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          <div className="nav-divider" />

          <div className="nav-section">
            <span className="nav-section-title">Tools</span>
            {navItems.slice(4).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""} ${collapsed ? "collapsed" : ""}`
                }
                onClick={onMobileClose}
              >
                <item.icon className="nav-icon" size={collapsed ? 20 : 18} />
                {!collapsed && <span className="nav-label">{item.label}</span>}
                {!collapsed && (
                  <span
                    className="nav-indicator"
                    style={{
                      opacity: location.pathname === item.path ? 1 : 0,
                      transform:
                        location.pathname === item.path
                          ? "scaleX(1)"
                          : "scaleX(0)"
                    }}
                  />
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {mobileOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export { navItems };