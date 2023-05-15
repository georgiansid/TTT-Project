import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Output from './components/output';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

function ButtonComponent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return <p><Link to="/output" id='button'>Submit</Link></p>;
}

export default App;