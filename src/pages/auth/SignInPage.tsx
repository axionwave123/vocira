import { Link } from 'react-router-dom'
export default function SignInPage() {
  return (
    <div style={{ maxWidth: 400, margin: '48px auto', padding: '0 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Sign in</h1>
      <p style={{ marginBottom: 24, color: 'var(--color-text-muted)' }}>Welcome back to VOCIRA</p>
      <div className="form-group"><label className="label">Email</label><input className="input" type="email" placeholder="you@example.com" /></div>
      <div className="form-group"><label className="label">Password</label><input className="input" type="password" placeholder="••••••••" /></div>
      <Link to="/home" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>Sign in (demo)</Link>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}><Link to="/auth/recover">Forgot password?</Link> · <Link to="/auth/signup">Create account</Link></p>
      <p className="demo-label" style={{ marginTop: 24, justifyContent: 'center', display: 'flex' }}>Demo only</p>
    </div>
  )
}
