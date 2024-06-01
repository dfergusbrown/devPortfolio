import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Bio from "./sections/Bio";
import ContactPage from "./sections/ContactPage";
import Cover from "./sections/Cover";
import Projects from "./sections/Projects";

function App() {
  return (
    <ParallaxProvider>
      <Cover />
      <Bio />
      <Projects />
      <ContactPage />
    </ParallaxProvider>
  );
}

export default App;
