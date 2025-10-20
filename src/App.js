import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PrepareForCS from './pages/PrepareForCS';
import Y1S1 from './pages/Y1S1';
import Y1S2 from './pages/Y1S2';
import './App.css'; // We'll create this file for styling

function App() {
  return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prepare-for-cs" element={<PrepareForCS />} />
              <Route path="/y1s1-mod-review" element={<Y1S1 />} />
              <Route path="/y1s2-mod-review" element={<Y1S2 />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
