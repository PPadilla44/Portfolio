import React from "react";
import me from '../assets/me-boxed.jpg';
import './About.css'
import Resume from "../assets/Pablo.Padilla.Resume.pdf"

const About = (props) => {


    return (
        <section className="section">
            <div className="main">  
                <div className="top-content">
                    <img src={me} alt="its a me" />
                    <div className="contents">
                        <div className="fullstack">
                            <h1>Pablo Padilla</h1>
                            <h3>Full Stack Engineer</h3>
                        </div>
                        <div className="buttons">
                            {/* Scroll to Cotacct */}
                            <a href="/" className="option">Contact</a>
                            {/* Scroll to Projects */}
                            <a href="/" className="option">Projects</a>
                            <a href={Resume} target='_blank' className="option" rel='noopener noreferrer'>Resume</a>
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <h3>Committed and enthusiastic full-stack software engineer proficient in a variety of 
                        programming languages.</h3>
                </div>
            </div>
        </section>
    )
}
export default About;