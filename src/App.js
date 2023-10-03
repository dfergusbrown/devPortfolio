import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CoverPage from './sections/CoverPage';
import ProjectPage from './sections/ProjectPage';
import AboutMe from './sections/AboutMe';

function App() {
  return (
    <>
      <CoverPage />
      <ProjectPage />
      <AboutMe />
    </>
  );
}

export default App;

// Add Navbar Here so that it can scroll through all elements