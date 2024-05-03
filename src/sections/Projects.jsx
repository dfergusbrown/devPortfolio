import React from "react";
import { projectData } from "../data/projectInfo";
import ProjectBackground from "../components/ProjectBackground";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <ProjectBackground />
      {projectData.map((project, idx) => (
        <a
          href={project.url}
          target="blank"
          className="card"
          key={idx}
        >
          <div
          className="cardBackground"
          style={{
            backgroundImage: `url(${project.imgsrc})`,
          }}></div>
          <p>{project.name}</p>
        </a>
      ))}
    </section>
  );
};

export default Projects;
