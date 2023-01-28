import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as LinkIcon } from '../../../assets/icons/link.svg';
import "./Project.scss"

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
                { window.innerWidth < 700 ? descreption.slice(0,200)+ " ...":descreption}
                </p>
              </div>
              <ul className="tools">
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
                    <Link to={links.githubLink ?? "#"} className="link" rel="noreferrer" target="_blank">
                        <Github />
                    </Link>
                  )
                } 
                {               
                  links.demoLink &&
                  (
                    <Link to={links.demoLink ?? "#"} className="link" rel="noreferrer" target="_blank">
                        <LinkIcon />
                    </Link>
                  )  
                }
              </div>
            </div>
            <div className="display">            
                              {               
                  links.demoLink &&
                  (
                    <a href={links.demoLink}>
                    <img src={image} alt="" />
                  </a>
                  )  
                }

            </div>
          </div>
  )
}

export default Project