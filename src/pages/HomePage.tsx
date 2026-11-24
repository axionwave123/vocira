import { Link } from 'react-router-dom'
import { Mic, Captions, Brain, Plus, Languages } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back</h1>
          <p className="page-subtitle">Ready to bridge conversations?</p>
        </div>
        <Link to="/voicebridge" className="btn btn-primary">
          <Plus size={18} /> New session
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 24
      }}>
        {[
          { to: '/voicebridge', icon: Mic, label: 'VoiceBridge', color: '#334EAC', bg: '#EEF2FF' },
          { to: '/live', icon: Captions, label: 'Live Subtitles', color: '#0D9488', bg: '#CCFBF1' },
          { to: '/brain', icon: Brain, label: 'Brain', color: '#7C3AED', bg: '#F3E8FF' },
          { to: '/language-studio', icon: Languages, label: 'Languages', color: '#D97706', bg: '#FEF3C7' },
        ].map((a) => (
          <Link key={a.to} to={a.to} className="card" style={{ textDecoration: 'none' }}>
            <div className="card-body" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: a.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px'
              }}>
                <a.icon size={22} color={a.color} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-deep-navy)' }}>
                {a.label}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <strong style={{ color: 'var(--color-deep-navy)' }}>Usage this month</strong>
        </div>
        <div className="card-body" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-deep-navy)' }}>42</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Translation min</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-deep-navy)' }}>3</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Reports</div>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-deep-navy)' }}>Free</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Plan</div>
          </div>
        </div>
      </div>
    </div>
  )
}
