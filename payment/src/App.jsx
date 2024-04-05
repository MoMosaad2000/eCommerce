import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pay from './components/Pay'; // Correct case: './Pay'
import Success from './components/Success'; // Correct case: './Success'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
