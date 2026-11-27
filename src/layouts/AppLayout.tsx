import { Outlet, NavLink } from 'react-router-dom'
import { Home, Mic, Languages, FileText, Settings } from 'lucide-react'

export default function AppLayout() {
  const nav = [
    { to: '/app', icon: Home, label: 'Home', end: true },
    { to: '/live', icon: Mic, label: 'Listen' },
    { to: '/voicebridge', icon: Languages, label: 'Translate' },
    { to: '/brain', icon: FileText, label: 'Notes' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="app-shell">
      <div className="main-content">
        <header className="top-header">
          <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--color-deep)', letterSpacing: '-0.02em' }}>
            Vocira
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: 13, fontWeight: 600
          }}>A</div>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </div>

      <nav className="bottom-nav">
        {nav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `bottom-nav-item${isActive ? ' active' : ''}`}
          >
            <item.icon />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
