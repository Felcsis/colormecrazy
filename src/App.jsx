import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamMemberDetail from './pages/TeamMemberDetail';
import Education from './pages/Education';
import Blog from './pages/Blog';

function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <Team />
      <About />
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
          <Route path="/oktatas" element={<Education />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
