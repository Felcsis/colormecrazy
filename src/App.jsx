import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TeamMemberDetail from './pages/TeamMemberDetail/TeamMemberDetail';
import Education from './pages/Education/Education';
import Blog from './pages/Blog/Blog';

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
