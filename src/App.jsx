import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />

        <div className="portfolio-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>

        <footer className="portfolio-footer">
          <p>&copy; {new Date().getFullYear()} Caroline Strandberg</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;