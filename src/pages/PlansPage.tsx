export default function PlansPage() {
  const plans = [
    { name: 'Free', price: '$0', features: ['60 min translation / month', 'Basic notes', 'Local storage'] },
    { name: 'Plus', price: '$9.99', features: ['500 min translation', 'Full Brain reports', 'Export all formats'] },
    { name: 'Pro', price: '$24.99', features: ['Unlimited translation', 'Team workspaces (soon)', 'Advanced analytics'] },
  ]
  return (
    <div>
      <div className="page-header">
        <div><h1 className="page-title">Plans</h1><p className="page-subtitle">Illustrative pricing — not active offers</p></div>
        <span className="demo-label">Prototype data</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {plans.map(p => (
          <div key={p.name} className="card">
            <div className="card-body">
              <h3>{p.name}</h3>
              <div style={{ fontSize: 28, fontWeight: 700, margin: '8px 0' }}>{p.price}<span style={{ fontSize: 14, fontWeight: 400 }}>/mo</span></div>
              <ul style={{ marginBottom: 16 }}>{p.features.map(f => <li key={f} style={{ fontSize: 14, marginBottom: 4 }}>• {f}</li>)}</ul>
              <button className="btn btn-primary btn-block btn-sm" disabled>Select (demo)</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
