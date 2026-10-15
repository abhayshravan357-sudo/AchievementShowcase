import { useLocation } from "react-router-dom";
import { Bell, Menu, Search, UserCircle } from "lucide-react";
import { navItems } from "./Sidebar";
import "./Topbar.css";

export default function Topbar({ 
  sidebarCollapsed, 
  onToggleSidebar, 
  onMobileMenuToggle,
  mobileMenuOpen 
}) {
  const location = useLocation();
  const currentItem = navItems.find(item => item.path === location.pathname) || navItems[0];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={onMobileMenuToggle}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <span className="close-icon">✕</span> : <Menu size={18} />}
        </button>
        
        <button
          className="desktop-toggle-btn"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? "▸" : "◂"}
        </button>
        
        <div className="page-title">
          <span className="page-icon" aria-hidden="true">
            <currentItem.icon size={18} />
          </span>
          <h1 className="page-heading">{currentItem.label}</h1>
        </div>
      </div>

      <div className="topbar-right">
        <button className="topbar-btn" aria-label="Search">
          <Search size={16} />
        </button>
        
        <button className="topbar-btn" aria-label="Notifications">
          <Bell size={16} />
          <span className="notification-badge">3</span>
        </button>
        
        <button className="topbar-btn user-btn" aria-label="User profile">
          <UserCircle size={20} />
        </button>
      </div>
    </header>
  );
}
