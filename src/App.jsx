import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Leaderboard from './Leaderboard'; // Import the Leaderboard component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* <div className="bg-black text-white">Saraswati Admin</div> */}
      {/* <div><Link to="/leaderboard">Leaderboard</Link></div> */}
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;