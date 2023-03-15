import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
