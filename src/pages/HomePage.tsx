import { Link } from 'react-router-dom'
import { Mic, Languages, FileText, Settings } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Greeting */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-deep)' }}>
          Hello, Alex 👋
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, marginTop: 4 }}>
          Ready to listen?
        </p>
      </div>

      {/* Main action */}
      <div style={{
        background: 'linear-gradient(145deg, #1E3A5F 0%, #0F172A 100%)',
        borderRadius: 24,
        padding: '36px 24px',
        textAlign: 'center',
        marginBottom: 24,
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(37,99,235,0.25), transparent 60%)'
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 0 0 12px rgba(37,99,235,0.2), 0 0 0 24px rgba(37,99,235,0.08)'
          }}>
            <Mic size={30} color="white" />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 4 }}>Tap to start</p>
          <p style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>Live Listening</p>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
        {[
          { to: '/voicebridge', icon: Languages, label: 'Translate', color: '#2563EB', bg: '#EFF6FF' },
          { to: '/brain', icon: FileText, label: 'Notes', color: '#7C3AED', bg: '#F5F3FF' },
        ].map(a => (
          <Link key={a.to} to={a.to} className="card" style={{ textDecoration: 'none' }}>
            <div className="card-body" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: a.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 10px'
              }}>
                <a.icon size={20} color={a.color} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-deep)' }}>{a.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent */}
      <div className="card">
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--color-border)' }}>
          <strong style={{ fontSize: 14, color: 'var(--color-deep)' }}>Recent sessions</strong>
        </div>
        <div style={{ padding: '8px 0' }}>
          {[
            { title: 'Project Meeting', time: 'Nov 8, 14:30', dur: '32 min' },
            { title: 'Client Call — ES', time: 'Nov 7, 10:15', dur: '18 min' },
          ].map((s, i) => (
            <Link key={i} to="/conversations" style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px', textDecoration: 'none', color: 'inherit'
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--color-primary-softer)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Mic size={18} color="var(--color-primary)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-deep)' }}>{s.title}</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{s.time} · {s.dur}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
