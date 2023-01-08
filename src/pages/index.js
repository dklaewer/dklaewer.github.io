import React, { useState } from 'react'
import '../styles/global.css' // Import Tailwind styles
import CVPage from '../components/CVPage';
import HomePage from '../components/HomePage';
import NavigationBar from '../components/NavigationBar';
import PublicationsPage from '../components/PublicationsPage'
import TalksPage from '../components/TalksPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="container mx-auto">
        <NavigationBar onPageChange={handlePageChange} />
        <div>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'publications' && <PublicationsPage />}
          {currentPage === 'cv' && <CVPage />}
          {currentPage === 'talks' && <TalksPage />}
        </div>
      </div>
    </div>
  )
}

export default App
