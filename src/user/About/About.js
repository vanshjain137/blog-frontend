import React from 'react';
import '../About/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={require('../../assets/vanshpic.jpeg')} alt="profile-pic" className='about-image' />
        <h1>About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <p>
          Hello! I'm <strong>Vansh Jain</strong>. Welcome to my personal corner of the internet.
        </p>
        <p>
          I am a passionate Full Stack Developer and a lifelong learner. I started this blog 
          to share my experiences, tutorials, and thoughts on modern technology and software development. 
        </p>
        <p>
          On this website, you'll find blogs ranging from deep dives into the MERN stack to 
          simple tips for beginner coders. My goal is to make complex topics easy to understand 
          for everyone.
        </p>
        <p>
          When I'm not coding, you can usually find me exploring new tech trends or 
          working on personal projects to sharpen my skills.
        </p>
      </div>
    </div>
  );
};

export default About;