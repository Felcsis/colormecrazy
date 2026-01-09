import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamMemberDetail from './pages/TeamMemberDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/csapat/:memberId" element={<TeamMemberDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
