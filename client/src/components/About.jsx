import React from "react";
import me from '../assets/me-boxed.jpg';


const About = (props) => {


    return (
        <section>
            <h1>About me</h1>
            <img src={me} style={ {height: "15rem"} } className="border rounded" alt="its a me" />
        </section>
    )
}
export default About;