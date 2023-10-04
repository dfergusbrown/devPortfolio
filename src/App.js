import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHeader from "./components/NavbarHeader";
import CoverPage from './sections/CoverPage';
import ProjectPage from './sections/ProjectPage';
import AboutMe from './sections/AboutMe';
import ContactPage from './sections/ContactPage'

function App() {
  return (
    <div className='parentcontainer'>
      <NavbarHeader />
      <CoverPage />
      <ProjectPage />
      <AboutMe />
      <ContactPage />
    </div>
  );
}

export default App;

// Add Navbar Here so that it can scroll through all elements