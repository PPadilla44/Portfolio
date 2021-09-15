import React from "react";
import './Skills.css';
import { SkillsData } from './SkillsData';


const Skills = (props) => {


    return (
        <section name="skills">
            <h1 className="title">Skills</h1>
            <div className="main">
                { SkillsData.map((item, index) => {
                    return (
                        <div key={index} className="category">
                            <h3>{item.title}</h3>
                            <ul className="skillList">
                                {item.contents.map((a, i) => {
                                    return (
                                        <li className="skill" key={i}>
                                            <span className="skill-name">{a}</span>
                                            </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;