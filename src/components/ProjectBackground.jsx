import React from 'react'

const ProjectBackground = () => {
    const projArray = Array(50).fill('Projects')
    const projMatrix = Array(50).fill(projArray)
  return (
    <div className='headingBackground'>
        {
            projMatrix.map((el, idx) => (
                <div key={idx}>{el.map((elem, index) => (
                    <span key={index}>{elem}</span>
                ))}</div>
            ))
        }
    </div>
  )
}

export default ProjectBackground