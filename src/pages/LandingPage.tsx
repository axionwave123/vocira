import { Link } from 'react-router-dom'
import { Mic, Captions, Brain, ArrowRight, Check } from 'lucide-react'

export default function LandingPage() {
  return (
    <div>
      <section style={{ padding: '48px 24px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
        <div className="demo-label" style={{ marginBottom: 16 }}>Prototype</div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', marginBottom: 16 }}>
          One name, many voices,<br />endless connections.
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          VOCIRA is your AI-powered communication platform. Real-time voice translation, live subtitles and intelligent meeting notes.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/onboarding" className="btn btn-primary btn-lg">Get started free <ArrowRight size={18} /></Link>
          <Link to="/auth/signin" className="btn btn-secondary btn-lg">Sign in</Link>
        </div>
      </section>
      <section style={{ padding: '32px 24px', background: 'var(--color-very-pale-blue)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Three connected engines</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: Mic, title: 'VoiceBridge', desc: 'Real-time two-way voice translation.' },
              { icon: Captions, title: 'Live', desc: 'Original and translated live subtitles.' },
              { icon: Brain, title: 'Brain', desc: 'AI meeting intelligence and structured reports.' },
            ].map((e) => (
              <div key={e.title} className="card">
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--color-pale-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <e.icon size={24} color="var(--color-royal-blue)" />
                  </div>
                  <h3 style={{ marginBottom: 8 }}>{e.title}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '40px 24px', textAlign: 'center', background: 'var(--color-deep-navy)', color: 'white' }}>
        <h2 style={{ color: 'white', marginBottom: 12 }}>Start connecting without barriers</h2>
        <Link to="/onboarding" className="btn btn-primary btn-lg" style={{ background: 'white', color: 'var(--color-deep-navy)' }}>Create your account</Link>
      </section>
    </div>
  )
}
