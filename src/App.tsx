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

// Vertical Pages
import HealthcarePage from './components/ui/verticals/HealthcarePage'
import ManufacturingPage from './components/ui/verticals/ManufacturingPage'
import TravelHospitalityPage from './components/ui/verticals/TravelHospitalityPage'
import TelecommunicationPage from './components/ui/verticals/TelecommunicationPage'
import EducationPage from './components/ui/verticals/EducationPage'
import FoodBeveragesPage from './components/ui/verticals/FoodBeveragesPage'
import RetailCommercePage from './components/ui/verticals/RetailCommercePage'
import BankingFinancePage from './components/ui/verticals/BankingFinancePage'
import PharmaPage from './components/ui/verticals/PharmaPage'
import EnergyUtilitiesPage from './components/ui/verticals/EnergyUtilitiesPage'
import InsurancePage from './components/ui/verticals/InsurancePage'
import MediaEntertainmentPage from './components/ui/verticals/MediaEntertainmentPage'
import TransportationLogisticsPage from './components/ui/verticals/TransportationLogisticsPage'
import RealEstatePage from './components/ui/verticals/RealEstatePage'
import GovernmentPage from './components/ui/verticals/GovernmentPage'

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
        
        {/* Verticals Routes */}
        <Route path="/verticals/healthcare" element={<HealthcarePage />} />
        <Route path="/verticals/manufacturing" element={<ManufacturingPage />} />
        <Route path="/verticals/travel-hospitality" element={<TravelHospitalityPage />} />
        <Route path="/verticals/telecommunication" element={<TelecommunicationPage />} />
        <Route path="/verticals/education" element={<EducationPage />} />
        <Route path="/verticals/food-beverages" element={<FoodBeveragesPage />} />
        <Route path="/verticals/retail-commerce" element={<RetailCommercePage />} />
        <Route path="/verticals/banking-finance" element={<BankingFinancePage />} />
        <Route path="/verticals/pharma" element={<PharmaPage />} />
        <Route path="/verticals/energy-utilities" element={<EnergyUtilitiesPage />} />
        <Route path="/verticals/insurance" element={<InsurancePage />} />
        <Route path="/verticals/media-entertainment" element={<MediaEntertainmentPage />} />
        <Route path="/verticals/transportation-logistics" element={<TransportationLogisticsPage />} />
        <Route path="/verticals/real-estate" element={<RealEstatePage />} />
        <Route path="/verticals/government" element={<GovernmentPage />} />
      </Routes>
    </Router>
  )
}

export default App
