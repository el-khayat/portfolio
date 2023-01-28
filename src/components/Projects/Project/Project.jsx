import React from 'react'
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as LinkIcon } from '../../../assets/icons/link.svg';

const Project = ({
    subTitle,
    title,
    descreption,
    tools,
    links,
    image 
}) => {
  return (
    <div className="project">
            <div className="info">
            <div className="sub-title">{subTitle}</div>
           <h3> <div className="title">{title}</div></h3>
              <div className="descreption">
                <p>
                {descreption}
                </p>
              </div>
              <ul class="tools">
                {
                    tools.map( (tool,index) =>{
                        return (<li key={index}>{tool}</li>)
                    })
                }
              </ul>
              <div className="links">
                {
                  links.githubLink &&
                  (
                    <a href={links.githubLink} className="link" target="_blank">
                        <Github />
                    </a>
                  )
                } 
                {               
                  links.demoLink &&
                  (
                    <a href={links.demoLink} className="link" target="_blank">
                        <LinkIcon />
                    </a>
                  )  
                }
              </div>
            </div>
            <div className="display">
              <a href="">
                <img src={image} alt="" />
              </a>
            </div>
          </div>
  )
}

export default Project