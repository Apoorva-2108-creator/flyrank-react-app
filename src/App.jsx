import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import About from './pages/About'
import Health from './pages/Health'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </>
  )
}

export default App