import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const sessions = [
  { id: 'sess-001', title: 'Product roadmap sync with Madrid team', langs: 'EN → ES', duration: '42 min', date: '22 Nov' },
  { id: 'sess-002', title: 'Client onboarding call – Tokyo office', langs: 'EN → JA', duration: '45 min', date: '20 Nov' },
]

export default function ConversationsPage() {
  return (
    <div>
      <div className="page-header">
        <div><h1 className="page-title">Conversations</h1><p className="page-subtitle">{sessions.length} saved sessions</p></div>
        <Link to="/voicebridge" className="btn btn-primary btn-sm">New</Link>
      </div>
      <div style={{ marginBottom: 16, position: 'relative' }}>
        <Search size={18} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--color-text-muted)' }} />
        <input className="input" style={{ paddingLeft: 40 }} placeholder="Search conversations…" />
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        {sessions.map(s => (
          <Link key={s.id} to={`/conversations/${s.id}`} className="card" style={{ textDecoration: 'none' }}>
            <div className="card-body">
              <div style={{ fontWeight: 500, color: 'var(--color-deep-navy)', marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{s.langs} · {s.duration} · {s.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
