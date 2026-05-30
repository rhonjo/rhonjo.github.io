import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import './styles/global.css';

const TABS = ['About', 'Resume', 'Portfolio'];

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':     return <About />;
      case 'Resume':    return <Resume />;
      case 'Portfolio': return <Portfolio />;
      default:          return <About />;
    }
  };

  return (
    <div className="app-container">
      <main>
        <Sidebar />

        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              {TABS.map((tab) => (
                <li key={tab} className="navbar-item">
                  <button
                    className={`navbar-link${activeTab === tab ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
