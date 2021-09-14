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
                        <div key={i}>
                            <h3>{item.title}</h3>
                            <video 
                                className="video"
                                onMouseOver={(e) => e.target.play()} 
                                onMouseOut={(e) => e.target.pause()} >
                                <source src={item.src} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )
                    }) }
            </div>
        </section>
    )
}

export default Projects;