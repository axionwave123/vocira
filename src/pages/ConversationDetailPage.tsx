import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Download } from 'lucide-react'

export default function ConversationDetailPage() {
  return (
    <div>
      <div style={{ marginBottom: 16 }}><Link to="/conversations" className="btn btn-ghost btn-sm"><ArrowLeft size={16} /> Back</Link></div>
      <div className="page-header">
        <div><h1 className="page-title" style={{ fontSize: '1.25rem' }}>Product roadmap sync with Madrid team</h1><p className="page-subtitle">EN → ES · 42 min</p></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary btn-sm"><Copy size={16} /> Copy</button>
          <button className="btn btn-secondary btn-sm"><Download size={16} /> Export</button>
        </div>
      </div>
      <div className="card"><div className="card-body" style={{ display: 'grid', gap: 16 }}>
        <div style={{ borderLeft: '3px solid #334EAC', paddingLeft: 12 }}>
          <span className="badge">Alex</span>
          <p style={{ marginTop: 4 }}>Welcome everyone. Today we will review the Q1 roadmap.</p>
          <p style={{ color: 'var(--color-royal-blue)', fontSize: 14 }}>Bienvenidos a todos. Hoy revisaremos la hoja de ruta del primer trimestre.</p>
        </div>
      </div></div>
    </div>
  )
}
