import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ServicesPage from './pages/ServicesPage'
import CompanyPage from './pages/CompanyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </Router>
  )
}

export default App
