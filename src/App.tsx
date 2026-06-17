import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell'
import DashboardPage from './pages/DashboardPage'
import RecordsPage from './pages/RecordsPage'
import MarketplacePage from './pages/MarketplacePage'
import RewardsPage from './pages/RewardsPage'
import ReportPage from './pages/ReportPage'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
