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
import {
  MoboRaptors,
  RaptorVista,
  BugBot,
  RaptorGen,
  RaptorHub,
  RaptorAssist,
  RaptorSelect,
  RaptorScan,
  RaptorVision,
  RaptorSecurity
} from './components/ui/tools'

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
        
        {/* Tools Routes */}
        <Route path="/tools/moboraptors" element={<MoboRaptors />} />
        <Route path="/tools/raptorvista" element={<RaptorVista />} />
        <Route path="/tools/bugbot" element={<BugBot />} />
        <Route path="/tools/raptorgen" element={<RaptorGen />} />
        <Route path="/tools/raptorhub" element={<RaptorHub />} />
        <Route path="/tools/raptorassist" element={<RaptorAssist />} />
        <Route path="/tools/raptorselect" element={<RaptorSelect />} />
        <Route path="/tools/raptorscan" element={<RaptorScan />} />
        <Route path="/tools/raptorvision" element={<RaptorVision />} />
        <Route path="/tools/raptorsecurity" element={<RaptorSecurity />} />
      </Routes>
    </Router>
  )
}

export default App
