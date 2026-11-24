import { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  Home, Mic, Captions, Brain, MessageSquare, FileText,
  BookOpen, Languages, Volume2, Settings, BarChart3,
  HelpCircle, User, Menu, ChevronLeft
} from 'lucide-react'

const desktopNav = [
  { section: 'Workspace', items: [
    { to: '/home', label: 'Dashboard', icon: Home },
    { to: '/voicebridge', label: 'VoiceBridge', icon: Mic },
    { to: '/live', label: 'Live Subtitles', icon: Captions },
    { to: '/brain', label: 'Brain', icon: Brain },
  ]},
  { section: 'Library', items: [
    { to: '/conversations', label: 'Conversations', icon: MessageSquare },
    { to: '/reports', label: 'Reports', icon: FileText },
    { to: '/knowledge', label: 'Knowledge', icon: BookOpen },
  ]},
  { section: 'Tools', items: [
    { to: '/language-studio', label: 'Language Studio', icon: Languages },
    { to: '/audio-studio', label: 'Audio Studio', icon: Volume2 },
    { to: '/usage', label: 'Usage', icon: BarChart3 },
  ]},
  { section: 'Account', items: [
    { to: '/settings', label: 'Settings', icon: Settings },
    { to: '/help', label: 'Help', icon: HelpCircle },
    { to: '/profile', label: 'Profile', icon: User },
  ]},
]

const mobileNav = [
  { to: '/home', label: 'Home', icon: Home },
  { to: '/voicebridge', label: 'Interpret', icon: Mic },
  { to: '/conversations', label: 'Chats', icon: MessageSquare },
  { to: '/brain', label: 'Brain', icon: Brain },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className="app-shell">
      <aside className={`sidebar desktop-only ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && (
            <span className="sidebar-logo">VOCI<span>RA</span></span>
          )}
          <button
            className="btn btn-icon"
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: 'white', marginLeft: 'auto' }}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <nav className="sidebar-nav">
          {desktopNav.map((group) => (
            <div key={group.section} className="nav-section">
              <div className="nav-section-title">{group.section}</div>
              {group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 600, color: 'var(--color-deep-navy)' }}>
              {location.pathname === '/home' ? 'Dashboard' :
               location.pathname.replace(/^\//, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <NavLink to="/plans" className="btn btn-secondary btn-sm">Plans</NavLink>
            <NavLink to="/profile" className="btn btn-icon" aria-label="Profile">
              <User size={20} />
            </NavLink>
          </div>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </div>

      <nav className="bottom-nav mobile-only">
        {mobileNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
