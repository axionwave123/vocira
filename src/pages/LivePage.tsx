import { useState } from 'react'
import { Pause, Play, Trash2, Type } from 'lucide-react'

const demoLines = [
  { speaker: 'Alex', original: 'Welcome everyone to the product sync.', translated: 'Bienvenidos a todos a la sincronización de producto.', time: '00:12' },
  { speaker: 'Sofía', original: 'Gracias. Hemos terminado las pruebas de latencia.', translated: 'Thanks. We finished the latency tests.', time: '00:18' },
]

export default function LivePage() {
  const [paused, setPaused] = useState(false)
  return (
    <div>
      <div className="page-header">
        <div><h1 className="page-title">Live Subtitles</h1><p className="page-subtitle">Original and translated speech</p></div>
        <span className="demo-label">Sample content</span>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <button className="btn btn-secondary btn-sm" onClick={() => setPaused(!paused)}>{paused ? <><Play size={16} /> Resume</> : <><Pause size={16} /> Pause</>}</button>
        <button className="btn btn-secondary btn-sm"><Trash2 size={16} /> Clear</button>
        <button className="btn btn-secondary btn-sm"><Type size={16} /> Size</button>
      </div>
      <div className="card"><div className="card-body" style={{ display: 'grid', gap: 16 }}>
        {demoLines.map((line, i) => (
          <div key={i} style={{ borderLeft: '3px solid var(--color-royal-blue)', paddingLeft: 12 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}><span className="badge">{line.speaker}</span><span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{line.time}</span></div>
            <p style={{ marginBottom: 4 }}>{line.original}</p>
            <p style={{ color: 'var(--color-royal-blue)', fontSize: 14 }}>{line.translated}</p>
          </div>
        ))}
      </div></div>
    </div>
  )
}
