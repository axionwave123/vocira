import { Outlet, Link } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="sidebar-logo" style={{ color: 'var(--color-deep-navy)' }}>
            VOCIRA
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link to="/auth/signin" className="btn btn-ghost btn-sm">Sign in</Link>
          <Link to="/auth/signup" className="btn btn-primary btn-sm">Get started</Link>
        </div>
      </header>
      <main className="public-content">
        <Outlet />
      </main>
    </div>
  )
}
