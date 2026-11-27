import { Outlet, Link, useLocation } from 'react-router-dom'

export default function PublicLayout() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="public-layout">
      <header className="public-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-deep-navy)'
          }}>
            VOCIRA
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {!isLanding && (
            <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
          )}
          <Link to="/auth/signin" className="btn btn-ghost btn-sm">Sign in</Link>
          <Link to="/onboarding" className="btn btn-primary btn-sm">Get started</Link>
        </div>
      </header>
      <main className="public-content">
        <Outlet />
      </main>
    </div>
  )
}
