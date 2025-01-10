import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Features, HowToUse, Pricing, Roadmap} from './pages/pages';
import Home from './components/Home';
function App() {

  return (
    <>
      
      <Router>
      <main className="min-h-screen bg-[#0B090D]">
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
    </Router>
    <ButtonGradient />
    </>
  )
}

export default App
