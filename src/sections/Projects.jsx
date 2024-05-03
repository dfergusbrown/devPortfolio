import React from 'react'
import { projectData } from '../data/projectInfo'
import ProjectBackground from '../components/ProjectBackground'

const Projects = () => {
  return (
    <section className='projects'>
      <ProjectBackground />
        {projectData.map((project, idx) => (
            <div className='card' key={idx}>
                <img src="" alt="" />
                <p>{project.name}</p>
            </div>
        ))}
    </section>
  )
}

export default Projects