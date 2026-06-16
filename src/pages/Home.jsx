import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why from "../components/Why";
import About from "../components/About";
import UseCases from "../components/UseCases";
import Roadmap from "../components/Roadmap";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Why/>
      <About/>
      <UseCases/>
      <Roadmap/>
    </>
  );
};

export default Home;