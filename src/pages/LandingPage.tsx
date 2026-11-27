import { Link } from 'react-router-dom'
import { Mic, Languages, Users, FileText, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 40%, #FFFFFF 100%)' }}>
      {/* Hero */}
      <section style={{ padding: '48px 24px 40px', textAlign: 'center', maxWidth: 420, margin: '0 auto' }}>
        {/* Logo mark */}
        <div style={{
          width: 72, height: 72, borderRadius: 20,
          background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)'
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M3 12c2-4 4-6 6-6s4 2 6 6 4 6 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M3 16c2-3 4-4.5 6-4.5s4 1.5 6 4.5 4 4.5 6 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>

        <h1 style={{
          fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em',
          color: 'var(--color-deep)', marginBottom: 6
        }}>Vocira</h1>
        <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-primary)', marginBottom: 8 }}>
          Listen. Translate. Connect.
        </p>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 32, lineHeight: 1.5 }}>
          AI-Powered Voice & Language Assistant
        </p>

        <div style={{ display: 'grid', gap: 10, marginBottom: 36, textAlign: 'left' }}>
          {[
            { icon: Mic, label: 'Live Listening' },
            { icon: Languages, label: 'Real-Time Translation' },
            { icon: Users, label: 'Two-Way Interpreter' },
            { icon: FileText, label: 'AI Meeting Notes' },
          ].map(f => (
            <div key={f.label} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px',
              background: 'white',
              borderRadius: 12,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'var(--color-primary-softer)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <f.icon size={18} color="var(--color-primary)" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-deep)' }}>{f.label}</span>
            </div>
          ))}
        </div>

        <Link to="/onboarding" className="btn btn-primary btn-lg btn-block">
          Get Started <ArrowRight size={18} />
        </Link>
        <div style={{ marginTop: 14 }}>
          <Link to="/auth/signin" className="btn btn-ghost btn-sm">Already have an account? Sign in</Link>
        </div>
      </section>
    </div>
  )
}
