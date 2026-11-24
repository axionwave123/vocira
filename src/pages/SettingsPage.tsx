import { Link } from 'react-router-dom'
export default function SettingsPage() {
  return (
    <div>
      <div className="page-header"><h1 className="page-title">Settings</h1></div>
      <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
        {[
          { title: 'Profile & account', to: '/profile' },
          { title: 'Language preferences', to: '/language-studio' },
          { title: 'Audio devices', to: '/audio-studio' },
          { title: 'Plans & billing', to: '/plans' },
          { title: 'Help & support', to: '/help' },
        ].map((item) => (
          <div key={item.title} className="card">
            <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 500 }}>{item.title}</div>
              <Link to={item.to} className="btn btn-ghost btn-sm">Open</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
