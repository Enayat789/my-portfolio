import About from "./Components/About";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Work />
      <Projects />
    </>
  );
}

export default App;
