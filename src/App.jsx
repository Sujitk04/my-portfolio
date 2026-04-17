import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen pt-20">
  
      <Navbar />
      <Hero />
      <About />
      <Skills />
     <Projects />
     <Contact />

    </div>
  
  );
}

export default App;