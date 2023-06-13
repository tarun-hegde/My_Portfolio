import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#000f26] ">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
