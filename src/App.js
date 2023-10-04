import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CoverPage from './sections/CoverPage';
import ProjectPage from './sections/ProjectPage';
import AboutMe from './sections/AboutMe';
import ContactPage from './sections/ContactPage'

function App() {
  return (
    <>
      <CoverPage />
      <ProjectPage />
      <AboutMe />
      <ContactPage />
    </>
  );
}

export default App;

// Add Navbar Here so that it can scroll through all elements