export default function UsagePage() {
  return (
    <div>
      <div className="page-header"><div><h1 className="page-title">Usage</h1><p className="page-subtitle">Translation minutes and credits</p></div><span className="demo-label">Shell</span></div>
      <div className="card"><div className="card-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, textAlign: 'center' }}>
        <div><div style={{ fontSize: 24, fontWeight: 600 }}>42</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Translation min</div></div>
        <div><div style={{ fontSize: 24, fontWeight: 600 }}>3</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Reports</div></div>
        <div><div style={{ fontSize: 24, fontWeight: 600 }}>Free</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Plan</div></div>
      </div></div>
    </div>
  )
}
