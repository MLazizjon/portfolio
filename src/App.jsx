import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/sidebar/SideBar';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Skill from "./pages/skill/Skill"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"

import { ToastContainer } from 'react-toastify'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleSettings = () => setSettingsOpen(prev => !prev);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Sidebar />
        <ToastContainer />

        {/* Settings Icon */}
        <div className="settings-icon" onClick={toggleSettings}>⚙️</div>

        {/* Settings Panel */}
        {settingsOpen && (
          <div className="settings-panel">
            <h4>Theme</h4>
            <button onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
