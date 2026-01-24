import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MagicServiceCards from './components/MagicServiceCards/MagicServiceCards';
import TeamMemberDetail from './pages/TeamMemberDetail/TeamMemberDetail';
import Education from './pages/Education/Education';
import Blog from './pages/Blog/Blog';
import MessengerButton from './components/MessengerButton/MessengerButton';
import InstagramFeed from './components/InstagramFeed/InstagramFeed';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Reviews />
      <InstagramFeed />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <ScrollToHash />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/csapat/:memberId" element={<TeamMemberDetail />} />
            <Route path="/oktatas" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/szolgaltatasok" element={<MagicServiceCards />} />
            <Route path="/galeria" element={<Gallery />} />
          </Routes>
          <Footer />
          <MessengerButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
