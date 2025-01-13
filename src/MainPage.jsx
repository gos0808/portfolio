import './main-page.css'
import React from 'react';


export const MainPage = () => {
    return (
    <div className='main-grid'>
        <p className='about-me'>H! I'm a front-end developer and business system analyst (BSA) with over 6 years of experience in project analysis, management, and making functional requirements.
        </p>


            <p className='titles'>BSA projects</p>
            <ul className="experience">
  <li>Electronic documents</li>
  <li>Entry journal</li>
  <li>Notification messaging</li>
</ul>

<p className='titles'>Development skills</p>
            <ul className="experience">
  <li>HTML / CSS</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>NodeJS</li>
</ul>


        <a className='link' href='https://www.linkedin.com/in/olga-bebkova/' target="_blank">LinkedIn</a>

        <h1 className='name-grid'>
            Olga Bebkova
        </h1>

    </div>
    )
};