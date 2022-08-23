import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import ProfileDetailPage from './ProfileDetailPage';
import FeedPage from './FeedPage';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/profile">To Profile</Link>
          </li>
          <li>
            <Link to="/profile/dhwani" exact>
              To Dhwani's Profile
            </Link>
          </li>
          <li>
            <Link to="/feed">To Feed</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:username" element={<ProfileDetailPage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
