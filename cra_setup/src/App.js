import './App.css';
import Page from './pages/page';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Help from './pages/Help';
import Support from './pages/Support';

const App = () =>  {
  const [currentPage, setCurrentPage] = useState('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard />;
            case 'about':
                return <About />;
            case 'help':
                return <Help />;
            case 'support':
                return <Support />;
            default:
                return <Dashboard />;
        }
    };
  return (
    <div>
      <Page setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
