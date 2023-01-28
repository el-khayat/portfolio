import React from 'react'
import { useState,useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './Projects.scss';
import Project from './Project/Project';
import ProjectsData from '../../data/projects';


const Projects = () => {

  // const [image,setImage] = useState(Image);
  const [letterClass, setLetterClass] = useState('text-animate')
  // const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>

      </div>
      <div className='projects'>

      {
        ProjectsData.map(({id,
          subTitle,
          title,
          descreption,
          tools,
          links,
          image
        })=>{
          return <Project 
          key={id} 
          subTitle={subTitle}
          title={title}
          descreption={descreption}
          tools={tools}
          links={links}
          image={image}
          />
        })
      }
      </div>
  
      
    </div>
    <Loader type="pacman" />
  </>
  )
}

export default Projects