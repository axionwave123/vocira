import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const steps = [
    { title: 'Welcome to VOCIRA', body: 'One name, many voices, endless connections.' },
    { title: 'Preferred language', body: 'Choose the language you speak most often.' },
    { title: 'How will you use VOCIRA?', body: 'Select your primary use case.' },
    { title: 'Privacy first', body: 'Your conversations stay on your device by default.' },
  ]
  return (
    <div style={{ maxWidth: 480, margin: '40px auto', padding: '0 24px' }}>
      <h1 style={{ marginBottom: 12 }}>{steps[step].title}</h1>
      <p style={{ marginBottom: 24 }}>{steps[step].body}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        {step > 0 && <button className="btn btn-secondary" onClick={() => setStep(s => s - 1)}>Back</button>}
        {step < steps.length - 1 ? (
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setStep(s => s + 1)}>Continue</button>
        ) : (
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => navigate('/home')}>Enter VOCIRA</button>
        )}
      </div>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}>Already have an account? <Link to="/auth/signin">Sign in</Link></p>
    </div>
  )
}
