import './About.scss';

import { FC } from 'react';
import image from '../../assets/profile.jpg';

const About: FC = () => {
    return (
        <div className="about">
            <img className="image" src={image} alt="img" />
            <div className="info">
                <p>Hello, my name is Yordan Radoslavov Yordanov (Dani) and I'm 20 years old. I'm Frontend Developer with some knowledge of backend. I like to deal with programming, everything that is in my head as an idea to implement it with code. </p>
                <br />
                <p>I'm a really hard working and self-motivated person. I'm also a really fast learner. I have intetrest in the web development and I love to creating single page applications, which will be useful for many people.</p>
                <br />
                <p> I can't impress you with years of programming behind my back, but I can certainly do that with my dedication, enthusiasm, and bulletproof work ethic.</p>
            </div>
            <div className="projects">
                
            </div>
        </div>
    );
}

export default About;
