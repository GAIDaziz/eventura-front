import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
