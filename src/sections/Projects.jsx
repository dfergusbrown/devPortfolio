import React from 'react'
import { projectData } from '../data/projectInfo'

const Projects = () => {
  return (
    <section className='projects'>
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