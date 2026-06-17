import './App.css'
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Presale from './pages/Presale';

function ScrollAnimationHandler() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll(
        "section, .page-section, .scroll-section"
      );

      elements.forEach((el) => {
        el.classList.add("scroll-animate");
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>

      <ScrollAnimationHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
