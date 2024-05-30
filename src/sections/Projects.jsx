import React from "react";
import { projectData } from "../data/projectInfo";
import ProjectBackground from "../components/ProjectBackground";
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <ProjectBackground />
      {projectData.map((project, idx) => (
        <ProjectCard project={project} key={idx}/>
      ))}
    </section>
  );
};

export default Projects;

        // <a
        //   href={project.url}
        //   target="blank"
        //   className="card"
        //   key={idx}
        // >
        //   <div
        //   className="cardBackground"
        //   style={{
        //     backgroundImage: `url(${project.imgsrc})`,
        //   }}></div>
        //   <p>{project.name}</p>
        // </a>
