import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Leaderboard from './Leaderboard'; // Import the Leaderboard component

function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/leaderboard' && (
        <>
          <div className="bg-black text-white">Saraswati Admin</div>
          <div><Link to="/leaderboard">Leaderboard</Link></div>
        </>
      )}
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;