import './main-page.css';
import React from 'react';

export const MainPage = () => {
  return (
    <div className="main-grid">
      <p className="about-me">
        Hi! I'm a <strong>Business System Analyst (BSA)</strong> with
        <strong> 6+ years</strong> of experience, primarily in business system
        analysis and project management, complemented by hands-on{' '}
        <strong>front-end development skills</strong>


      </p>
      <p className='about-me-2'>
           Experienced in <strong>leading projects</strong> through{' '}
        <strong>all phases of the lifecycle</strong> — from requirements
        gathering and stakeholder alignment to solution design, development
        coordination, and delivery. Skilled at{' '}
        <strong>translating business needs</strong> into clear technical
        requirements, <strong>managing timelines</strong>, and applying
        front-end development knowledge to bridge the gap between business and
        technical teams.  
      </p>

      <p className="titles">BSA projects</p>
      <ul className="experience">
        <li>Electronic documents</li>
        <li>Entry journal</li>
        <li>Notification messaging</li>
        <li>Payments</li>
      </ul>

      <p className="titles">Development skills</p>
      <ul className="experience">
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>NodeJS</li>
      </ul>

      <a
        className="link"
        href="https://www.linkedin.com/in/olga-bebkova/"
        target="_blank"
      >
        LinkedIn
      </a>

      <h1 className="name-grid">Olga Bebkova</h1>
    </div>
  );
};
