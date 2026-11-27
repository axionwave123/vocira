import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Mic, Volume2, Brain, Check } from 'lucide-react'

const STEPS = ['welcome', 'language', 'how', 'permissions', 'provider', 'done'] as const

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const [lang, setLang] = useState('en')
  const navigate = useNavigate()

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1)
    else navigate('/app')
  }

  const current = STEPS[step]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 50%, #FFFFFF 100%)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      maxWidth: 420,
      margin: '0 auto'
    }}>
      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 32 }}>
        {STEPS.map((_, i) => (
          <div key={i} style={{
            width: i === step ? 20 : 8, height: 8, borderRadius: 4,
            background: i <= step ? 'var(--color-primary)' : 'var(--color-border)',
            transition: 'all 200ms ease'
          }} />
        ))}
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {current === 'welcome' && (
          <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              width: 88, height: 88, borderRadius: '50%',
              background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 0 0 12px rgba(37,99,235,0.08)'
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Mic size={26} color="white" />
              </div>
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 10 }}>Welcome to Vocira</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.5 }}>
              Your AI voice assistant for a connected world.
            </p>
          </div>
        )}

        {current === 'language' && (
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 6, textAlign: 'center' }}>Choose Your Language</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 24 }}>
              Select your preferred app language.
            </p>
            <div style={{ display: 'grid', gap: 10 }}>
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 16px',
                    background: lang === l.code ? 'var(--color-primary-softer)' : 'white',
                    border: `1.5px solid ${lang === l.code ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    borderRadius: 14,
                    textAlign: 'left',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span style={{ fontSize: 22 }}>{l.flag}</span>
                  <span style={{ fontWeight: 500, flex: 1 }}>{l.name}</span>
                  {lang === l.code && <Check size={18} color="var(--color-primary)" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {current === 'how' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 6 }}>How Vocira Works</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 28 }}>
              Speak, translate and get results in real-time.
            </p>
            <div style={{
              width: 160, height: 160, borderRadius: 24,
              background: 'linear-gradient(145deg, #1E3A5F, #0F172A)',
              margin: '0 auto 28px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 12px 32px rgba(15,23,42,0.25)',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(37,99,235,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Mic size={22} color="#60A5FA" />
              </div>
            </div>
            <div style={{ display: 'grid', gap: 12, textAlign: 'left' }}>
              {[
                { icon: Mic, t: 'Live Listening', d: 'Capture any conversation' },
                { icon: Languages, t: 'Instant Translation', d: 'See both languages at once' },
                { icon: Brain, t: 'Smart Notes', d: 'AI summaries & action items' },
              ].map(i => (
                <div key={i.t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--color-primary-softer)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <i.icon size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{i.t}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{i.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {current === 'permissions' && (
          <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'var(--color-primary-softer)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Mic size={32} color="var(--color-primary)" />
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>Microphone Permission</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 8 }}>
              Allow Vocira to access your microphone.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>
              Required for live listening and interpretation.
            </p>
          </div>
        )}

        {current === 'provider' && (
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 6, textAlign: 'center' }}>AI Provider Setup</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 24 }}>
              Choose your preferred AI service.
            </p>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { name: 'OpenAI', badge: 'Recommended', desc: 'Best quality' },
                { name: 'Claude', badge: null, desc: 'Anthropic' },
                { name: 'Local Model', badge: null, desc: 'On-device (coming soon)' },
              ].map(p => (
                <button key={p.name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px',
                  background: 'white',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 14,
                  textAlign: 'left'
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, displayItems: 'center', gap: 8, display: 'flex' }}>
                      {p.name}
                      {p.badge && <span className="badge">{p.badge}</span>}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>{p.desc}</div>
                  </div>
                  <ArrowRight size={16} color="var(--color-text-muted)" />
                </button>
              ))}
            </div>
          </div>
        )}

        {current === 'done' && (
          <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'var(--color-success-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Check size={36} color="var(--color-success)" strokeWidth={3} />
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>Setup Complete!</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
              You're all set to start using Vocira.
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div style={{ marginTop: 32 }}>
        {current === 'permissions' ? (
          <>
            <button className="btn btn-primary btn-lg btn-block" onClick={next}>Allow</button>
            <button className="btn btn-ghost btn-block" style={{ marginTop: 8 }} onClick={next}>Not Now</button>
          </>
        ) : current === 'done' ? (
          <button className="btn btn-primary btn-lg btn-block" onClick={() => navigate('/app')}>
            Start Using Vocira
          </button>
        ) : (
          <>
            <button className="btn btn-primary btn-lg btn-block" onClick={next}>
              {current === 'welcome' ? 'Get Started' : 'Continue'} <ArrowRight size={18} />
            </button>
            {step > 0 && (
              <button className="btn btn-ghost btn-block" style={{ marginTop: 8 }} onClick={() => setStep(s => s - 1)}>
                Back
              </button>
            )}
            {step === 0 && (
              <Link to="/app" className="btn btn-ghost btn-block" style={{ marginTop: 8 }}>Skip</Link>
            )}
          </>
        )}
      </div>
    </div>
  )
}
