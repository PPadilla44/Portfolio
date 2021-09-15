import React from "react";
import './Projects.css';
import { ProjectsData } from "./ProjectsData.jsx";

const Projects = (props) => {


    return (
        <section>
            <h1 name="projects" className="title">Projects</h1>
            <div className="main">
                { ProjectsData.map((item, i) => {
                    return (
                        <div key={i} className="gifWrapper">
                            <h3>{item.title}</h3>
                            <img className="gif" src={item.src} alt={item.title}/>
                            <div className="project-foot">
                                <div className="project-blur"/>
                                <div className="project-btns">
                                    <button className="project-info">Info</button>
                                    <a rel="noopener noreferrer" href={item.link} target="_blank" className="project-srcCode">Source</a>
                                </div>
                            </div>
                        </div>
                    )
                    }) }
            </div>
        </section>
    )
}

export default Projects;