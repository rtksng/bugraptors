import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ServicesPage from './pages/ServicesPage'
import CompanyPage from './pages/CompanyPage'
import CorporateNewsPage from './pages/CorporateNewsPage'
import InclusionDiversityPage from './pages/InclusionDiversityPage'
import LifeAtBugRaptorsPage from './pages/LifeAtBugRaptorsPage'
import CareerPage from './pages/CareerPage'
import EngagementModelPage from './pages/EngagementModelPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/corporate-news" element={<CorporateNewsPage />} />
        <Route path="/company/inclusion-diversity" element={<InclusionDiversityPage />} />
        <Route path="/company/life-at-bugraptors" element={<LifeAtBugRaptorsPage />} />
        <Route path="/company/career" element={<CareerPage />} />
        <Route path="/company/engagement-model" element={<EngagementModelPage />} />
      </Routes>
    </Router>
  )
}

export default App
