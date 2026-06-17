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
import Homepage from './Pages/Home';
import Presale from './Pages/Presale';

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
        <Route path="/" element={<Homepage />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;


// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Number from "./components/Number"
// import Why from "./components/Why";
// import About from "./components/About";
// import UseCases from "./components/UseCases";
// import Roadmap from "./components/Roadmap";
// import Tokenomics from "./components/Tokenomics"
// import ContractAddress from "./components/ContractAddress"
// import Faq from "./components/Faqs"
// import Join from "./components/Join"
// import Footer from "./components/Footer"
// function App() {

//   return (
//     <div className="bg-black">
//       <Navbar />
//       <Hero />
//       <Number />
//       <Why/>
//       <About/>
//       <UseCases/>
//       <Roadmap/>
//       <Tokenomics />
//       <ContractAddress />
//       <Faq />
//       <Join />
//       <Footer />
//     </div>
//   );
// }

// export default App;