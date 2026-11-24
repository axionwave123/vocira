import { Link } from 'react-router-dom'
export default function RecoverPage() {
  return (
    <div style={{ maxWidth: 400, margin: '48px auto', padding: '0 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Reset password</h1>
      <div className="form-group"><label className="label">Email</label><input className="input" type="email" placeholder="you@example.com" /></div>
      <button className="btn btn-primary btn-block">Send recovery link (demo)</button>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}><Link to="/auth/signin">Back to sign in</Link></p>
    </div>
  )
}
