import { useState } from "react";
import { projectData } from "../data/projectInfo";
import ProjectBackground from "../components/ProjectBackground";
import ProjectCard from "../components/ProjectCard";
import "./style/projects.css"

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <section className="projects" id="projects">
      <ProjectBackground />
      {projectData.map((project, idx) => (
        <ProjectCard
          project={project}
          key={idx}
          isExpanded={idx === expandedIndex}
          handleToggle={() => handleToggle(idx)}
        />
      ))}
    </section>
  );
};

export default Projects;
