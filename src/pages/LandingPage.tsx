import { Link } from 'react-router-dom'
import { Mic, Captions, Brain, ArrowRight, Check, Globe, Shield, Zap, Languages } from 'lucide-react'

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section style={{
        padding: '64px 24px 72px',
        textAlign: 'center',
        maxWidth: 880,
        margin: '0 auto'
      }}>
        <div className="demo-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
          Prototype · Web first
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5.5vw, 3.25rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          color: 'var(--color-deep-navy)',
          marginBottom: 20
        }}>
          One name, many voices,<br />endless connections.
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--color-text-muted)',
          maxWidth: 540,
          margin: '0 auto 36px',
          lineHeight: 1.6
        }}>
          VOCIRA is your AI-powered communication platform.
          Real-time voice translation, live subtitles, and intelligent meeting notes — private by design.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/onboarding" className="btn btn-primary btn-lg">
            Get started free <ArrowRight size={18} />
          </Link>
          <Link to="/auth/signin" className="btn btn-secondary btn-lg">
            Sign in
          </Link>
        </div>
      </section>

      {/* Three engines */}
      <section style={{ padding: '48px 24px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: 8, color: 'var(--color-deep-navy)' }}>
            Three connected engines
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: 40, fontSize: 15 }}>
            Everything you need to understand, speak, and remember across languages.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                icon: Mic,
                title: 'VoiceBridge',
                desc: 'Real-time two-way voice translation. Speak in your language — they hear theirs.',
                color: '#0F766E',
                bg: '#CCFBF1'
              },
              {
                icon: Captions,
                title: 'Live',
                desc: 'Original and translated live subtitles with speaker labels and timestamps.',
                color: '#0284C7',
                bg: '#E0F2FE'
              },
              {
                icon: Brain,
                title: 'Brain',
                desc: 'AI meeting intelligence: summaries, decisions, tasks, risks and fishbone analysis.',
                color: '#7C3AED',
                bg: '#F3E8FF'
              },
            ].map((e) => (
              <div key={e.title} className="card" style={{ height: '100%' }}>
                <div className="card-body" style={{ textAlign: 'center', padding: '28px 20px' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: e.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <e.icon size={24} color={e.color} />
                  </div>
                  <h3 style={{ marginBottom: 10, fontSize: '1.1rem' }}>{e.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '56px 24px', maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: 32, color: 'var(--color-deep-navy)' }}>
          Why VOCIRA
        </h2>
        <ul style={{ display: 'grid', gap: 14 }}>
          {[
            { icon: Globe, text: 'Works across any call or stream — no bots join the meeting' },
            { icon: Shield, text: 'Privacy-first: clear data controls and local preferences' },
            { icon: Brain, text: 'Structured meeting intelligence, not just a transcript' },
            { icon: Zap, text: 'Designed for individuals today, teams tomorrow' },
            { icon: Languages, text: 'Mobile-first web app, ready for Windows desktop later' },
          ].map((b) => (
            <li key={b.text} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              padding: '14px 16px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'var(--color-very-pale-blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <b.icon size={18} color="var(--color-royal-blue)" />
              </div>
              <span style={{ fontSize: 15, color: 'var(--color-deep-navy)', paddingTop: 6 }}>{b.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section style={{ padding: '48px 24px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: 36, color: 'var(--color-deep-navy)' }}>
            How it works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { step: '1', title: 'Choose languages', desc: 'Pick what you speak and what they should hear.' },
              { step: '2', title: 'Start a session', desc: 'Open VoiceBridge or Live for real-time translation and subtitles.' },
              { step: '3', title: 'Let Brain work', desc: 'Get summaries, decisions, tasks and insights after the conversation.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--color-royal-blue)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, margin: '0 auto 14px', fontSize: 16
                }}>{s.step}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section style={{ padding: '56px 24px', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: 8, color: 'var(--color-deep-navy)' }}>
          Simple plans
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: 32, fontSize: 14 }}>
          Illustrative pricing for the prototype — not active offers yet.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { name: 'Free', price: '$0', features: ['60 min translation / month', 'Basic notes', 'Local storage'] },
            { name: 'Plus', price: '$9.99', features: ['500 min translation', 'Full Brain reports', 'Export all formats'], highlight: true },
            { name: 'Pro', price: '$24.99', features: ['Unlimited translation', 'Team workspaces (soon)', 'Advanced analytics'] },
          ].map((p) => (
            <div key={p.name} className="card" style={p.highlight ? { borderColor: 'var(--color-royal-blue)', boxShadow: '0 0 0 1px var(--color-royal-blue)' } : {}}>
              <div className="card-body">
                <h3 style={{ marginBottom: 4 }}>{p.name}</h3>
                <div style={{ fontSize: 28, fontWeight: 700, margin: '8px 0 16px', color: 'var(--color-deep-navy)' }}>
                  {p.price}<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--color-text-muted)' }}>/mo</span>
                </div>
                <ul style={{ marginBottom: 20 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8, fontSize: 14 }}>
                      <Check size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/onboarding" className={`btn ${p.highlight ? 'btn-primary' : 'btn-secondary'} btn-block btn-sm`}>
                  Get started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '56px 24px',
        textAlign: 'center',
        background: 'var(--color-deep-navy)',
        color: 'white'
      }}>
        <h2 style={{ color: 'white', marginBottom: 12, fontSize: '1.6rem' }}>
          Start connecting without barriers
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, fontSize: 15 }}>
          Free prototype. No credit card required.
        </p>
        <Link
          to="/onboarding"
          className="btn btn-lg"
          style={{ background: 'white', color: 'var(--color-deep-navy)', fontWeight: 600 }}
        >
          Create your account <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '24px',
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-surface)'
      }}>
        <div style={{ marginBottom: 8, fontWeight: 600, color: 'var(--color-deep-navy)' }}>VOCIRA</div>
        One name, many voices, endless connections.
      </footer>
    </div>
  )
}
