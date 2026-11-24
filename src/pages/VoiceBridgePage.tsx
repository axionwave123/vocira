import { useState } from 'react'
import { Mic, MicOff, ArrowLeftRight } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' }, { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' }, { code: 'ja', name: 'Japanese' }, { code: 'zh', name: 'Chinese' },
]

export default function VoiceBridgePage() {
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('es')
  const [isListening, setIsListening] = useState(false)

  const swap = () => { setSourceLang(targetLang); setTargetLang(sourceLang) }

  return (
    <div>
      <div className="page-header">
        <div><h1 className="page-title">VoiceBridge</h1><p className="page-subtitle">Real-time two-way voice translation</p></div>
        <span className="demo-label">Demo mode</span>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-body" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 140 }}>
            <label className="label">I speak</label>
            <select className="select" value={sourceLang} onChange={e => setSourceLang(e.target.value)}>
              {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>
          <button className="btn btn-icon" onClick={swap} aria-label="Swap" style={{ marginTop: 20 }}><ArrowLeftRight size={20} /></button>
          <div style={{ flex: 1, minWidth: 140 }}>
            <label className="label">They hear</label>
            <select className="select" value={targetLang} onChange={e => setTargetLang(e.target.value)}>
              {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <button className={`btn ${isListening ? 'btn-secondary' : 'btn-primary'} btn-lg`} onClick={() => setIsListening(!isListening)}>
            {isListening ? <><MicOff size={20} /> Stop</> : <><Mic size={20} /> Start listening</>}
          </button>
          <div style={{ marginTop: 12, fontSize: 13, color: 'var(--color-text-muted)' }}>
            {isListening ? <span style={{ color: 'var(--color-danger)' }}>● Recording (demo)</span> : 'Demo mode — no live AI connected'}
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        <div className="card"><div className="card-header"><strong>Original</strong></div><div className="card-body" style={{ minHeight: 100 }}><p style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>Original speech appears here.</p></div></div>
        <div className="card"><div className="card-header"><strong>Translated</strong></div><div className="card-body" style={{ minHeight: 100 }}><p style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>Translation appears here.</p></div></div>
      </div>
    </div>
  )
}
