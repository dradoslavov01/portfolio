import './About.scss';

import { FC } from 'react';
import image from '../../assets/profile.jpg';
import projectsInfo from '../projetcrsInfo';



const About: FC = () => {
    return (
        <div className="about">
            <h2>About</h2>
            <img className="image" src={image} alt="img" />
            <div className="info">
                <p>Hello, my name is Yordan Radoslavov Yordanov(Dani) and I'm 20 years old. I'm front-end developer with some knowledge in the back end. I love programming, because everything in my head as an idea implements it with code.</p>
                <br />
                <p>I'm a really hard-working and self-motivated person. I'm also a really fast learner. I have intetrest in the web development and I love to create single page applications, which will be useful for many people.</p>
                <br />
                <p> I can't impress you with years of programming behind my back, but I can certainly do that with my dedication, enthusiasm, and bulletproof work ethic.</p>
            </div>
            <h2>Personal Projects</h2>
            <div className="projects">
                {projectsInfo.map((project) => {
                    return (
                        <a href={project.href} target="_blank">
                            <div className="project">
                                <img src={project.img} alt="img"></img>
                                <p className="textBox">{project.mask}</p>
                                <p className="title">{project.title}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default About;
