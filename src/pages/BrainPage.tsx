import { useState } from 'react'
import { Copy, Download } from 'lucide-react'

const tabs = ['Overview', 'Summary', 'Key Points', 'Decisions', 'Tasks', 'Risks'] as const

export default function BrainPage() {
  const [tab, setTab] = useState<typeof tabs[number]>('Overview')
  return (
    <div>
      <div className="page-header">
        <div><h1 className="page-title">VOCIRA Brain</h1><p className="page-subtitle">Meeting intelligence</p></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary btn-sm"><Copy size={16} /> Copy</button>
          <button className="btn btn-secondary btn-sm"><Download size={16} /> Export</button>
          <span className="demo-label">Demo data</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, overflowX: 'auto', marginBottom: 20 }}>
        {tabs.map(t => (
          <button key={t} className={`btn btn-sm ${tab === t ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTab(t)} style={{ flexShrink: 0 }}>{t}</button>
        ))}
      </div>
      <div className="card"><div className="card-body">
        {tab === 'Overview' && <p>The team aligned on Q1 priorities for VoiceBridge and committed to shipping Windows system-audio capture in the December beta.</p>}
        {tab === 'Summary' && <p>Product roadmap sync with Madrid team. Latency under 1.2s confirmed. Next focus: Windows capture.</p>}
        {tab === 'Key Points' && <ul style={{ display: 'grid', gap: 8 }}><li style={{ padding: '8px 12px', background: 'var(--color-very-pale-blue)', borderRadius: 8 }}>• Latency tests show &lt; 1.2 s end-to-end.</li><li style={{ padding: '8px 12px', background: 'var(--color-very-pale-blue)', borderRadius: 8 }}>• Windows desktop capture is the next major feature.</li></ul>}
        {tab === 'Decisions' && <div className="card" style={{ padding: 12 }}><div style={{ fontWeight: 500 }}>Ship system-audio capture in the Windows beta by mid-December.</div></div>}
        {tab === 'Tasks' && <div className="card" style={{ padding: 12 }}><div style={{ fontWeight: 500 }}>Prepare Windows WASAPI integration design document</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Assignee: Carlos · Due 2026-12-05</div></div>}
        {tab === 'Risks' && <div className="card" style={{ padding: 12 }}><span className="badge">medium</span><div style={{ marginTop: 6 }}>Windows audio capture permissions may vary across OS versions.</div></div>}
      </div></div>
    </div>
  )
}
