import { Link } from 'react-router-dom'
export default function SignUpPage() {
  return (
    <div style={{ maxWidth: 400, margin: '48px auto', padding: '0 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Create account</h1>
      <div className="form-group"><label className="label">Name</label><input className="input" placeholder="Alex Rivera" /></div>
      <div className="form-group"><label className="label">Email</label><input className="input" type="email" placeholder="you@example.com" /></div>
      <div className="form-group"><label className="label">Password</label><input className="input" type="password" placeholder="••••••••" /></div>
      <Link to="/onboarding" className="btn btn-primary btn-block">Create account (demo)</Link>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}>Already have an account? <Link to="/auth/signin">Sign in</Link></p>
    </div>
  )
}
