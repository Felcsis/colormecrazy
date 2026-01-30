import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { CalendarProvider } from './context/CalendarContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
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
import Login from './pages/Login/Login';
import Konoha from './pages/Konoha/Konoha';
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
    } else {
      // Ha nincs hash, az oldal tetejére scrollozunk
      window.scrollTo(0, 0);
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

function AppContent() {
  const location = useLocation();
  const isKonoha = location.pathname.startsWith('/konoha');

  return (
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
        <Route path="/login" element={<Login />} />
        <Route
          path="/konoha"
          element={
            <ProtectedRoute>
              <Konoha />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isKonoha && <Footer />}
      {!isKonoha && <MessengerButton />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CalendarProvider>
        <LanguageProvider>
          <Router>
            <AppContent />
          </Router>
        </LanguageProvider>
      </CalendarProvider>
    </AuthProvider>
  );
}

export default App;
