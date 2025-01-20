// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch' for React Router v6+
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// Import additional components when ready
// import About from './pages/About';
// import Work from './pages/Work';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
