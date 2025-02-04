import About from "./Components/About";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Work />
      <Projects />
    </>
  );
}

export default App;
