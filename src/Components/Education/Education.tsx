import './Education.scss';


import { FC } from 'react'
import images from '../images';

const Education: FC = () => {
    return (
        <div className="education">
            <h2>Education</h2>
            <div className="info">
                <p>I graduated from high school in the town Oryahovo with a degree in <strong>informatics</strong>. Then I started my education at Software University(SoftUni) with the <strong>javascript</strong> programming language. It was hard for me, but I didn't give up.</p>
                <p>Initially, we studied the basic concepts of language. Then we moved on to more complex tasks that developed our algorithmic thinking. Finally, we started developing <strong>single page applications</strong> with <strong>React</strong>.</p>
                <p>With a lot of effort and hard work now I have skills with technologies such as <strong>ES6+</strong>, <strong>React</strong>, <strong>React-Router</strong>, <strong>React-Hooks</strong>, <strong>Redux</strong>, strong knowledge of <strong>HTML5/CSS3</strong> and some knowledge of <strong>Git/GitHub</strong>. I also have some knowledge in <strong>back-end</strong> with <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Mongoose ODM</strong>, <strong>JSON Web Token(JWT)</strong>, <strong>bcrypt</strong>, <strong>REST APIs</strong>, but my stronger side is the <strong>front-end</strong>.</p>
            </div>
            <h2>Courses</h2>
            <div className="courses">
                <ul>
                    <li><strong>Programming Basics with JavaScript</strong>(Working with more complex logical checks, Working with more complex loops nested for loops and while)</li>
                    <li><strong>JS Fundamentals</strong>(Analysis of complex problems and reduction to computer-executable steps, HTML5/CSS3)</li>
                    <li><strong>JS Advanced</strong>(Object oriented programming, Functional programming)</li>
                    <li><strong>JS Applications</strong>(Work with REST API and asynchronous programming, Create simple Single Page applications)</li>
                    <li><strong>ReactJS</strong>(Working with remote REST services, Knowledge of React and JSX, Component-based applications)</li>
                    <li><strong>JS Back-End</strong>(Web Server, knowledge of the HTTP protocol, Working with non-relational databases(MongoDB), Create server application with Express, Authentication and Authorization with JWT)</li>
                </ul>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div>
                    {images[0].map(img => {
                        return (
                            <img src={img} alt="img" />
                        )
                    })}
                </div>
                <div>
                    {images[1].map(img => {
                        return (
                            <img src={img} alt="img" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education
