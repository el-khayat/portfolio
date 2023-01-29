import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './About.scss'
import Tools from './Tools'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          As a highly skilled and motivated web developer, I have a strong foundation in a range of technologies, including Laravel, React, Java, Node.js, JavaScript, and Python. I excel at problem-solving and communication, and I am always eager to learn and grow in the dynamic field of IT.
           With a passion for innovation and a dedication to delivering top-quality results, I am confident in my ability to thrive in any project or team environment.
          </p>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
                    
        </div>

  <Tools/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
