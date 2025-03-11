import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApiPage from './pages/ApiPage';
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </>
    
  );
}

export default App;
