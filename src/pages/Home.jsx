import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Number from "../components/Number"
import Why from "../components/Why";
import About from "../components/About";
import UseCases from "../components/UseCases";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics"
import ContractAddress from "../components/ContractAddress"
import Faq from "../components/Faqs"
import Join from "../components/Join"
// import Footer from "../components/Footer"
const Home = () => {
   const location1 = useLocation();
  useEffect(() => {
    const scrollToElement = () => {
      const { search } = location1;
      const params = new URLSearchParams(search);
      const scrollToId = params.get('');

      if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, [location1]);


  return (
    <>
       {/* <Navbar /> */}
            <Hero />
            <Why/>
             <Number />
            <About/>
            <UseCases/>
            <Roadmap/>
            <Tokenomics />
            <ContractAddress />
            <Faq />
            <Join />
            {/* <Footer /> */}
    </>
  );
};

export default Home;