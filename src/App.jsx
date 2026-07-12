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
import StudentCalendar from './pages/Konoha/StudentCalendar';
import InventoryBrands from './pages/Konoha/InventoryBrands';
import MatrixProducts from './pages/Konoha/MatrixProducts';
import ProductDetails from './pages/Konoha/ProductDetails';
import Finance from './pages/Konoha/Finance';
import MessengerButton from './components/MessengerButton/MessengerButton';
import InstagramFeed from './components/InstagramFeed/InstagramFeed';
import { useSeo } from './hooks/useSeo';

// Route-onkénti SEO (helyi, Szeged-fókuszú kulcsszavakkal)
const SEO_BY_PATH = {
  '/': {
    title: 'Color Me Crazy – Fodrászat & Kozmetika Szeged | Női, Férfi, Gyermek, Raszta',
    description: 'Professzionális fodrászat és kozmetika Szegeden. Női, férfi, gyermek hajvágás és raszta. Időpontfoglalás: +36 30 089 4587. Nemes Takács utca 8.',
  },
  '/szolgaltatasok': {
    title: 'Szolgáltatásaink – Fodrászat & Kozmetika Szeged | Color Me Crazy',
    description: 'Hajvágás, festés, raszta és kozmetika Szegeden. Női, férfi és gyermek szolgáltatások, áraink és időpontfoglalás: +36 30 089 4587.',
  },
  '/galeria': {
    title: 'Galéria – Munkáink | Color Me Crazy Fodrászat Szeged',
    description: 'Nézd meg legszebb hajmunkáinkat: festés, raszta, hajvágás és kozmetika. Color Me Crazy fodrászat, Szeged.',
  },
  '/oktatas': {
    title: 'Fodrász Oktatás & Raszta Képzés Szeged | Color Me Crazy',
    description: 'Fodrász és raszta képzések Szegeden. Szerezz valódi szaloni tapasztalatot a Color Me Crazy csapatával.',
  },
  '/blog': {
    title: 'Blog – Hajápolási Tippek & Trendek | Color Me Crazy Szeged',
    description: 'Hajápolási tippek, hajtrendek és szaloni újdonságok a Color Me Crazy fodrászattól, Szeged.',
  },
};

function getSeoForPath(pathname) {
  if (SEO_BY_PATH[pathname]) return { ...SEO_BY_PATH[pathname], path: pathname };
  if (pathname.startsWith('/csapat/')) {
    return {
      title: 'Csapatunk | Color Me Crazy Fodrászat Szeged',
      description: 'Ismerd meg a Color Me Crazy fodrász csapatát Szegeden – tapasztalt női, férfi és raszta szakemberek.',
      path: pathname,
    };
  }
  return { ...SEO_BY_PATH['/'], path: pathname };
}

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

  useSeo(getSeoForPath(location.pathname));

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
        <Route
          path="/konoha/tanuloi-naptar"
          element={
            <ProtectedRoute>
              <StudentCalendar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/konoha/keszlet"
          element={
            <ProtectedRoute>
              <InventoryBrands />
            </ProtectedRoute>
          }
        />
        <Route
          path="/konoha/keszlet/matrix"
          element={
            <ProtectedRoute>
              <MatrixProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/konoha/keszlet/termek/:productId"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/konoha/penzugy"
          element={
            <ProtectedRoute>
              <Finance />
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
