import React from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';

const ProjectBackground = () => {
    const projArray = Array(500).fill('Projects')
    const projMatrix = Array(100).fill(projArray)
    // const parallax = useParallax<HTMLDivElement>({
    //     rotate: [0, 360],
    //   });
  return (
    <div className='headingBackground'>
        {
            projMatrix.map((el, idx) => (
                <Parallax key={idx} translateX={idx%2 === 0 ? ["-200px", "200px"] : ["200px", "-200px"]} className={idx%2 === 0 ? "evenRow" : "oddRow"}>{el.map((elem, index) => (
                    <span key={index}>{elem}</span>
                ))}</Parallax>
            ))
        }
    </div>
  )
}

export default ProjectBackground