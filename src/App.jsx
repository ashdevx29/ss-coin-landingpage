import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import About from "./components/About";
import UseCases from "./components/UseCases";
import Roadmap from "./components/Roadmap";
function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Why/>
      <About/>
      <UseCases/>
      <Roadmap/>
    </div>
  );
}

export default App;