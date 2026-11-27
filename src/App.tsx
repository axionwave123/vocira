import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import HomePage from './pages/HomePage'
import VoiceBridgePage from './pages/VoiceBridgePage'
import LivePage from './pages/LivePage'
import BrainPage from './pages/BrainPage'
import ConversationsPage from './pages/ConversationsPage'
import SettingsPage from './pages/SettingsPage'
import SignInPage from './pages/auth/SignInPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/signin" element={<SignInPage />} />
        </Route>

        <Route path="/onboarding" element={<OnboardingPage />} />

        <Route element={<AppLayout />}>
          <Route path="/app" element={<HomePage />} />
          <Route path="/voicebridge" element={<VoiceBridgePage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/brain" element={<BrainPage />} />
          <Route path="/conversations" element={<ConversationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
