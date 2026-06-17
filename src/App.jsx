import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Number from "./components/Number"
import Why from "./components/Why";
import About from "./components/About";
import UseCases from "./components/UseCases";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics"
import ContractAddress from "./components/ContractAddress"
import Faq from "./components/Faqs"
import Join from "./components/Join"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Number />
      <Why/>
      <About/>
      <UseCases/>
      <Roadmap/>
      <Tokenomics />
      <ContractAddress />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;