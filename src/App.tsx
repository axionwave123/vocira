import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import PublicLayout from './layouts/PublicLayout'

import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import SignInPage from './pages/auth/SignInPage'
import SignUpPage from './pages/auth/SignUpPage'
import RecoverPage from './pages/auth/RecoverPage'

import HomePage from './pages/HomePage'
import VoiceBridgePage from './pages/VoiceBridgePage'
import LivePage from './pages/LivePage'
import BrainPage from './pages/BrainPage'
import ConversationsPage from './pages/ConversationsPage'
import ConversationDetailPage from './pages/ConversationDetailPage'
import ReportsPage from './pages/ReportsPage'
import KnowledgePage from './pages/KnowledgePage'
import LanguageStudioPage from './pages/LanguageStudioPage'
import AudioStudioPage from './pages/AudioStudioPage'
import SettingsPage from './pages/SettingsPage'
import PlansPage from './pages/PlansPage'
import UsagePage from './pages/UsagePage'
import HelpPage from './pages/HelpPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/recover" element={<RecoverPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/voicebridge" element={<VoiceBridgePage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/brain" element={<BrainPage />} />
        <Route path="/conversations" element={<ConversationsPage />} />
        <Route path="/conversations/:id" element={<ConversationDetailPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:id" element={<ReportsPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/language-studio" element={<LanguageStudioPage />} />
        <Route path="/audio-studio" element={<AudioStudioPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
