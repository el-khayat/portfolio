import React from 'react'
import { useState,useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './Projects.scss';
import Image from '../../assets/images/projects/todo-app.png';
import Image2 from '../../assets/images/projects/app2.jpeg';

const Projects = () => {
 
  const changeOpasity = (target)=>{

    document.getElementById("image-1").style.opacity = 0 ;
    document.getElementById("image-2").style.opacity = 0 ;
    document.getElementById("image-3").style.opacity = 0 ;
    document.getElementById(target).style.opacity = 1;
  }

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
        <div className="display">
          {/*  insert image here  */}
          <img src={Image} id="image-1"  className='image' alt="todo app" />
          <img src={Image2}id="image-2"    className='image'  alt="todo app" />
          <img src={Image} id="image-3" className='image' alt="todo app" />
        </div>
        <div className="list">
        <div className="project-name" id="image-1-togle" onMouseEnter={()=>changeOpasity("image-1")} >  
          <div className="icon">→</div>
          <span className="name"> Todo App </span>
        </div>
        <div className="project-name" id="image-2-togle" onMouseEnter={()=>changeOpasity("image-2")}> 
          <div className="icon">
            → 
          </div>
          <span className="name"> 
            Job Student
          </span>
        </div>
        <div className="project-name" onMouseEnter={()=>changeOpasity("image-3")}> 
          <div className="icon">
            → 
          </div>
          <span className="name"> 
          e-commerce
          </span>
        </div>
        <div className="project-name"> 
          <div className="icon">
            → 
          </div>
          <span className="name"> 
          travel agency
          </span>
        </div>
        <div className="project-name"> 
          <div className="icon">
            → 
          </div>
          <span className="name"> 
            project 5
          </span>
        </div>


        </div>

      </div>

      
   
      
    </div>
    <Loader type="pacman" />
  </>
  )
}

export default Projects